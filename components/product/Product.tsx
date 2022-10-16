import { css } from "@emotion/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { mqLarge } from "../../utils/style";
import ProductCard from "../home/ProductCard";

type Product = {
  imageFile: string;
  title: string;
  brief: string;
  category: string;
};

let products: Product[] = [
  {
    imageFile: "01.jpg",
    title: "人間型ロボット「インファノイド」",
    brief:
      "関節は人間とほぼ同じ可動範囲で、頭、眉、眼、唇の動きで表情が作れる。",
    category: "robot",
  },
  {
    imageFile: "05.jpg",
    title: "リング往復回転（揺動）装置",
    brief: "リング部品を規定回数、規定時間往復回転させる装置。",
    category: "automachine",
  },
  {
    imageFile: "07.jpg",
    title: "大型テーブル移動装置",
    brief:
      " 900mm x 1800mmのテーブルを2000mm往復させる。サーボモータとボールネジで駆動。",
    category: "experiment",
  },
  {
    imageFile: "02.jpg",
    title: "夢ロボ",
    brief:
      "垂直の壁を昇降することができる人型のロボット。上海万博に展示された。",
    category: "robot",
  },
  {
    imageFile: "04.jpg",
    title: "タッチパネル多点プッシュ検査装置",
    brief:
      "タッチ信号の正常な出力を検査するため、スクリーンの任意の点を正確かつ高速にプッシュする装置。",
    category: "inspection",
  },
  {
    imageFile: "03.jpg",
    title: "5軸雲台",
    brief:
      "動く被写体の中心部を常時捕捉できるように、3台のカメラの向きや傾きを自動制御する。",
    category: "",
  },
];
// <h2>マスコットロボット「フッピィ」</h2>
// <p>首を左右に振り、両手足を上下に可動させることができる。3種類の音声出力も可能

const Product = () => {
  let targetProducts = products;
  type category = "all" | "automachine" | "experiment" | "inspection" | "robot";
  const [categoryState, setCategory] = useState<category>("all");
  const changeCategory = (e: any) => {
    setCategory(e.target.value);
  };
  switch (categoryState) {
    case "all":
      targetProducts = products;
      break;
    case "automachine":
      targetProducts = products.filter(
        (product) => product.category === "automachine"
      );
      break;
    case "experiment":
      targetProducts = products.filter(
        (product) => product.category === "experiment"
      );
      break;
    case "inspection":
      targetProducts = products.filter(
        (product) => product.category === "inspection"
      );
      break;
    case "robot":
      targetProducts = products.filter(
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
          <Link href={"/video"} scroll={false}>
            <a>動画で見る</a>
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
            {targetProducts.map((product: Product, index: number) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProductCard
                    key={index}
                    imageFile={product.imageFile}
                    title={product.title}
                    brief={product.brief}
                  />
                </motion.div>
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
    background-color: hsl(240, 100%, 30%);
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
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  background-color: whitesmoke;
  background-color: hsl(240, 5%, 93%);
  background-color: white;
  ${mqLarge} {
    row-gap: 2rem;
    padding-top: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(100px, 210px));
  }
`;
const cardWrapper = css`
  ${mqLarge} {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    margin-bottom: 2rem;
  }
`;

const wrapper = css`
  background-color: whitesmoke;
  padding-bottom: 20rem;
  padding-top: 9rem;
  ${mqLarge} {
    padding-top: 11rem;
  }
`;
const container = css`
  margin-top: 5rem;
  background-color: white;
  ${mqLarge} {
    /* box-shadow: 6px 6px 20px gainsboro; */
  }
`;
const productWrapper = css`
  margin: 2rem auto 0 auto;
  padding: 3rem 3rem;
  ${mqLarge} {
    padding: 4rem 0 8rem 0;
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
    border-radius: 10px;
    background-color: hsl(240, 70%, 20%);
    /* background-color: whitesmoke; */
    padding: 0.1rem 2rem;
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

export default Product;
