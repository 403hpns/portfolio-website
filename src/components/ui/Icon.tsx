"use client";

import { ReactNode } from "react";
import Button from "./Button";

interface IconProps {
  href: string;
  children: ReactNode;
}

const Icon = ({ href, children }: IconProps) => {
  return (
    <Button as="a" href={href} variant="icon" size="small">
      {children}
    </Button>
  );
};

export default Icon;
