import { useEffect } from "react";
import { useRouter } from "next/router";

export const useCloseMobileNav = (setIsMobileNavOpen: (isOpen: boolean) => void) => {
  const router = useRouter();

  useEffect(() => {
    const closeMobileNav = () => setIsMobileNavOpen(false);
    router.events.on("routeChangeComplete", closeMobileNav);
    return () => {
      router.events.off("routeChangeComplete", closeMobileNav);
    };
  }, [router]);
}; 