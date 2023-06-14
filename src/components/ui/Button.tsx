"use client";

import { ButtonHTMLAttributes, FC, forwardRef, ReactNode } from "react";
import { merge } from "@/lib/merge";
import { cva, VariantProps } from "class-variance-authority";

import { BsArrowRight } from "react-icons/bs";

const buttonVariants = cva(
  "relative flex justify-center items-center gap-2 w-fit z-10 ",
  {
    variants: {
      variant: {
        default:
          "z-1 bg-primary hover:translate-x-1 hover:translate-y-1 before:absolute before:top-2.5 before:left-2.5 before:-z-10 before:w-full before:h-full before:border-2 before:border-primary before:hover:-translate-x-1 before:hover:-translate-y-1 after:hidden after:hover:block after:absolute after:animate-button-hover  after:w-full after:h-full after:bg-black/20  hover:font-semibold after:transition",
      },
      size: {
        default: "px-6 py-4",
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
  children: ReactNode;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isLoading, children, className, variant, size, ...props }, ref) => {
    return (
      <div className="p-3 overflow-hidden ">
        <button
          ref={ref}
          disabled={isLoading}
          className={merge(buttonVariants({ className, variant, size }))}
          {...props}
        >
          {children}
          <BsArrowRight />
        </button>
      </div>
    );
  }
);

Button.displayName = "Button";
export default Button;
