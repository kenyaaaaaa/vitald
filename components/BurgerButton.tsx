import { css } from "@emotion/react";

type Props = {
  isBurgerOpen: boolean;
  setBurgerOpen: () => void;
};

const BurgerButton = ({ isBurgerOpen, setBurgerOpen }: Props) => {
  return (
    <button
      onClick={setBurgerOpen}
      css={[hamburger, isBurgerOpen ? active : ""]}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

const hamburger = css`
  z-index: 1000;
  position: fixed;
  top: 1rem;
  background-color: #e57b58;
  border-radius: 100px;
  right: 2rem;
  width: 4.2rem;
  height: 4.2rem;
  // クリック時のちらつき防止
  -webkit-tap-highlight-color: transparent;
  border-color: transparent;
  z-index: 9999;
  span {
    width: 100%;
    height: 0.15rem;
    background-color: white;
    position: relative;
    transition: ease 0.3s;
    display: block;
    // backface-visibility:hidden;
    // -webkit-backface-visibility:hidden;
    // overflow:hidden
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      margin: 0.4rem 0;
    }
    &:nth-of-type(3) {
      top: 0;
    }
  }
`;

const active = css`
  transform: translateX(0);
  span {
    &:nth-child(1) {
      top: 0.6rem;
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      top: -0.5rem;
      transform: rotate(-45deg);
    }
  }
`;

export default BurgerButton;
