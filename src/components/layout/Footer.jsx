import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FiTwitter } from "react-icons/fi";
import { Copyright, Send } from "lucide-react";

import qrImage from "@/assets/images/qr.png";
import googlePlay from "@/assets/images/google-play.png";
import appStore from "@/assets/images/app-store.png";

import { Container } from "@/components/common";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useLanguage();

  const accountLinks = [
    { label: t.myAccount, href: "/account" },
    { label: t.loginRegister, href: "/signup" },
    { label: t.cart, href: "/cart" },
    { label: t.wishlist, href: "/wishlist" },
    { label: t.shop, href: "/shop" },
  ];

  const quickLinks = [
    { label: t.privacyPolicy, href: "/privacy" },
    { label: t.termsOfUse, href: "/terms" },
    { label: t.faq, href: "/faq" },
    { label: t.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white mt-20">
      <Container>
        <div className="pt-16 pb-8">
          {/* ── GRID ── */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-5
              gap-10 md:gap-8
            "
          >
            {/* ── COL 1: Logo + Subscribe ── */}
            <div className="space-y-5 sm:col-span-2 xl:col-span-1 2xl:col-span-1">
              <Link to="/" className="shrink-0">
                <h2 className="font-inter text-3xl font-bold tracking-wide">
                  {t.logo}
                </h2>
              </Link>

              <h3 className="font-medium text-xl font-poppins">
                {t.subscribe}
              </h3>

              <p className="text-base font-poppins text-gray-300">
                {t.subscribeDesc}
              </p>

              <div
                className="
                  flex items-center
                  border border-gray-500 rounded-md
                  px-4 py-3 font-poppins
                  w-full max-w-[260px]
                  focus-within:border-gray-300 transition-colors
                "
              >
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="
                    bg-transparent outline-none flex-1 min-w-0
                    text-sm placeholder:text-[#F9F9F933]
                  "
                />
                <Send className="w-5 h-5 cursor-pointer shrink-0 hover:text-gray-300 transition-colors" />
              </div>
            </div>

            {/* ── COL 2: Support ── */}
            <div className="space-y-5 font-poppins">
              <h3 className="text-xl font-medium">{t.support}</h3>
              <ul className="space-y-4 text-base text-gray-300">
                <li>{t.addresss}</li>
                <li>{t.email}</li>
                <li>{t.phone}</li>
              </ul>
            </div>

            {/* ── COL 3: Account ── */}
            <div className="space-y-5 font-poppins">
              <h3 className="text-xl font-medium">{t.account}</h3>
              <ul className="space-y-4 text-base text-gray-300">
                {accountLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── COL 4: Quick Link ── */}
            <div className="space-y-5 font-poppins">
              <h3 className="text-xl font-medium">{t.quickLink}</h3>
              <ul className="space-y-4 text-base text-gray-300">
                {quickLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── COL 5: Download App ── */}
            <div className="space-y-5 font-poppins sm:col-span-2 xl:col-span-1 2xl:col-span-1">
              <h3 className="text-xl font-medium">{t.downloadApp}</h3>
              <p className="text-base text-gray-400">{t.downloadDesc}</p>

              {/* QR + Stores */}
              <div className="flex gap-4 items-center">
                <div className="w-20 h-20 shrink-0 rounded-md overflow-hidden">
                  <img
                    src={qrImage}
                    alt="QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <a href="#" aria-label="Google Play">
                    <img
                      src={googlePlay}
                      alt="Google Play"
                      className="w-28 h-auto"
                    />
                  </a>
                  <a href="#" aria-label="App Store">
                    <img
                      src={appStore}
                      alt="App Store"
                      className="w-28 h-auto"
                    />
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-5 pt-1">
                <RiFacebookLine className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
                <FiTwitter className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
                <PiInstagramLogoLight className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
                <RiLinkedinLine className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-[#F9F9F933] pt-6 pb-8">
        <div className="flex items-center justify-center gap-2 font-poppins text-base text-[#F9F9F933]">
          <Copyright className="w-5 h-5" strokeWidth={1} />
          <p>{t.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
