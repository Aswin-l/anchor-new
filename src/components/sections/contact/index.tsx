import ContactHero from "./contact-hero";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

export default function ContactSection() {
  return (
    <>
      <ContactHero />

      <section className="pb-28 bg-white dark:bg-[#171F2E]">
        <div className="wrapper">
          <div className="pt-18 grid lg:grid-cols-5 gap-14 items-start">

            <div className="lg:col-span-2">
              <ContactInfo />
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}