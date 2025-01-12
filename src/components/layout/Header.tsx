import { useState } from "react";
import BurgerButton from "../ui/BurgerButton";
import Logo from "../ui/Logo";
import { css } from "@emotion/react";
import { MediaQueries } from "@styles/mediaQueries";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useRouter } from "next/router";
import { useIsScrolledTop } from "@hooks/useScrollPosition";
import { useCloseMobileNav } from "@hooks/useCloseMobileNav";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isScrolledTop = useIsScrolledTop();
  const router = useRouter();

  useCloseMobileNav(setIsMobileNavOpen);

  const isHomeAndScrolledTop =
    router.pathname === "/" && isScrolledTop;

  // どのスタイルを適用するか
  const headerStyle = [
    headerOuterBase,
    isHomeAndScrolledTop
      ? headerHomeTop
      : isScrolledTop
      ? headerIsTop
      : headerScrolled,
  ];

  return(
    <>
      {isMobileNavOpen && (
        <div css={overlay} onClick={() => setIsMobileNavOpen(false)} />
      )}

      <div css={headerStyle}>
        <header css={headerInner}>
          <Logo isHomeAndScrolledTop={isHomeAndScrolledTop} />
          <BurgerButton
            isMobileNavOpen={isMobileNavOpen}
            setIsMobileNavOpen={setIsMobileNavOpen}
          />
          <MobileNav isMobileNavOpen={isMobileNavOpen} />
          <DesktopNav isHomeAndScrolledTop={isHomeAndScrolledTop} />
        </header>
      </div>
    </>
  ) ;
};

 const headerOuterBase = css`
  ${MediaQueries.DESKTOP} {
    width: 100%;
    transition: 0.5s;
    z-index: 100;
    position: fixed; /* デスクトップで固定 */
  }
`;
 const headerHomeTop = css`
  background-color: transparent;
  color: white;
`;
 const headerIsTop = css`
  background-color: whitesmoke;
  color: black;
`;
 const headerScrolled = css`
  background-color: whitesmoke;
  ${MediaQueries.DESKTOP} {
    background-color: hsla(0, 0%, 100%, 0.95);
    color: black;
    box-shadow: 0px 3px 20px -3px hsla(240, 70%, 20%, 0.3);
  }
`;
 const overlay = css`
  position: absolute;
  z-index: 100;
  height: 100%;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.5);
`;
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
