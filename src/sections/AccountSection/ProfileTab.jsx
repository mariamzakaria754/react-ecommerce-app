import { useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { FiUser, FiMail, FiMapPin, FiLock } from "react-icons/fi";

import useAuthStore from "@/store/useAuthStore";
import useUserStore from "@/store/useUserStore";
import { useLanguage } from "@/context/LanguageContext";

import InputField from "@/components/common/InputField";
import PrimaryButton from "@/components/common/PrimaryButton";
import { createProfileSchema } from "@/validation/profileSchema";

function ProfileTab() {
  const { t } = useLanguage();

  const schema = useMemo(() => createProfileSchema(t), [t]);

  const completeAccount = useAuthStore((s) => s.completeAccount);
  const { user, updateUser, setLiveProfile, resetLiveProfile } = useUserStore();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      address: user?.address || "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const [firstName, lastName] = useWatch({
    control,
    name: ["firstName", "lastName"],
  });

  useEffect(() => {
    setLiveProfile({ firstName, lastName });
  }, [firstName, lastName, setLiveProfile]);

  useEffect(() => () => resetLiveProfile(), [resetLiveProfile]);

  async function onSubmit(data) {
    try {
      await new Promise((r) => setTimeout(r, 1200));

      updateUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
      });

      completeAccount();

      toast.success(t.profileSaved, {
        duration: 3000,
        style: { borderRadius: "16px", background: "#111827", color: "#fff" },
      });

      reset({
        ...data,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch {
      toast.error(t.somethingWentWrong);
    }
  }

  function handleReset() {
    reset({
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      address: user?.address || "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    resetLiveProfile();
  }

  return (
    <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm lg:p-8">
      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 font-inter">
          {t.myProfileTitle}
        </h2>
        <p className="mt-2 text-sm text-gray-500 font-poppins">
          {t.myProfileDesc}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 font-inter">
        {/* PERSONAL INFO */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-gray-900 ">
            {t.personalInfo}
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            <InputField
              label={t.firstName}
              placeholder={t.firstNamePlaceholder}
              icon={FiUser}
              error={errors.firstName?.message}
              autoComplete="given-name"
              {...register("firstName")}
            />
            <InputField
              label={t.lastName}
              placeholder={t.lastNamePlaceholder}
              icon={FiUser}
              error={errors.lastName?.message}
              autoComplete="family-name"
              {...register("lastName")}
            />
            <InputField
              label={t.emailAddress}
              type="email"
              placeholder={t.emailAddressPlaceholder}
              icon={FiMail}
              error={errors.email?.message}
              autoComplete="email"
              {...register("email")}
            />
            <InputField
              label={t.address}
              placeholder={t.addressPlaceholder}
              icon={FiMapPin}
              error={errors.address?.message}
              autoComplete="street-address"
              {...register("address")}
            />
          </div>
        </div>

        {/* SECURITY */}
        <div className="border-t pt-8">
          <h3 className="mb-5 text-lg font-semibold text-gray-900">
            {t.security}
          </h3>

          <div className="space-y-5">
            <InputField
              type="password"
              label={t.currentPassword}
              placeholder={t.currentPasswordPlaceholder}
              icon={FiLock}
              error={errors.currentPassword?.message}
              {...register("currentPassword")}
              autoComplete="current-password"
            />
            <InputField
              type="password"
              label={t.newPassword}
              placeholder={t.newPasswordPlaceholder}
              icon={FiLock}
              error={errors.newPassword?.message}
              {...register("newPassword")}
              autoComplete="new-password"
            />
            <InputField
              type="password"
              label={t.confirmPassword}
              placeholder={t.confirmPasswordPlaceholder}
              icon={FiLock}
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
              autoComplete="new-password"
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col-reverse gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            {isDirty ? t.unsavedChanges : t.upToDate}
          </p>

          <div className="flex gap-3">
            <PrimaryButton
              type="button"
              variant="outline"
              onClick={handleReset}
            >
              {t.reset}
            </PrimaryButton>
            <PrimaryButton
              type="submit"
              loading={isSubmitting}
              disabled={!isDirty || !isValid}
            >
              {t.saveChanges}
            </PrimaryButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfileTab;
