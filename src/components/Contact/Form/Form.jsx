"use client";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { contactSchema } from "@/lib/Sechma/ContactSechma";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

export function Form() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/contact", data);
      reset();
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      toast.error(
        error.response?.data?.error ||
          "Something went wrong, please try again.",
      );
    }
  };
  return (
    <form
      className="text-background flex flex-col gap-3 mt-10 lg:mt-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field className="inputs">
        <FieldLabel htmlFor="email">Your email</FieldLabel>
        <Input
          id="email"
          type="email"
          placeholder="Enter your Email"
          className="p-4 bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 border-gray-200 "
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </Field>

      <Field className="inputs">
        <FieldLabel htmlFor="subject">Subject</FieldLabel>
        <Input
          id="subject"
          type="text"
          placeholder="Subject"
          className="p-4 bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 border-gray-200"
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject.message}</p>
        )}
      </Field>

      <Field className="inputs">
        <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
        <Textarea
          id="textarea-message"
          placeholder="Type your message here."
          className=" bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 border-gray-200"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className={
          "w-full bg-purple-500 hover:bg-purple-600 hoverEffect p-3 rounded-lg cursor-pointer text-white font-bold"
        }
      >
        {isSubmitting ? (
         <div className="flex justify-center items-center ">
           <Loader2 className="animate-spinr" size={20} />
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}
