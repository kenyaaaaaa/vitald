import { css } from "@emotion/react";
import Link from "next/link";
import { useState } from "react";
import { MediaQueries } from "@styles/mediaQueries";
import { productItems, ProductItem } from "@constants/productItems";
import ProductCard from "../home/ProductCard";

const Products = () => {
  const categories = [
    { ja: "すべて", en: "all" },
    { ja: "自動装置", en: "autoMachine" },
    { ja: "実験装置", en: "experiment" },
    { ja: "検査装置", en: "inspection" },
    { ja: "ロボット", en: "robot" },
  ] as const;

  type Category = typeof categories[number]["en"];
  const [categoryState, setCategory] = useState<Category>("all");

  const targetProducts = categoryState === "all"
    ? productItems
    : productItems.filter(product => product.category === categoryState);

  const changeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value as Category);
  };

  return (
    <div css={wrapper}>
      <div css={title}>
        <div>
          <h1>製作実績</h1>
          <p>Product</p>
        </div>
        <div css={videoLink}>
          <Link href={"/video"}>
            動画で見る
          </Link>
        </div>
      </div>
      <div css={container}>
        <div css={categoryWrapper}>
          {categories?.map((category, index) => (
            <div css={categoryButton} key={category.en}>
              <input
                type="radio"
                name="productCategory"
                id={category.en}
                value={category.en}
                checked={categoryState === category.en}
                onChange={changeCategory}
              />
              <label htmlFor={category.en}>{category.ja}</label>
            </div>
          ))}
        </div>
        <div css={productWrapper}>
          <div css={cardWrapper}>
            {targetProducts.map((product: ProductItem, index: number) => {
              return (
                <ProductCard
                  key={product.pid}
                  pid={product.pid}
                  imageUrl={product.imageUrl.list}
                  title={product.title}
                  brief={product.brief}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const categoryButton = css`
  text-align: center;
  input {
    display: none;
    background-color: white;
  }
  label {
    border-radius: 3px;
    background-color: whitesmoke;
    display: inline-block;
    cursor: pointer;
    width: 9rem;
    padding: 0.5rem 0;
  }
  input[type="radio"]:checked ~ label {
    background-color: hsl(240, 70%, 20%);
    color: white;
  }
  ${MediaQueries.DESKTOP} {
    label {
      width: 15rem;
      padding: 1rem 0;
    }
  }
`;
const categoryWrapper = css`
  padding-top: 3rem;
  display: grid;
  row-gap: 1rem;
  justify-content: center;
  /* justify-items: center; */
  grid-template-columns: repeat(auto-fit, minmax(8rem, 10rem));
  background-color: white;
  ${MediaQueries.DESKTOP} {
    row-gap: 2rem;
    padding-top: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  }
`;
const cardWrapper = css`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin-bottom: 2rem;
`;

const wrapper = css`
  background-color: whitesmoke;
  padding-bottom: 15rem;
  padding-top: 9rem;
  ${MediaQueries.DESKTOP} {
    padding-bottom: 20rem;
    padding-top: 11rem;
  }
`;
const container = css`
  margin-top: 4rem;
  background-color: white;
  ${MediaQueries.DESKTOP} {
    /* box-shadow: 6px 6px 20px gainsboro; */
  }
`;
const productWrapper = css`
  margin: 2rem auto 0 auto;
  padding-top: 3rem;
  ${MediaQueries.DESKTOP} {
    padding: 4rem 0 2rem 0;
    max-width: 1400px;
  }
`;

const videoLink = css`
  a {
    display: inline-block;
    font-size: 1.2rem;
    color: white;
    /* color: hsl(240, 70%, 20%); */
    margin-left: 3rem;
    border: 1px solid hsl(240, 70%, 20%);
    border-radius: 100px;
    background-color: hsl(240, 70%, 20%);
    /* background-color: whitesmoke; */
    padding: 0.2rem 2rem;
  }
`;

const title = css`
  align-items: center;
  display: flex;
  margin-left: 3rem;
  max-width: 1100px;

  p {
    font-size: 1rem;
    line-height: 0.8;
    letter-spacing: 2px;
  }
  ${MediaQueries.DESKTOP} {
    margin: 0 auto;
    h1 {
      /* font-size: 2.7rem; */
    }
    p {
      color: black;
      font-size: 1.2rem;
      text-align: left;
    }
  }
`;

export default Products;
