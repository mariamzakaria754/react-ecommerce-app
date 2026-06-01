import { useMemo } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import BillingForm from "@/sections/CheckoutSection/BillingForm";
import PaymentSection from "@/sections/CheckoutSection/PaymentSection";
import { useLanguage } from "@/context/LanguageContext";

function CheckoutPage() {
  const { t } = useLanguage();

  return (
    <main className="pb-24">
      <Container>
        <Breadcrumb
          links={[
            { label: t.accountLabel, href: "/account" },
            { label: t.myAccountLabel, href: "/account" },
            { label: t.productLabel, href: "/" },
            { label: t.viewCartLabel, href: "/cart" },
            { label: t.checkoutLabel },
          ]}
        />
      </Container>

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 sm:gap-12 items-start">
            <BillingForm />
            <PaymentSection />
          </div>
        </Container>
      </section>
    </main>
  );
}

export default CheckoutPage;
