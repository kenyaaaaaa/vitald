import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const mqLarge = `@media (min-width: 960px)`;
export const mqSmall = `@media (max-width: 959px)`;

export const SetFillHeight = () => {
  useEffect(() => {
    // windowを使う処理を記述
    const SetFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    let vw = window.innerWidth;

    window.addEventListener("resize", () => {
      if (vw === window.innerWidth) {
        // 画面の横幅にサイズ変動がないので処理を終える
        return;
      }

      // 画面の横幅のサイズ変動があった時のみ高さを再計算する
      vw = window.innerWidth;
      SetFillHeight();
    });
    SetFillHeight();
    console.log("画面リサイズ");
  }, []);
};

export const useScrolledYZero = () => {
  const [isScrolledYZero, setScrolledYZero] = useState(true);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY == 0) {
        setScrolledYZero(true);
      } else {
        setScrolledYZero(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return isScrolledYZero;
};
