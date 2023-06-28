import { merge } from "@/lib/merge";
import { VariantProps, cva } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

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
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "ref">,
    VariantProps<typeof inputVariants> {
  name: string;
  label?: string;
  type: "text" | "email" | "number" | "submit" | "reset";
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
  validationSchema?: {};
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  errors,
  type,
  className,
  variant,
  sizing,
  register,
  validationSchema,
  ...props
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="py-4">
        {label}
      </label>
      <input
        type={type}
        id={name}
        aria-invalid={errors[name] ? "true" : "false"}
        className={merge(inputVariants({ className, variant, sizing }))}
        {...register(name, validationSchema)}
        {...props}
      />
      <p>{errors[name]?.message?.toString()}</p>
    </div>
  );
};

export default Input;
