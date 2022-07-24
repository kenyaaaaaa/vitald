import { css } from "@emotion/react";
import { mqLarge } from "./utils/style";

type Props = {
  bgColor: string;
  text: string;
};

const ReadMore = ({ bgColor, text }: Props) => {
  return (
    <div css={readMore(bgColor)}>
      <a href="">{text}・</a>
    </div>
  );
};

const readMore = (bgColor: string) => css`
  max-width: 300px;
  border: 1px solid #1d2087;
  border-radius: 3px;
  height: 4.2rem;
  display: flex;
  margin: 4rem auto 0 auto;
  text-align: center;
  background-color: ${bgColor};
  a {
    font-weight: bold;
    color: #1d2087;
    display: block;
    width: 100%;
    line-height: 4.2rem;
  }
`;

export default ReadMore;
