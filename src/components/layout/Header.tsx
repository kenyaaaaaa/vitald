import { useEffect, useState } from "react";
import BurgerButton from "../ui/BurgerButton";
import Logo from "../ui/Logo";
import { css } from "@emotion/react";
import { MediaQueries } from "@styles/mediaQueries";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useRouter } from "next/router";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const isNotScrolledY = useNotScrolledY();
  const router = useRouter();

  const isHomeAndNotScrolledY: boolean =
    router.pathname === "/" && isNotScrolledY ? true : false;

  return (
    <>
      {isMobileNavOpen && (
        <div
          css={overlay}
          onClick={() => setMobileNavOpen(!isMobileNavOpen)}
        ></div>
      )}
      <div css={headerOuter(isHomeAndNotScrolledY, isNotScrolledY)}>
        <header css={[headerInner]}>
          <Logo isHomeAndNotScrolledY={isHomeAndNotScrolledY} />
          <BurgerButton
            isMobileNavOpen={isMobileNavOpen}
            setMobileNavOpen={() => setMobileNavOpen(!isMobileNavOpen)}
          />
          <MobileNav isMobileNavOpen={isMobileNavOpen} />
          <DesktopNav isHomeAndNotScrolledY={isHomeAndNotScrolledY} />
        </header>
      </div>
    </>
  );
};

const useNotScrolledY = () => {
  const [isScrolledYZero, setNotScrolledY] = useState(true);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY == 0) {
        setNotScrolledY(true);
      } else {
        setNotScrolledY(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return isScrolledYZero;
};

const changeHeaderColor = (
  isHomeAndNotScrolledY: boolean,
  isNotScrolledY: boolean
) => {
  if (isHomeAndNotScrolledY) {
    return css`
      background-color: transparent;
      color: white;
    `;
  } else if (isNotScrolledY) {
    return css`
      background-color: whitesmoke;
      color: black;
    `;
  } else {
    return css`
      background-color: whitesmoke;
      ${MediaQueries.DESKTOP} {
        background-color: hsla(0, 0%, 100%, 0.95);
        color: black;
        box-shadow: 0px 3px 20px -3px hsla(240, 70%, 20%, 0.3);
      }
    `;
  }
};

const overlay = css`
  position: absolute;
  z-index: 100;
  height: 100%;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.5);
`;

const headerOuter = (
  isHomeAndNotScrolledY: boolean,
  isNotScrolledY: boolean
) => {
  return css`
    ${MediaQueries.DESKTOP} {
      width: 100%;
      transition: 0.5s;
      z-index: 100;
      position: fixed;
    }
    ${changeHeaderColor(isHomeAndNotScrolledY, isNotScrolledY)}
  `;
};

const headerInner = css`
  position: absolute;
  z-index: 1000;
  width: 100%;
  ${MediaQueries.DESKTOP} {
    position: relative;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
  }
`;

export default Header;
