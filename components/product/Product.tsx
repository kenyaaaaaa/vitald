import { css } from "@emotion/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { mqLarge } from "../../utils/style";
import { productData } from "../../const/ProductData";

const Product = () => {
  const router = useRouter();
  const { pid } = router.query;
  const targetProduct = productData.find((product) => {
    return product.pid === pid;
  });
  return (
    <div css={wrapper}>
      <div css={container}>
        <h1>{targetProduct?.title}</h1>
        <div css={detailblock}>
          <div css={left}>
            <p>{targetProduct?.description}</p>
          </div>
          <div css={right}>
            <div css={imageWrapper}>
              <Image
                src={`/images/products/${targetProduct?.imageUrl.detail}`}
                width="360px"
                height="270px"
                // width="320px"
                // height="240px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const wrapper = css`
  background-color: whitesmoke;
  padding-bottom: 15rem;
  padding-top: 9rem;
  ${mqLarge} {
    padding-bottom: 20rem;
    padding-top: 11rem;
  }
`;

const detailblock = css`
  display: flex;
  flex-direction: column-reverse;
  ${mqLarge} {
    flex-direction: row;
    align-items: center;
  }
`;
const left = css`
  white-space: pre-wrap;
  ${mqLarge} {
    width: 50vw;
    p {
      font-size: 1.3rem;
    }
  }
`;
const imageWrapper = css`
  width: 360px;
  height: 270px;
  box-shadow: 6px 6px 20px hsl(0, 0%, 70%); ;
`;
const right = css`
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 90vw;
  height: auto;
  ${mqLarge} {
    margin-bottom: 0;
    width: 50vw;
    margin-left: 7rem;
  }
`;

const container = css`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
`;

export default Product;
