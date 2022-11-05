import { css } from "@emotion/react";
import Link from "next/link";
import { useState } from "react";
import { mqLarge } from "../../utils/style";
import ProductCard from "../home/ProductCard";
import { ProductData, productData } from "../../const/ProductData";

const Products = () => {
  let targetProducts: ProductData[] = productData;
  type category = "all" | "automachine" | "experiment" | "inspection" | "robot";
  const [categoryState, setCategory] = useState<category>("all");
  const changeCategory = (e: any) => {
    setCategory(e.target.value);
  };
  switch (categoryState) {
    case "all":
      targetProducts = productData;
      break;
    case "automachine":
      targetProducts = productData.filter(
        (product) => product.category === "automachine"
      );
      break;
    case "experiment":
      targetProducts = productData.filter(
        (product) => product.category === "experiment"
      );
      break;
    case "inspection":
      targetProducts = productData.filter(
        (product) => product.category === "inspection"
      );
      break;
    case "robot":
      targetProducts = productData.filter(
        (product) => product.category === "robot"
      );
      break;
  }

  return (
    <div css={wrapper}>
      <div css={title}>
        <div>
          <h1>製作実績</h1>
          <p>Product</p>
        </div>
        <div css={videoLink}>
          <Link href={"/video"}>
            <a>動画で見る </a>
          </Link>
        </div>
      </div>
      <div css={container}>
        <form css={categoryWrapper}>
          {/* <div > */}
          <div css={category}>
            <input
              type="checkbox"
              id="all"
              value="all"
              checked={categoryState === "all"}
              onChange={changeCategory}
            />
            <label htmlFor="all">すべて</label>
          </div>
          <div css={category}>
            <input
              type="checkbox"
              id="automachine"
              value="automachine"
              checked={categoryState === "automachine"}
              onChange={changeCategory}
            />
            <label htmlFor="automachine">自動装置</label>
          </div>
          <div css={category}>
            <input
              type="checkbox"
              id="experiment"
              value="experiment"
              checked={categoryState === "experiment"}
              onChange={changeCategory}
            />
            <label htmlFor="experiment">実験装置</label>
          </div>
          <div css={category}>
            <input
              type="checkbox"
              id="inspection"
              value="inspection"
              checked={categoryState === "inspection"}
              onChange={changeCategory}
            />
            <label htmlFor="inspection">検査装置</label>
          </div>
          <div css={category}>
            <input
              type="checkbox"
              id="robot"
              value="robot"
              checked={categoryState === "robot"}
              onChange={changeCategory}
            />
            <label htmlFor="robot">ロボット</label>
          </div>
          {/* </div> */}
        </form>
        <div css={productWrapper}>
          <div css={cardWrapper}>
            {targetProducts.map((product: ProductData, index: number) => {
              return (
                <ProductCard
                  key={index}
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

const category = css`
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
  input[type="checkbox"]:checked ~ label {
    background-color: hsl(240, 70%, 20%);
    color: white;
  }
  ${mqLarge} {
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
  background-color: whitesmoke;
  background-color: hsl(240, 5%, 93%);
  background-color: white;
  ${mqLarge} {
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
  ${mqLarge} {
    padding-bottom: 20rem;
    padding-top: 11rem;
  }
`;
const container = css`
  margin-top: 4rem;
  background-color: white;
  ${mqLarge} {
    /* box-shadow: 6px 6px 20px gainsboro; */
  }
`;
const productWrapper = css`
  margin: 2rem auto 0 auto;
  padding-top: 3rem;
  ${mqLarge} {
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
  ${mqLarge} {
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
