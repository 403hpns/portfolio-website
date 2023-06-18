import { merge } from "@/lib/merge";
import { VariantProps, cva } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

const inputVariants = cva("", {
  variants: {
    variant: {
      default: "w-full",
    },
    sizing: {
      default: "p-4 my-2 outline-none border-none rounded bg-zinc-800",
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
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, className, variant, sizing, ...props }, ref) => {
    return (
      <div className="relative w-full before:top-5 before:left-0 before:w-5 before:h-5 before:bg-red-500">
        <label className="py-4" htmlFor={name}>
          {label}
        </label>
        <input
          name={name}
          ref={ref}
          {...props}
          className={merge(inputVariants({ className, variant, sizing }))}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
