import { useEffect, useState } from "react";
import ArrivalCard from "./ArrivalCard";
import { getArrivalProducts } from "@/data/arrivals";

function ArrivalGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      const res = await getArrivalProducts();
      if (mounted) {
        setProducts(res?.data || []);
        setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-7">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-[280px] sm:h-[320px] bg-[#111] animate-pulse rounded-xl"
          />
        ))}
      </div>
    );
  }

  const [main, women, small1, small2] = products;

  return (
    <div
      className="
        mt-10 sm:mt-14 lg:mt-16
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-4 sm:gap-5 lg:gap-7
      "
    >
      {/* LEFT — BIG */}
      <div className="h-[420px] sm:h-[520px] lg:h-[680px]">
        <ArrivalCard item={main} />
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-4 sm:gap-5 lg:gap-7">
        {/* MEDIUM */}
        <div className="h-[280px] sm:h-[320px] lg:h-[340px]">
          <ArrivalCard item={women} />
        </div>

        {/* TWO SMALL */}
        <div
          className="
            grid grid-cols-2
            gap-4 sm:gap-5 lg:gap-7
            h-[220px] sm:h-[260px] lg:h-[313px]
          "
        >
          <ArrivalCard item={small1} />
          <ArrivalCard item={small2} />
        </div>
      </div>
    </div>
  );
}

export default ArrivalGrid;
