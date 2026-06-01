import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function InfoGrid({
  items = [],
  loading,
  error,
  Skeleton,
  renderItem,
  columns = "md:grid-cols-2 xl:grid-cols-3",
}) {
  const { isArabic } = useLanguage();

  if (loading) return Skeleton ? <Skeleton /> : null;

  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  if (!items.length)
    return (
      <p className="text-center text-gray-500 py-10">
        {isArabic ? "لا توجد بيانات متاحة" : "No data available"}
      </p>
    );

  return (
    <section className="py-14">
      <div
        className={`
          grid
          grid-cols-1
          ${columns}
          gap-y-16
          gap-x-10
        `}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id || index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            {renderItem(item, index)}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default InfoGrid;
