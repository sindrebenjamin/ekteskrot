import {
  Input,
  TextArea,
  StyledH1,
  Section,
  Container,
} from "../components/TailwindComponents";
import { useState } from "react";
import Button from "../components/Button";

const Contact = () => {
  const [error, setError] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target.form);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValue = formData.get("email");

    setError("");
    let errorFlag = false;

    if (checkStringLength(formData, "full-name") < 3) {
      setError("Name must be at least 3 characters.");
      errorFlag = true;
    }
    if (checkStringLength(formData, "subject") < 3) {
      setError("Subject must be at least 3 characters.");
      errorFlag = true;
    }
    if (typeof emailValue === "string") {
      if (!emailRegex.test(emailValue)) {
        setError("Must be a valid email.");
        errorFlag = true;
      }
    }
    if (checkStringLength(formData, "body") < 3) {
      setError("Message must be at least 3 characters.");
      errorFlag = true;
    }
    if (!errorFlag) {
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
    }
  }

  function checkStringLength(formData: any, fieldName: string) {
    const value = formData.get(fieldName);
    if (typeof value === "string") {
      return value.length;
    }
    return 0;
  }
  return (
    <main>
      <Section $noXPadding={false} className="">
        <Container className="flex justify-center items-center h-screen max-w-[500px]">
          <form action="" className="w-full flex flex-col gap-4">
            <StyledH1>Contact</StyledH1>
            <ContactInput
              id="full-name"
              title="Full name"
              placeholder="Enter your full name"
            />
            <ContactInput
              id="subject"
              title="Subject"
              placeholder="What you want to talk about?"
            />
            <ContactInput
              id="email"
              title="Email"
              placeholder="Where can we reach you?"
            />
            <ContactInputTextArea
              id="body"
              title="Message"
              placeholder="What is your story?"
            />
            <Button
              onClick={handleSubmit}
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
}

const ContactInput: React.FC<ContactInputProps> = ({
  id,
  title,
  placeholder,
}) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={id}>{title}</label>
      <Input required name={id} id={id} placeholder={placeholder} />
    </div>
  );
};

interface ContactInputTextAreaProps {
  id: string;
  title: string;
  placeholder: string;
}

const ContactInputTextArea: React.FC<ContactInputTextAreaProps> = ({
  id,
  title,
  placeholder,
}) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={id}>{title}</label>
      <TextArea required name={id} id={id} placeholder={placeholder} />
    </div>
  );
};
