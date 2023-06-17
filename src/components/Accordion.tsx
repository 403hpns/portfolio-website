"use client";

import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";

interface AccordionProps {
  header: string;
  body: string;
}

const Accordion: React.FC<AccordionProps> = ({ header, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="w-full p-4 flex justify-between items-center rounded-t bg-zinc-800 cursor-pointer hover:bg-zinc-700"
        onClick={() => setIsOpen((prevValue) => !prevValue)}
      >
        {header}
        <span>
          <AiOutlineArrowDown
            className={`transition ${isOpen && "rotate-[180deg]"}`}
          />
        </span>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, top: -100 }}
          animate={{ opacity: 1, top: 0 }}
          className="p-4 rounded-b text-justify bg-zinc-600"
        >
          {body}
        </motion.div>
      )}
    </div>
  );
};

export default Accordion;
