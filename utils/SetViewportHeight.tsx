import { useEffect } from "react";

export const setViewportHeight = () => {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // 画面の横幅にサイズ変動がある場合、高さを再取得
    let viewWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      if (viewWidth === window.innerWidth) {
        return;
      }
      viewWidth = window.innerWidth;
      setViewportHeight();
    });
    setViewportHeight();
    console.log("画面リサイズ");
  }, []);
};
