import { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { VariantProps, cva } from "class-variance-authority";
import { merge } from "@/lib/merge";

const inputVariants = cva("w-full", {
  variants: {
    variant: {
      default: "outline-none border-none rounded bg-zinc-800",
    },
    sizing: {
      default: "p-4 my-2 ",
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
