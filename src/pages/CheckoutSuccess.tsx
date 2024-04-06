import { Container, Section } from "../components/TailwindComponents";
import { NavLink } from "react-router-dom";

const CheckOutSuccess = () => {
  return (
    <main className="">
      <Section
        $noXPadding={false}
        className="flex items-center justify-center h-screen text-center"
      >
        <Container className="flex flex-col items-center gap-3">
          <h1 className="text-3xl">Thank you for your order!</h1>
          <p>We will send you a confirmation email shortly.</p>
          <NavLink
            className="underline text-amber-600 hover:text-amber-700 duration-100 ease-in-out transition-colors"
            to="/"
          >
            Back to homepage
          </NavLink>
        </Container>
      </Section>
    </main>
  );
};

export default CheckOutSuccess;
