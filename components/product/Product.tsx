import { css } from "@emotion/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { mqLarge } from "../../utils/style";
import { productData } from "../../const/ProductData";
import Link from "next/link";

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
        <div css={detailBlock}>
          <div css={left}>
            <p>{targetProduct?.description}</p>
          </div>
          <div css={right}>
            <Image
              src={`/images/products/${targetProduct?.imageUrl.detail}`}
              width="360px"
              height="270px"
            />
          </div>
        </div>
        {targetProduct?.videoIds.length ? (
          <div css={videoWrapper}>
            {targetProduct.videoIds.map((id, index) => (
              <iframe
                key={index}
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        ) : (
          <></>
        )}
        <div css={backLink}>
          <Link href="/product">
            <a>実績一覧に戻る</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const backLink = css`
  margin-top: 4rem;
  font-weight: bold;
  text-align: center;
  font-size: 1.3rem;
  a {
    border-bottom: 2px solid hsl(240, 70%, 20%);
    display: inline-block;
  }
  ${mqLarge} {
    margin-top: 8rem;
  }
`;
const wrapper = css`
  background-color: whitesmoke;
  padding-bottom: 18rem;
  padding-top: 9rem;
  ${mqLarge} {
    padding-bottom: 20rem;
    padding-top: 11rem;
  }
`;
const videoWrapper = css`
  margin-top: 4rem;
  display: grid;
  grid-row-gap: 3rem;
  ${mqLarge} {
    margin-top: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
    grid-row-gap: 5rem;
  }
  iframe {
    width: 90vw;
    aspect-ratio: 16 / 9;
    ${mqLarge} {
      width: 90%;
    }
  }
`;

const detailBlock = css`
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

const right = css`
  margin-top: 2rem;
  margin-bottom: 2rem;
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
