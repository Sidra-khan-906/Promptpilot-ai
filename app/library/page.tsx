"use client";

import { useEffect, useMemo, useState } from "react";

import LibraryHeader from "../components/library/LibraryHeader";
import SearchBar from "../components/library/SearchBar";
import PromptCard from "../components/library/PromptCard";


type SavedPrompt = {
  title: string;
  prompt: string;
  date: string;
};


export default function LibraryPage() {


  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [search, setSearch] = useState("");



  useEffect(() => {

    const prompts = JSON.parse(
      localStorage.getItem("savedPrompts") || "[]"
    );


    const cleanPrompts = prompts.filter(
      (prompt: SavedPrompt) =>
        prompt.title?.trim() &&
        prompt.prompt?.trim()
    );


    setSavedPrompts(cleanPrompts);


  }, []);





  const defaultPrompts = [
    {
      title: "Marketing Campaign",
      category: "Marketing",
      description:
        "Generate a complete AI marketing campaign for a SaaS startup.",
    },

    {
      title: "Code Review",
      category: "Development",
      description:
        "Review code, detect bugs, and suggest performance improvements.",
    },

    {
      title: "Blog Writer",
      category: "Content",
      description:
        "Create SEO-optimized blog posts with headings and FAQs.",
    },

    {
      title: "Resume Builder",
      category: "Career",
      description:
        "Generate an ATS-friendly resume tailored to a job description.",
    },

    {
      title: "Study Assistant",
      category: "Education",
      description:
        "Explain difficult topics with examples and quiz questions.",
    },

    {
      title: "Business Plan",
      category: "Business",
      description:
        "Create a professional business plan with market analysis.",
    },
  ];





  const filteredDefaults = useMemo(() => {

    return defaultPrompts.filter((item) => {

      const text =
        `${item.title} ${item.category} ${item.description}`
          .toLowerCase();


      return text.includes(search.toLowerCase());

    });

  }, [search]);







  const filteredSaved = useMemo(() => {

    return savedPrompts.filter((prompt) => {

      const text =
        `${prompt.title} ${prompt.prompt}`
          .toLowerCase();


      return text.includes(search.toLowerCase());

    });

  }, [savedPrompts, search]);







  return (

    <main className="min-h-screen bg-[#0B1020] px-6 py-10 text-white md:px-10">


      <LibraryHeader />



      <SearchBar
        value={search}
        onChange={setSearch}
      />





      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">



        {/* Saved AI Prompts */}

        {filteredSaved.map((prompt, index) => (

          <PromptCard

            key={index}

            title={prompt.title}

            category="AI Generated"

            description={prompt.prompt}

          />

        ))}






        {/* Default Templates */}

        {filteredDefaults.map((item) => (

          <PromptCard

            key={item.title}

            title={item.title}

            category={item.category}

            description={item.description}

          />

        ))}



      </div>



    </main>

  );
}