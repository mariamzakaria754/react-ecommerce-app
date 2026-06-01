import { useEffect, useMemo, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import useSearchStore from "@/store/useSearchStore";
import { products } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";

function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

function SearchSkeleton() {
  return (
    <div className="flex items-center gap-3 px-3 py-3 animate-pulse">
      <div className="w-12 h-12 bg-gray-100 rounded-md shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-3 bg-gray-100 rounded w-3/4" />
        <div className="h-3 bg-gray-100 rounded w-1/3" />
      </div>
    </div>
  );
}

function SearchBar() {
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const { t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchTerm = useSearchStore((state) => state.searchTerm);
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);
  const debounced = useDebounce(searchTerm, 300);

  const suggestions = useMemo(() => {
    const q = debounced.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) => {
      const title = p.title?.toLowerCase() || "";
      const category = p.category?.name?.toLowerCase() || "";
      const tags = p.tags || [];
      return (
        title.includes(q) ||
        category.includes(q) ||
        tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [debounced]);

  useEffect(() => {
    if (!searchTerm) return;
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 250);
    return () => clearTimeout(t);
  }, [searchTerm]);

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearch = () => {
    const q = searchTerm.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
    setIsOpen(false);
  };

  const handleSelect = () => {
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* ── INPUT ── */}
      <div
        className="
          flex items-center w-full h-[40px]
          bg-searchBg rounded-xl px-3
          border border-transparent focus-within:border-[#DB4444]
          transition-colors duration-200 overflow-hidden
        "
      >
        <input
          type="text"
          value={searchTerm}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder={t.searchPlaceholder}
          className="
            flex-1 min-w-0 bg-transparent outline-none
            font-poppins text-sm text-text placeholder:text-text1 px-2
          "
        />
        <button
          onClick={handleSearch}
          aria-label={t.searchPlaceholder}
          className="shrink-0 flex items-center justify-center transition hover:scale-110 ml-1"
        >
          <FiSearch className="w-5 h-5 text-text1" />
        </button>
      </div>

      {/* ── DROPDOWN ── */}
      {isOpen && searchTerm.trim() && (
        <div
          className="
            absolute top-full left-0 mt-2 w-full
            bg-white rounded-xl border border-gray-200 shadow-xl
            overflow-hidden z-50
          "
        >
          <div className="px-3 py-2 text-xs text-gray-400 border-b font-poppins">
            {t.searchResults}
          </div>

          {loading ? (
            <>
              <SearchSkeleton />
              <SearchSkeleton />
              <SearchSkeleton />
            </>
          ) : suggestions.length > 0 ? (
            <>
              {suggestions.slice(0, 6).map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  onClick={handleSelect}
                  className="flex items-center gap-3 px-3 py-3 hover:bg-gray-50 transition"
                >
                  <img
                    src={product.thumbnail}
                    className="w-12 h-12 rounded-md object-contain shrink-0"
                    alt={product.title}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-black font-poppins">
                      {product.title}
                    </p>
                    <p className="text-xs text-[#DB4444] font-poppins">
                      ${product.pricing.current}
                    </p>
                  </div>
                </Link>
              ))}
              <button
                onClick={handleSearch}
                className="w-full py-3 border-t text-sm font-medium text-[#DB4444] hover:bg-gray-50 transition"
              >
                {t.viewAll}
              </button>
            </>
          ) : (
            <div className="px-4 py-8 text-center font-poppins">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gray-100" />
              <p className="text-sm text-gray-600">
                {t.noResults} <span className="font-medium">{searchTerm}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">{t.tryKeywords}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
