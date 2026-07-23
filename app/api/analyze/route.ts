import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required." },
        { status: 400 }
      );
    }

    let response;

    for (let i = 0; i < 3; i++) {
      try {
        response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: `
You are Prompt Doctor AI.

Analyze the following prompt.

Return ONLY valid JSON in this format:

{
  "score": 0,
  "diagnosis": [],
  "optimizedPrompt": "",
  "tips": []
}

Prompt:
${prompt}
`,
        });

        break;

      } catch (err: any) {

        if (err.status === 503 && i < 2) {
          await new Promise((resolve) =>
            setTimeout(resolve, 2000)
          );
          continue;
        }

        throw err;
      }
    }

    const text = response?.text;

    let result;

    try {
      result = JSON.parse(text ?? "");
    } catch {
      return NextResponse.json(
        {
          error: "Gemini returned invalid JSON.",
          raw: text,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(result);

  } catch (error: any) {

    console.error(error);

    if (error.status === 503) {
      return NextResponse.json(
        {
          error:
            "AI service is currently busy. Please try again in a few moments.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        error: String(error),
      },
      { status: 500 }
    );
  }
}