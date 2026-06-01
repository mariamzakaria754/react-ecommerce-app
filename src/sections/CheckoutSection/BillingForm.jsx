import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { createCheckoutSchema } from "@/validation/checkoutSchema";
import useCheckoutStore from "@/store/useCheckoutStore";
import useUserStore from "@/store/useUserStore";
import CheckoutInput from "@/components/common/CheckoutInput";
import SaveInfoCheckbox from "./SaveInfoCheckbox";
import { useLanguage } from "@/context/LanguageContext";

function BillingForm() {
  const { t } = useLanguage();
  const schema = useMemo(() => createCheckoutSchema(t), [t]);

  const user = useUserStore((s) => s.user);
  const billingDetails = useCheckoutStore((s) => s.billingDetails);
  const setBillingField = useCheckoutStore((s) => s.setBillingField);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: billingDetails,
  });

  useEffect(() => {
    reset({
      firstName: user?.firstName || "",
      companyName: "",
      streetAddress: user?.address || "",
      apartment: "",
      city: "",
      phone: "",
      email: user?.email || "",
    });
  }, [user, reset]);

  const fields = [
    { labelKey: "fieldFirstName", name: "firstName", required: true },
    { labelKey: "fieldCompanyName", name: "companyName" },
    { labelKey: "fieldStreetAddress", name: "streetAddress", required: true },
    { labelKey: "fieldApartment", name: "apartment" },
    { labelKey: "fieldCity", name: "city", required: true },
    { labelKey: "fieldPhone", name: "phone", required: true, type: "tel" },
    { labelKey: "fieldEmail", name: "email", required: true, type: "email" },
  ];

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit(onSubmit)}
      className="
        bg-white rounded-3xl p-6 sm:p-8
        border border-gray-100
        shadow-[0_10px_40px_rgba(0,0,0,0.04)]
        space-y-8
      "
    >
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-[32px] lg:text-[38px] font-bold tracking-tight pb-7 font-inter">
          {t.checkoutTitle}
        </h2>
        <p className="text-sm sm:text-[15px] text-gray-500 font-poppins">
          {t.checkoutDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 ">
        {fields.map((field) => (
          <div
            key={field.name}
            className={
              ["streetAddress", "apartment", "email"].includes(field.name)
                ? "md:col-span-2"
                : ""
            }
          >
            <CheckoutInput
              label={t[field.labelKey]}
              name={field.name}
              type={field.type || "text"}
              required={field.required}
              register={register}
              error={errors[field.name]}
              onChange={(e) => setBillingField(field.name, e.target.value)}
            />
          </div>
        ))}
      </div>

      <SaveInfoCheckbox />
    </motion.form>
  );
}

export default BillingForm;
