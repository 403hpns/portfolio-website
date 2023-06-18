import { merge } from "@/lib/merge";
import { VariantProps, cva } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

const inputVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
    sizing: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    sizing: "default",
  },
});

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  children: ReactNode;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, variant, sizing, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={merge(inputVariants({ className, variant, sizing }))}
      >
        {children}
      </input>
    );
  }
);

Input.displayName = "Input";
export default Input;
