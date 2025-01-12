import { css } from "@emotion/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MediaQueries } from "@styles/mediaQueries";
import { productItems, ProductItem } from "@constants/productItems";
import Link from "next/link";

const Product = () => {
  const router = useRouter();
  const { pid } = router.query;

  // SSG時にrouter.queryの戻り値がundefinedになるため、やむを得ずundefinedとのユニオン型にしている
  const targetProduct: ProductItem | undefined = productItems.find((product) => {
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
              width={400}
              height={300}
              alt={`${targetProduct?.title}`}
            />
          </div>
        </div>
        {targetProduct?.videoIds.length ? (
          <div css={videoWrapper}>
            {targetProduct?.videoIds.map((id, index) => (
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
            実績一覧に戻る
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
  ${MediaQueries.DESKTOP} {
    margin-top: 8rem;
  }
`;
const wrapper = css`
  background-color: whitesmoke;
  padding-bottom: 18rem;
  padding-top: 9rem;
  ${MediaQueries.DESKTOP} {
    padding-bottom: 20rem;
    padding-top: 11rem;
  }
`;
const videoWrapper = css`
  margin-top: 4rem;
  display: grid;
  grid-row-gap: 3rem;
  ${MediaQueries.DESKTOP} {
    margin-top: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
    grid-row-gap: 5rem;
  }
  iframe {
    width: 90vw;
    aspect-ratio: 16 / 9;
    ${MediaQueries.DESKTOP} {
      width: 90%;
    }
  }
`;

const detailBlock = css`
  display: flex;
  flex-direction: column-reverse;
  ${MediaQueries.DESKTOP} {
    flex-direction: row;
    align-items: center;
  }
`;
const left = css`
  white-space: pre-wrap;
  ${MediaQueries.DESKTOP} {
    width: 50%;
    p {
      font-size: 1.3rem;
    }
  }
`;

const right = css`
  margin-top: 2rem;
  margin-bottom: 2rem;
  ${MediaQueries.DESKTOP} {
    margin-bottom: 0;
    margin-left: 7.5rem;
  }
`;

const container = css`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
`;

export default Product;
