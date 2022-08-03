import { css } from "@emotion/react";
import Image from "next/image";
import { mqLarge } from "../../utils/style";

type Props = {
  imageFile: string;
  title: string;
  brief: string;
};

const ProductCard = ({ imageFile, title, brief }: Props) => {
  return (
    <article css={cardWrapper}>
      <a href="">
        <div css={card}>
          <div css={imageWrapper}>
            <Image src={`/images/${imageFile}`} width="320px" height="180px" />
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

const cardWrapper = css`
  position: relative;
  margin-bottom: 3rem;
  ${mqLarge} {
    :hover img {
      transform: scale(1.1);
    }
  }
`;

const card = css`
  width: 320px;
`;

const imageWrapper = css`
  box-shadow: 6px 6px 20px gainsboro;
  line-height: normal;
  font-size: 0;
  img {
    transform: scale(1);
    transition: transform 0.2s;
  }
`;

const desc = css`
  padding: 1rem 0rem;
  color: rgb(77, 76, 76);
  h2 {
    font-size: 1.4rem;
    ${mqLarge} {
      font-size: 1.2rem;
    }
  }
  p {
    font-size: 1.3rem;
    ${mqLarge} {
      font-size: 1.1rem;
    }
  }
`;

export default ProductCard;
