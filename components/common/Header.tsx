import { useState } from "react";
import BurgerButton from "./BurgerButton";
import Logo from "./Logo";
import { css } from "@emotion/react";
import { useNotScrolledY } from "../../utils/UseNotScrolledY";
import { mqLarge } from "../../const/Breakpoint";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useRouter } from "next/router";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const isPageTop = useNotScrolledY();
  const router = useRouter();

  const isHomeAndPageTop: boolean =
    router.pathname === "/" && isPageTop ? true : false;

  return (
    <>
      {isMobileNavOpen && (
        <div
          css={overlay}
          onClick={() => setMobileNavOpen(!isMobileNavOpen)}
        ></div>
      )}
      <div css={headerOuter(isHomeAndPageTop, isPageTop)}>
        <header css={[headerInner]}>
          <Logo isHomeAndPageTop={isHomeAndPageTop} />
          <BurgerButton
            isMobileNavOpen={isMobileNavOpen}
            setMobileNavOpen={() => setMobileNavOpen(!isMobileNavOpen)}
          />
          <MobileNav isMobileNavOpen={isMobileNavOpen} />
          <DesktopNav isHomeAndPageTop={isHomeAndPageTop} />
        </header>
      </div>
    </>
  );
};

const overlay = css`
  position: absolute;
  z-index: 100;
  height: 100%;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.5);
`;

const headerOuter = (isHomeAndPageTop: boolean, isPageTop: boolean) => {
  return css`
    ${mqLarge} {
      width: 100%;
      transition: 0.5s;
      z-index: 100;
      position: fixed;
    }
    ${changeHeaderColor(isHomeAndPageTop, isPageTop)}
  `;
};

const changeHeaderColor = (isHomeAndPageTop: boolean, isPageTop: boolean) => {
  if (isHomeAndPageTop) {
    return css`
      background-color: transparent;
      color: white;
    `;
  } else if (isPageTop) {
    return css`
      background-color: whitesmoke;
      color: black;
    `;
  } else {
    return css`
      background-color: whitesmoke;
      ${mqLarge} {
        background-color: hsla(0, 0%, 100%, 0.95);
        color: black;
        box-shadow: 0px 3px 20px -3px hsla(240, 70%, 20%, 0.3);
      }
    `;
  }
};

const headerInner = css`
  position: absolute;
  z-index: 1000;
  width: 100%;
  ${mqLarge} {
    position: relative;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
  }
`;

export default Header;
