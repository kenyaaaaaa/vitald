import { useState, useEffect } from 'react';

export const useIsScrolledTop = () => {
    const [isScrolledTop, setIsScrolledTop] = useState(true);
  
    useEffect(() => {
      // 初期化: マウント時に一度だけチェック
      setIsScrolledTop(window.scrollY === 0);
      const handleScroll = () => {
        setIsScrolledTop(window.scrollY === 0);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return isScrolledTop;
  };