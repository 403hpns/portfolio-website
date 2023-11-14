"use client";

import { useForm } from "react-hook-form";
import { useRef } from "react";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import Input from "./ui/Input";
interface ContactFormProps {
  isOpen: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen }) => {
  const form = useRef<HTMLFormElement>(null!);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async () => {
    const res = await emailjs.sendForm(
      "service_vk4654c",
      "template_uj92b0j",
      form.current,
      "jDR9STT3BhreUpkmd"
    );

    if (res.status === 200) {
      form.current.reset();

      toast.success("Successfully sended a message.", {
        position: "bottom-center",
      });
    } else {
      toast.error(
        "An error occurred while sending the message. Please try again later."
      );
    }
  });

  if (!isOpen) return;

  return (
    <form
      ref={form}
      onSubmit={onSubmit}
      action="mailto:dev.403hpns@pm.me"
      className="form px-8 py-6 w-full lg:w-1/2 flex flex-col justify-center items-center gap-8 bg-zinc-900/90"
    >
      <p>Feel free to send me a meessage.</p>
      <div className="w-full">
        <Input
          name="email"
          label="E-mail *"
          type="email"
          register={register}
          validationSchema={{ required: "E-mail is required." }}
          errors={errors}
        />
      </div>

      <Input
        name="subject"
        type="text"
        label="Subject"
        register={register}
        errors={errors}
      />

      <div className="w-full">
        <label htmlFor="message">Message *</label>
        <textarea
          {...register("message", {
            required: "Message is required.",
            minLength: {
              value: 4,
              message: "Message has to contain at least 4 characters.",
            },
          })}
          className="my-2 p-2 min-h-[100px] min-w-full outline-none border-none resize-none bg-zinc-800"
        />
        {errors["message"]?.message?.toString()}
      </div>
      <div className="flex justify-center items-center gap-4">
        <Input
          type="submit"
          name="button.submit"
          value="Send message"
          register={register}
          errors={errors}
          className="hover:bg-primary transition cursor-pointer"
        />
        <Input
          type="reset"
          name="button.reset"
          value="Clear"
          register={register}
          errors={errors}
          className="hover:bg-primary transition cursor-pointer"
        />
      </div>
    </form>
  );
};
export default ContactForm;
