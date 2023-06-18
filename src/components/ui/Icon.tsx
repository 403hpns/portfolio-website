"use client";

import Link from "next/link";
import { ReactNode } from "react";

const Icon = ({
  element,
  href,
  ...props
}: {
  element: ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      {...props}
      className="w-auto flex justify-center items-center cursor-pointer hover:text-primary hover:scale-110"
    >
      {element}
    </Link>
  );
};

export default Icon;
