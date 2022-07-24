import { useEffect, useState } from "react";
import BurgerButton from "../../components/BurgerButton";
import Logo from "./Logo";
import { css } from "@emotion/react";
import { mqLarge } from "../../components/utils/style";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [isScrolledY, setScrolledY] = useState(false);

  const handler = () => {
    if (window.scrollY > 0) {
      setScrolledY(true);
    } else {
      setScrolledY(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handler);
  }, []);

  return (
    <>
      {isBurgerOpen && (
        <div css={overlay} onClick={() => setBurgerOpen(!isBurgerOpen)}></div>
      )}
      <div css={[wrapper, isScrolledY && scrolledHeaderStyle]}>
        <header css={header}>
          <Logo
            isScrolledY={isScrolledY}
            bgColor={"hsla(240, 70%, 20%, 0.8)"}
            color={"white"}
          />
          <BurgerButton
            isBurgerOpen={isBurgerOpen}
            setBurgerOpen={() => setBurgerOpen(!isBurgerOpen)}
          />
          <MobileNav isBurgerOpen={isBurgerOpen} />
          <DesktopNav isScrolledY={isScrolledY} />
        </header>
      </div>
    </>
  );
};

const overlay = css`
  position: absolute;
  z-index: 100;
  height: 120%;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.5);
`;
const scrolledHeaderStyle = css`
  ${mqLarge} {
    background-color: hsla(0, 0%, 100%, 0.95);
    color: black;
    transition: 0.5s;
    box-shadow: 0px 3px 20px -3px hsla(240, 70%, 20%, 0.3);
  }
`;
const wrapper = css`
  ${mqLarge} {
    z-index: 100;
    background-color: transparent;
    color: white;
    position: fixed;
    width: 100%;
    transition: 0.5s;
  }
`;
const header = css`
  ${mqLarge} {
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
  }
`;

export default Header;
