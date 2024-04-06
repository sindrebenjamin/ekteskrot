import React, { useState } from "react";

import {
  Input,
  TextArea,
  StyledH1,
  Section,
  Container,
} from "../components/TailwindComponents";
import Button from "../components/Button";

const Contact = () => {
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValue = formData.get("email");

    setError("");
    let errorFlag = false;

    if (checkStringLength(formData, "full-name") < 3) {
      setError("Name must be at least 3 characters.");
      errorFlag = true;
    } else if (checkStringLength(formData, "subject") < 3) {
      setError("Subject must be at least 3 characters.");
      errorFlag = true;
    } else if (typeof emailValue === "string" && !emailRegex.test(emailValue)) {
      setError("Must be a valid email.");
      errorFlag = true;
    } else if (checkStringLength(formData, "body") < 3) {
      setError("Message must be at least 3 characters.");
      errorFlag = true;
    }

    if (!errorFlag) {
      console.log("Form submission is valid, form data:");
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
    }
  };

  const checkStringLength = (formData: FormData, fieldName: string) => {
    const value = formData.get(fieldName);
    return typeof value === "string" ? value.length : 0;
  };

  return (
    <main>
      <Section $noXPadding={false} className="">
        <Container className="flex justify-center items-center h-screen max-w-[500px]">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <StyledH1>Contact</StyledH1>
            <ContactInput
              id="full-name"
              name="full-name"
              title="Full name"
              placeholder="Enter your full name"
            />
            <ContactInput
              id="subject"
              name="subject"
              title="Subject"
              placeholder="What you want to talk about?"
            />
            <ContactInput
              id="email"
              name="email"
              title="Email"
              placeholder="Where can we reach you?"
            />
            <ContactInputTextArea
              id="body"
              name="body"
              title="Message"
              placeholder="What is your story?"
            />
            <Button
              type="submit"
              size="py-3.5 w-full"
              color="bg-amber-700 text-white"
              hoverState="hover:bg-amber-800"
            >
              Send
            </Button>
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </Container>
      </Section>
    </main>
  );
};

export default Contact;

interface ContactInputProps {
  id: string;
  title: string;
  placeholder: string;
  name: string;
}

const ContactInput = ({ id, name, title, placeholder }: ContactInputProps) => (
  <div className="flex flex-col ">
    <label htmlFor={id}>{title}</label>
    <Input required name={name} id={id} placeholder={placeholder} />
  </div>
);

interface ContactInputTextAreaProps {
  id: string;
  title: string;
  placeholder: string;
  name: string;
}

const ContactInputTextArea = ({
  id,
  name,
  title,
  placeholder,
}: ContactInputTextAreaProps) => (
  <div className="flex flex-col ">
    <label htmlFor={id}>{title}</label>
    <TextArea required name={name} id={id} placeholder={placeholder} />
  </div>
);

// Ensure your `Input` and `TextArea` components properly handle the `name` prop.
