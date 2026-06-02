import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";
import useAuthStore from "@/store/useAuthStore";
import useUserStore from "@/store/useUserStore";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
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

function SignupForm() {
  const { t, isArabic } = useLanguage();
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const updateUser = useUserStore((s) => s.updateUser);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });
  const passwordValue = watch("password");

  async function onSubmit(data) {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      const user = res.user;
      await updateProfile(user, { displayName: data.name });
      login({ uid: user.uid, email: user.email }, user.accessToken);
      updateUser({
        firstName: data.name.split(" ")[0] || "",
        lastName: "",
        email: data.email,
      });
      toast.success(t.accountCreated);
      navigate("/");
    } catch {
      toast.error(t.signupFailed);
    }
  }

  async function handleGoogleSignup() {
    try {
      setGoogleLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      login({ uid: user.uid, email: user.email }, user.accessToken);
      updateUser({
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: "",
        email: user.email,
      });
      toast.success(t.googleSignupSuccess);
      navigate("/");
    } catch {
      toast.error(t.googleSignupFailed);
    } finally {
      setGoogleLoading(false);
    }
  }

  const inputClass = `
    w-full bg-transparent border-b border-gray-300 py-3 outline-none font-poppins
    text-gray-900 focus:border-[#DB4444] transition-all duration-200
    ${isArabic ? "pr-10 pl-10 text-right" : "pl-10 pr-10 text-left"}
  `;
  const iconClass = `absolute top-3 text-gray-400 ${isArabic ? "right-0" : "left-0"}`;
  const eyeClass = `absolute top-3 text-gray-400 ${isArabic ? "left-0" : "right-0"}`;

  return (
    <motion.div variants={container} className="w-full">
      {/* HEADER */}
      <motion.div variants={item} className="mb-2">
        <div className="inline-flex items-center gap-2 text-[#DB4444] text-sm ">
          <Sparkles size={16} />
          {t.createAccount}
        </div>
        <h1 className="mt-3 text-3xl sm:text-[34px] font-bold text-gray-900 mb-5 font-inter">
          {t.joinExclusive}
        </h1>
        <p className="mt-2 text-gray-500 text-sm sm:text-base font-poppins">
          {t.signupDesc}
        </p>
      </motion.div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
        {/* NAME */}
        <motion.div variants={item} className="relative">
          <User className={iconClass} size={18} />
          <input
            type="text"
            placeholder={t.fullNamePlaceholder}
            autoComplete="name"
            className={inputClass}
            {...register("name", {
              required: t.validNameShort,
              minLength: { value: 3, message: t.validNameShort },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 font-poppins">
              {errors.name.message}
            </p>
          )}
        </motion.div>

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
            <p className="text-red-500 text-sm mt-1 font-poppins">
              {errors.email.message}
            </p>
          )}
        </motion.div>

        {/* PASSWORD */}
        <motion.div variants={item} className="relative">
          <Lock className={iconClass} size={18} />
          <input
            type={showPass ? "text" : "password"}
            placeholder={t.passwordPlaceholder}
            autoComplete="new-password"
            className={inputClass}
            {...register("password", {
              required: t.validCurrentPasswordRequired,
              minLength: { value: 6, message: t.validPasswordLength },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                message: t.validPasswordPattern,
              },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className={eyeClass}
          >
            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1 font-poppins">
              {errors.password.message}
            </p>
          )}
        </motion.div>

        {/* CONFIRM PASSWORD */}
        <motion.div variants={item} className="relative">
          <Lock className={iconClass} size={18} />
          <input
            type={showConfirm ? "text" : "password"}
            placeholder={t.confirmPasswordPlaceholder}
            autoComplete="new-password"
            className={inputClass}
            {...register("confirmPassword", {
              required: t.validConfirmPasswordRequired,
              validate: (v) => v === passwordValue || t.validPasswordsNoMatch,
            })}
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className={eyeClass}
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1 font-poppins">
              {errors.confirmPassword.message}
            </p>
          )}
        </motion.div>

        {/* SUBMIT */}
        <motion.div variants={item}>
          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-full bg-[#DB4444] text-white font-medium flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-60"
          >
            {isSubmitting ? (
              t.creating
            ) : (
              <>
                {t.createAccount}
                <ArrowRight
                  size={18}
                  className={isArabic ? "rotate-180" : ""}
                />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* GOOGLE */}
        <motion.div variants={item}>
          <button
            type="button"
            onClick={handleGoogleSignup}
            disabled={googleLoading}
            className="w-full py-3 border border-gray-300 rounded-full font-poppins flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition disabled:opacity-60"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="h-5 w-5"
              alt="google"
            />
            {googleLoading ? t.loading : t.continueWithGoogle}
          </button>
        </motion.div>

        {/* LINK */}
        <motion.p
          variants={item}
          className="text-center text-sm text-gray-500 font-inter"
        >
          {t.alreadyHaveAccount}{" "}
          <Link to="/login" className="text-[#DB4444] font-medium">
            {t.logIn}
          </Link>
        </motion.p>
      </form>
    </motion.div>
  );
}

export default SignupForm;
