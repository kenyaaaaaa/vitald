import { useEffect, useState } from "react";
import BurgerButton from "./BurgerButton";
import Logo from "./Logo";
import { css } from "@emotion/react";
import { mqLarge, useScrolledYZero } from "../../utils/style";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useRouter } from "next/router";

const Header = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const isTop = useScrolledYZero();
  const router = useRouter();

  const isHomeAndTop: boolean = router.pathname === "/" && isTop ? true : false;

  let headerStyle = normal;
  if (isHomeAndTop) {
    headerStyle = homeAndTop;
  } else if (isTop) {
    headerStyle = top;
  }

  return (
    <>
      {isBurgerOpen && (
        <div css={overlay} onClick={() => setBurgerOpen(!isBurgerOpen)}></div>
      )}
      <div css={[wrapper, headerStyle]}>
        <header css={header}>
          <Logo
            isHomeAndTop={isHomeAndTop}
            bgColor={"transparent"}
            color={"black"}
          />
          <BurgerButton
            isBurgerOpen={isBurgerOpen}
            setBurgerOpen={() => setBurgerOpen(!isBurgerOpen)}
          />
          <MobileNav isBurgerOpen={isBurgerOpen} />
          <DesktopNav isHomeAndTop={isHomeAndTop} />
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
const wrapper = css`
  ${mqLarge} {
    width: 100%;
    transition: 0.5s;
    z-index: 100;
    position: fixed;
  }
`;
const homeAndTop = css`
  ${mqLarge} {
    background-color: transparent;
    color: white;
  }
`;
const top = css`
  background-color: whitesmoke;
  color: black;
`;
const normal = css`
  background-color: whitesmoke;
  ${mqLarge} {
    background-color: hsla(0, 0%, 100%, 0.95);
    color: black;
    box-shadow: 0px 3px 20px -3px hsla(240, 70%, 20%, 0.3);
  }
`;
const header = css`
  ${mqLarge} {
    position: relative;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
  }
`;

export default Header;
