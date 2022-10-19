import { css } from "@emotion/react";
import ProductCard from "./ProductCard";
import ReadMore from "../common/ReadMore";
import { mqLarge } from "../../utils/style";

type Product = {
  imageFile: string;
  title: string;
  brief: string;
};

const products: Product[] = [
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
    title: "夢ロボ",
    brief:
      "垂直の壁を昇降することができる人型のロボット。上海万博に展示された。",
  },
  {
    imageFile: "04.jpg",
    title: "タッチパネル多点プッシュ検査装置",
    brief:
      "タッチ信号の正常な出力を検査するため、スクリーンの任意の点を正確かつ高速にプッシュする装置。",
  },
  {
    imageFile: "14.jpg",
    title: "3軸姿勢制御装置",
    brief: "ここに製品の説明が入ります。ここに製品の説明が入ります。",
  },
];
// <h2>マスコットロボット「フッピィ」</h2>
// <p>首を左右に振り、両手足を上下に可動させることができる。3種類の音声出力も可能

const ProductSection = () => {
  return (
    <div css={wrapper}>
      <section css={container}>
        <>
          <div css={title}>
            <h1>これまでの実績</h1>
          </div>

          <div css={cardWrapper}>
            {products.map((product: Product, index: number) => {
              return (
                <ProductCard
                  key={index}
                  imageFile={product.imageFile}
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
