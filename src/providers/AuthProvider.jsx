import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/firebase/firebase";

import useAuthStore from "@/store/useAuthStore";

function AuthProvider({ children }) {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(
        user
          ? {
              uid: user.uid,
              email: user.email,
              name: user.displayName || "User",
              photoURL: user.photoURL || "",
            }
          : null,
      );
    });

    return () => unsubscribe();
  }, [setUser]);

  return children;
}

export default AuthProvider;
