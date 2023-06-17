"use client";

import { ReactNode } from "react";

const Icon = ({ element }: { element: ReactNode }) => {
  return (
    <div className="flex justify-center items-center cursor-pointer hover:text-primary hover:scale-110">
      {element}
    </div>
  );
};

export default Icon;
