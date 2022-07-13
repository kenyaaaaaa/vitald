import { css } from "@emotion/react";
import Image from "next/image";

type Props = {
  imageFile: string;
  title: string;
  brief: string;
};

const ProductCard = ({ imageFile, title, brief }: Props) => {
  return (
    <article css={cardWrap}>
      <a href="">
        <div css={card}>
          <div css={imageWrap}>
            <Image src={`/images/${imageFile}`} width="315px" height="175px" />
          </div>
          <div css={desc}>
            <h2>{title}</h2>
            <p>{brief}</p>
          </div>
        </div>
      </a>
    </article>
  );
};

const cardWrap = css`
  margin-bottom: 3rem;
`;

const card = css`
  text-align: center;
  background-color: whitesmoke;
  box-shadow: 1px 1px 10px gainsboro;
`;

const imageWrap = css`
  position: relative;
  line-height: normal;
  font-size: 0;
  ::before {
    z-index: 1;
    content: "";
    background-color: rgba(46, 59, 146, 0.05);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const desc = css`
  padding: 1rem 1rem;
  color: rgb(77, 76, 76);
  h2 {
    background-color: whitesmoke;
  }
`;

export default ProductCard;
