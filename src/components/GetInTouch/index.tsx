import { Container } from "..";
import ContactAside from "./ContactAside";
import ContactForm from "./ContactForm";

export default function GetInTouch() {
  return (
    <Container>
      <div className="my-12 max-w-tv pb-8">
        <div className="shadow-contact-card rounded-md px-4 py-6 lg:p-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <h1
                className="
                  mb-4 px-6 text-2xl font-medium text-primary-text lg:px-0 lg:text-3xl lg:leading-normal
                "
              >
                Get In Touch
              </h1>
              <ContactForm />
            </div>
            <ContactAside />
          </div>
        </div>
      </div>
    </Container>
  );
}
