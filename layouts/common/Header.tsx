import { useState } from "react";
import BurgerButton from "../../components/BurgerButton";
import Navigation from "./Navigation";
import Logo from "./Logo";
import { css } from "@emotion/react";
import { useQueryContext } from "../../components/utils/MediaQuery";
import { useContext } from "react";

const Header = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const isWide = useQueryContext;
  console.log("aaa");
  console.log(isWide);
  console.log("aaa");
  return (
    <>
      {isBurgerOpen && (
        <div css={overlay} onClick={() => setBurgerOpen(!isBurgerOpen)}></div>
      )}
      {/* {isWide ? (
        <></>
      ) : ( */}
      <header>
        <Logo />
        <BurgerButton
          isBurgerOpen={isBurgerOpen}
          setBurgerOpen={() => setBurgerOpen(!isBurgerOpen)}
        />
        <Navigation isBurgerOpen={isBurgerOpen} />
      </header>
      {/* )} */}
    </>
  );
};

const overlay = css`
  position: absolute;
  z-index: 100;
  height: 120%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export default Header;
