import { css } from "@emotion/react";
import ProductCard from "./ProductCard";
import ReadMore from "../../ui/ReadMoreButton";
import { productItems, ProductItem } from "../../../constants/productItems";

const targetProducts = productItems.filter((product) => 
  ["1", "2", "3", "4", "5", "11"].includes(product.pid)
);

const ProductSection = () => {
  return (
    <div css={wrapper}>
      <section css={container}>
        <>
          <div css={title}>
            <h1>これまでの実績</h1>
          </div>

          <div css={cardWrapper}>
            {targetProducts.map((product, index) => {
              return (
                <ProductCard
                  pid={product.pid}
                  key={index}
                  imageUrl={product.imageUrl.list}
                  title={product.title}
                  brief={product.brief}
                />
              );
            })}
          </div>
          <ReadMore
            bgColor={"white"}
            text={"すべての実績を見る"}
            path={"/product"}
          />
        </>
      </section>
    </div>
  );
};
const wrapper = css`
  background-color: white;
`;

const container = css`
  padding: 4rem 3rem 5rem 3rem;
  max-width: 1200px;
  color: #1d2087;
  margin: 0 auto;
`;

const title = css`
  text-align: center;
  margin-bottom: 3rem;
  h1 {
    font-size: 1.2rem;
    letter-spacing: 0.4rem;
    text-align: center;
    ::before {
      display: block;
      text-align: center;
      letter-spacing: 0.4rem;
      content: "PRODUCT";
      font-size: 2.4rem;
    }
  }
`;
const cardWrapper = css`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin-bottom: 2rem;
`;

export default ProductSection;
