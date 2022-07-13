import { css } from "@emotion/react";

const Logo = () => {
  return (
    <a href="" css={logo}>
      <div>
        <h1>国際バイタルディバイス有限会社</h1>
        <span>Vital Device International</span>
      </div>
    </a>
  );
};

const logo = css`
  display: block;
  padding: 1rem 1.5rem 1.5rem;
  border-bottom-right-radius: 10px;
  position: absolute;
  background-color: #1d2087;
  color: white;
  text-align: center;
  z-index: 1000;
  h1 {
    font-family: "ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E",
      "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
    font-size: 1.4rem;
  }
  & span {
    line-height: 0.8rem;
    display: block;
    font-size: 8px;
    letter-spacing: 3px;
  }
`;
export default Logo;
