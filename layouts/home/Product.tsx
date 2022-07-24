import { css } from "@emotion/react";
import ProductCard from "./ProductCard";
import ReadMore from "../../components/ReadMore";

const products = [
  {
    imageFile: "01.jpg",
    title: "人間型ロボット「インファノイド」",
    brief:
      "関節は人間とほぼ同じ可動範囲で、頭、眉、眼、唇の動きで表情が作れる。",
  },
  {
    imageFile: "05.jpg",
    title: "リング往復回転（揺動）装置",
    brief: "リング部品を規定回数、規定時間往復回転させる装置。",
  },
  {
    imageFile: "07.jpg",
    title: "大型テーブル移動装置",
    brief:
      " 900mm x 1800mmのテーブルを2000mm往復させる。サーボモータとボールネジで駆動。",
  },
  {
    imageFile: "02.jpg",
    title: "夢ロボ（上海万博展示作品）",
    brief: "垂直の壁を昇降することができる人型のロボット。",
  },
];
// <h2>マスコットロボット「フッピィ」</h2>
// <p>首を左右に振り、両手足を上下に可動させることができる。3種類の音声出力も可能

const Product = () => {
  return (
    <div css={wrapper}>
      <section css={container}>
        <div css={title}>
          <h1>これまでの実績</h1>
        </div>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageFile={product.imageFile}
            title={product.title}
            brief={product.brief}
          />
        ))}
        <ReadMore bgColor={"white"} text={"その他の実績を見る"} />
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

export default Product;
