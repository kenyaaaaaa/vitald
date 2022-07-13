import { useState } from "react";
import BurgerButton from "../../components/BurgerButton";
import Navigation from "./Navigation";
import Logo from "./Logo";
import { css } from "@emotion/react";

const Header = () => {
  const useToggle = (initialValue = false) => {
    const [state, setState] = useState(initialValue);
    const toggle = () => setState((prevState) => !prevState);
    return [state, toggle] as const;
  };
  const [isBurgerOpen, setBurgerOpen] = useToggle(false);
  //　↓これでよくね？
  // setBurgerOpen(!isBurgerOpen)

  return (
    <>
      {isBurgerOpen && <div css={overlay} onClick={setBurgerOpen}></div>}
      <header>
        <Logo />
        <BurgerButton
          isBurgerOpen={isBurgerOpen}
          setBurgerOpen={setBurgerOpen}
        />
        <Navigation isBurgerOpen={isBurgerOpen} />
      </header>
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
