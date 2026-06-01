import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";
import useAuthStore from "@/store/useAuthStore";
import useUserStore from "@/store/useUserStore";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function LoginForm() {
  const { t, isArabic } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((s) => s.login);
  const updateUser = useUserStore((s) => s.updateUser);
  const from = location.state?.from || "/";
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  const emailValue = watch("email");

  async function onSubmit(data) {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      const user = res.user;
      login({ uid: user.uid, email: user.email }, user.accessToken);
      updateUser({
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: "",
        email: user.email,
      });
      toast.success(t.loggedInSuccess);
      navigate(from, { replace: true });
    } catch {
      toast.error(t.invalidCredentials);
    }
  }

  async function handleForgotPassword() {
    if (!emailValue) return toast.error(t.enterEmailFirst);
    try {
      await sendPasswordResetEmail(auth, emailValue);
      toast.success(t.resetEmailSent);
    } catch {
      toast.error(t.somethingWentWrong);
    }
  }

  const inputClass = `
    w-full bg-transparent  border-b border-gray-300 py-3 outline-none
    transition-all duration-300 focus:border-[#DB4444] text-gray-900
    ${isArabic ? "pr-10 pl-10 text-right" : "pl-10 pr-10 text-left "}
  `;

  const iconClass = `absolute top-3 text-gray-400 ${isArabic ? "right-0" : "left-0"}`;
  const eyeClass = `absolute top-3 text-gray-400 ${isArabic ? "left-0" : "right-0"}`;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      {/* HEADER */}
      <motion.div variants={item} className="mb-7 font-inter">
        <div className="inline-flex items-center gap-2 text-[#DB4444] text-sm ">
          <ShieldCheck size={16} />
          {t.secureLogin}
        </div>
        <h1 className="mt-3 text-3xl sm:text-[34px] font-bold text-gray-900 mb-5 ">
          {t.welcomeBack}
        </h1>
        <p className="mt-2 text-gray-500 text-sm sm:text-base font-poppins">
          {t.loginDesc}
        </p>
      </motion.div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 font-poppins"
      >
        {/* EMAIL */}
        <motion.div variants={item} className="relative">
          <Mail className={iconClass} size={18} />
          <input
            type="email"
            placeholder={t.emailPlaceholder2}
            autoComplete="email"
            className={inputClass}
            {...register("email", {
              required: t.validEmailRequired,
              pattern: { value: /^\S+@\S+$/i, message: t.validEmailInvalid },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </motion.div>

        {/* PASSWORD */}
        <motion.div variants={item} className="relative">
          <Lock className={iconClass} size={18} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder={t.passwordPlaceholder}
            autoComplete="current-password"
            className={inputClass}
            {...register("password", {
              required: t.validCurrentPasswordRequired,
              minLength: { value: 6, message: t.validPasswordLength },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={eyeClass}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </motion.div>

        {/* FORGOT */}
        <motion.div
          variants={item}
          className={`flex ${isArabic ? "justify-start" : "justify-end"}`}
        >
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-sm text-[#DB4444] hover:underline"
          >
            {t.forgotPassword}
          </button>
        </motion.div>

        {/* BUTTON */}
        <motion.div variants={item}>
          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="
              w-full py-3 rounded-full
              bg-[#DB4444] text-white font-medium
              flex items-center justify-center gap-2
              transition-all hover:opacity-90
              disabled:opacity-60
            "
          >
            {isSubmitting ? (
              t.loggingIn
            ) : (
              <>
                {t.logIn}
                <ArrowRight
                  size={18}
                  className={isArabic ? "rotate-180" : ""}
                />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* LINK */}
        <motion.p
          variants={item}
          className="text-center text-sm text-gray-500 font-inter"
        >
          {t.noAccount}
          <Link to="/signup" className="text-[#DB4444] font-medium">
            {t.createOne}
          </Link>
        </motion.p>
      </form>
    </motion.div>
  );
}

export default LoginForm;
