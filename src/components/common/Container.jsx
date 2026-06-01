/*
  ─── Container Component ──────────────────────────────────────────
  بتستخدم الـ container settings من tailwind.config.js مباشرة
  اللي حطينا فيها:
    center: true  → mx-auto أوتوماتيك
    padding: responsive padding لكل breakpoint

  الـ props:
    fluid   → max-w-full  (للـ sections اللي عايزاها full width زي الـ hero)
    wide    → max-w-8xl   (1600px للـ sections اللي محتاجة مساحة أكبر)
    className → لأي overrides إضافية
  ──────────────────────────────────────────────────────────────────
*/
function Container({ children, className = "", fluid = false, wide = false }) {
  const maxWidth = fluid
    ? "max-w-full"
    : wide
      ? "max-w-8xl"
      : "max-w-container"; // max-w-container = 1440px من الـ config

  return (
    <div
      className={`
        container
        ${maxWidth}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;
