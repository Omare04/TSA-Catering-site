"use client";
import React, { useState, useEffect } from "react";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Toaster } from "./components/ui/toaster";
import { useToast } from "./components/ui/use-toast";

const toastStyles = {
  success: {
    backgroundColor: "#4BB543", // Green
    color: "#FFFFFF",
    border: "none",
  },
  error: {
    backgroundColor: "#F44336", // Red
    color: "#FFFFFF",
  },
};

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Add this line
  const { toast } = useToast();

  const handleChange = (e: { target: { name: string; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsSubmitting(true); // Set submitting state to true

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        toast({
          title: "Message Sent!",
          description: "Your message was sent successfully.",
          style: toastStyles.success,
          duration: 3000,
        });
      } else {
        setStatus("Failed to send message.");
        toast({
          title: "Message Failed To Send",
          description: "Your message failed to send, please try again later.",
          variant: "destructive",
          style: toastStyles.error,
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred.");
      toast({
        title: "Message Failed To Send",
        description: "Your message failed to send, please try again later.",
        variant: "destructive",
        style: toastStyles.error,
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="max-w-4xl h-auto w-full mx-auto rounded-none md:rounded-2xl  border-stone-400 border-opacity-30 p-5 shadow-input bg-gray-200 bg-opacity-50 dark:bg-black border ">
      <Toaster />
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
        Contact Us
      </h2>

      <form className="h-auto pt-3" onSubmit={handleSubmit}>
        <div className="h-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstname"
              name="firstName"
              placeholder="First Name"
              type="text"
              className="bg-white"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastname"
              name="lastName"
              placeholder="Last Name"
              type="text"
              className="bg-white"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="xyz@gmail.com"
            type="email"
            name="email"
            className="bg-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={cn(
              `flex w-full border-none p-2 bg-white dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md text-base  file:border-0 file:bg-transparent 
            file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             `
            )}
            rows={4}
            cols={50}
            style={{ resize: "none" }}
          ></textarea>
        </LabelInputContainer>
        <button
          type="submit"
          disabled={isSubmitting} // Add this line
          className={`inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
