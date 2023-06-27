"use client";

import {
  ButtonHTMLAttributes,
  FC,
  forwardRef,
  MouseEventHandler,
  ReactNode,
} from "react";
import { merge } from "@/lib/merge";
import { cva, VariantProps } from "class-variance-authority";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const buttonVariants = cva(
  "relative flex justify-center items-center gap-2 z-10 transition-all duration-300 disabled:bg-zinc-800 disabled:after:border-none disabled:pointer-events-none disabled:cursor-not-allowed ",
  {
    variants: {
      variant: {
        default: `w-full z-1 bg-primary hover:translate-x-1 hover:translate-y-1 hover:font-semibold
        
        before:absolute before:top-2.5 before:left-2.5 before:-z-10 before:w-full before:h-full before:border-2 before:border-primary before:hover:-translate-x-1 before:hover:-translate-y-1 before:transition
          
        after:absolute after:top-0 after:left-0 after:w-0 after:h-full hover:after:w-full hover:after:h-full  after:bg-pink-500/80 after:-z-10 after:transition-all after:duration-300`,

        contact: "text-5xl rounded bg-primary cursor-pointer hover:bg-pink-500",
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
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isLoading,
      icon = <BsArrowRight />,
      href,
      onClick,
      children,
      className,
      variant,
      size,
      ...props
    },
    ref
  ) => {
    return (
      <div className="p-3 overflow-hidden ">
        <Link
          href={href || "#"}
          target={href?.includes("#") ? "_self" : "_blank"}
          onClick={(ev) => {
            if (!href) ev.preventDefault();
          }}
        >
          <button
            ref={ref}
            disabled={isLoading}
            onClick={onClick}
            className={merge(buttonVariants({ className, variant, size }))}
            {...props}
          >
            {children}
            {icon}
          </button>
        </Link>
      </div>
    );
  }
);

Button.displayName = "Button";
export default Button;
