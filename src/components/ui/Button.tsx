"use client";

import { ButtonHTMLAttributes, FC, forwardRef, ReactNode } from "react";
import { merge } from "@/lib/merge";
import { cva, VariantProps } from "class-variance-authority";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const buttonVariants = cva(
  "relative w-full flex justify-center items-center gap-2 z-10",
  {
    variants: {
      variant: {
        default:
          "z-1 bg-primary hover:translate-x-1 hover:translate-y-1 before:absolute before:top-2.5 before:left-2.5 before:-z-10 before:w-full before:h-full before:border-2 before:border-primary before:hover:-translate-x-1 before:hover:-translate-y-1 after:hidden after:hover:block after:absolute after:animate-button-hover  after:w-full after:h-full after:bg-pink-500/80 after:-z-10  hover:font-semibold after:transition",
      },
      size: {
        default: "px-8 py-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  href?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isLoading, href, children, className, variant, size, ...props }, ref) => {
    return (
      <div className="p-3 overflow-hidden ">
        <Link href={href || "#"}>
          <button
            ref={ref}
            disabled={isLoading}
            className={merge(buttonVariants({ className, variant, size }))}
            {...props}
          >
            {children}
            <BsArrowRight />
          </button>
        </Link>
      </div>
    );
  }
);

Button.displayName = "Button";
export default Button;
