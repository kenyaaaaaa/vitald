import { css } from "@emotion/react";
import { mqLarge } from "./utils/style";

type Props = {
  bgColor: string;
  text: string;
};

const ReadMore = ({ bgColor, text }: Props) => {
  return (
    <div css={readMore(bgColor)}>
      <a href="">
        <span>{text}・</span>
      </a>
    </div>
  );
};

const readMore = (bgColor: string) => css`
  max-width: 300px;
  border: 1px solid hsl(240, 70%, 20%);
  border-radius: 3px;
  height: 4.2rem;
  display: flex;
  margin: 4rem auto 0 auto;
  text-align: center;
  background-color: ${bgColor};
  position: relative;

  a {
    display: block;
    width: 100%;
    line-height: 4.2rem;
    font-weight: bold;
    color: hsl(240, 70%, 20%);
    // pcのみホバー処理
    ${mqLarge} {
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: hsl(240, 70%, 20%);
        width: 100%;
        height: 100%;
        transition: transform 0.2s ease-out;
        transform: scale(0, 1);
        transform-origin: right top;
      }
      :hover::before {
        transform-origin: left top;
        transform: scale(1, 1);
      }
      span {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 2;
        transition: 0.2s;
        :hover {
          font-weight: 100;
          color: white;
        }
      }
    }
  }
`;

export default ReadMore;
