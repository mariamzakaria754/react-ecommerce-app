import Container from "@/components/common/Container";
import Breadcrumb from "@/components/common/Breadcrumb";
import ContactInfo from "@/sections/ContactSection/ContactInfo";
import ContactForm from "@/sections/ContactSection/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

function ContactPage() {
  const { t } = useLanguage();

  return (
    <section className="pb-24">
      <Container>
        <Breadcrumb
          links={[{ label: t.home, href: "/" }, { label: t.contactBreadcrumb }]}
        />

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[340px_1fr]
            gap-6
            sm:gap-8
          "
        >
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export default ContactPage;
