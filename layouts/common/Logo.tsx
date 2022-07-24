import { css } from "@emotion/react";
import { mqLarge } from "../../components/utils/style";

type Props = {
  isScrolledY: boolean | undefined;
  bgColor: string | undefined;
  color: string;
};

const Logo = ({ isScrolledY, bgColor, color }: Props) => {
  return (
    <a href="" css={[logo(bgColor, color), isScrolledY && scrolledLogoStyle]}>
      <div>
        <h1>国際バイタルディバイス有限会社</h1>
        <p>Vital Device International</p>
      </div>
    </a>
  );
};

const scrolledLogoStyle = css`
  ${mqLarge} {
    background-color: transparent;
    color: black;
  }
`;

const logo = (bgColor: string | undefined, color: string) => css`
  background-color: ${bgColor ? bgColor : "transparent"};
  /* background-color: hsla(240, 70%, 20%, 0.9); */
  /* border-radius: 6px; */
  color: white;
  color: ${color};
  display: block;
  padding: 0.8rem 2rem 1rem;
  margin-top: 0.8rem;
  margin-left: 0.5rem;
  position: absolute;
  z-index: 1000;
  text-align: center;

  h1 {
    font-family: "ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E",
      "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
    font-size: 1.3rem;
    font-size: 1.5rem;
  }
  p {
    font-size: 8px;
    letter-spacing: 3px;
    line-height: 1;
  }
  ${mqLarge} {
    background-color: hsla(240, 70%, 20%, 0.8);
    margin: 0.2rem 0;
    position: static;
    padding: 0.8rem 4rem 1.5rem;
    transition: 0.5s;
    h1 {
      font-size: 1.5rem;
      font-size: 1.7rem;
    }
    p {
      line-height: 0.8rem;
      font-size: 0.9rem;
      font-size: 1rem;
      letter-spacing: 3px;
    }
  }
`;
export default Logo;
