import { create } from "zustand";

const useSearchStore = create((set) => ({
  searchTerm: "",

  setSearchTerm: (value) =>
    set({
      searchTerm: value,
    }),
}));

export default useSearchStore;
