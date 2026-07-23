import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";


export async function POST(req: Request) {

  try {

    const { question } = await req.json();


    const response = await ai.models.generateContent({

      model: "gemini-3.5-flash",

      contents: `
You are an AI Tutor.

Explain the answer clearly for a student.

Question:
${question}
      `,

    });


    return NextResponse.json({
      answer: response.text,
    });


  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to generate answer",
      },
      {
        status: 500,
      }
    );

  }

}