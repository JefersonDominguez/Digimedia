"use client";
import { useState } from "react";

export default function Pregunta({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="border-l-4 pl-4 border-solid border-[#5c1787]">
      <h3 
        className="font-bold text-[25px] cursor-pointer hover:text-[#5c1787]" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </h3>
      {isOpen && <p className="text-[18px] mt-4">{answer}</p>}
    </article>
  );
}
