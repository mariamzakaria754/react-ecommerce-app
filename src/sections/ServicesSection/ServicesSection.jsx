import { useServices } from "@/hooks/useServices";
import ServicesSkeleton from "@/components/skeletons/ServicesSkeleton";
import InfoGrid from "@/components/common/InfoGrid";
import { useLanguage } from "@/context/LanguageContext";

function ServicesSection() {
  const { services, loading, error } = useServices();
  const { t } = useLanguage();

  return (
    <InfoGrid
      items={services}
      loading={loading}
      error={error}
      Skeleton={ServicesSkeleton}
      columns="md:grid-cols-2 xl:grid-cols-3"
      renderItem={(service) => (
        <div className="flex flex-col items-center text-center group px-4">
          {/* ICON */}
          <div
            className="
            w-16 h-16
            sm:w-18 sm:h-18
            lg:w-20 lg:h-20
            rounded-full bg-[#C1C0C1] p-[10px]
            flex items-center justify-center
            transition-all duration-300
            group-hover:bg-[#DB4444]/30
          "
          >
            <div
              className="
              w-full h-full rounded-full bg-black
              flex items-center justify-center
              transition-all duration-300
              group-hover:bg-[#DB4444]
            "
            >
              <img
                src={service.icon}
                alt={t[service.titleKey]}
                className="
                  w-8 h-8
                  sm:w-9 sm:h-9
                  lg:w-10 lg:h-10
                  object-contain brightness-0 invert
                "
              />
            </div>
          </div>

          {/* TITLE */}
          <h3
            className="
            mt-6 sm:mt-7 lg:mt-8
            font-semibold
            text-base sm:text-lg lg:text-[20px]
            uppercase
          "
          >
            {t[service.titleKey]}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
            mt-2
            max-w-[220px] sm:max-w-[240px] lg:max-w-[250px]
            text-xs sm:text-sm
            text-black/80
          "
          >
            {t[service.descKey]}
          </p>
        </div>
      )}
    />
  );
}

export default ServicesSection;
