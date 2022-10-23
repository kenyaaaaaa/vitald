import { css } from "@emotion/react";
import ProductCard from "./ProductCard";
import ReadMore from "../common/ReadMore";
import { mqLarge } from "../../utils/style";

type Product = {
  pid: string;
  imageUrl: { list: string; detail: string };
  title: string;
  brief: string;
  category: string;
  description: string;
};

let products: Product[] = [
  {
    pid: "1",
    imageUrl: { list: "infanoid/list.jpg", detail: "infanoid/detail.jpg" },
    title: "人間型ロボット「インファノイド」",
    brief:
      "関節は人間とほぼ同じ可動範囲で、頭、眉、眼、唇の動きで表情が作れる。",
    category: "robot",
    description:
      "体高60cm、重量14kg、稼働箇所は28カ所。\n各関節は人間とほぼ同じ可動範囲であり、頭、眉、眼、唇の独立した動きは人間の表情を柔軟に表現する。\n目に内蔵されたカメラにより視線上にある物体の動きを追従することができ、「あっち向いてホイ」でインファノイドと対戦することもできる。\nワイヤにより駆動力を伝達し、軽量化とともにスムーズな動作を実現した。情報通信研究機構と当社の共同製作。",
  },
  {
    pid: "2",
    imageUrl: {
      list: "ringOuhukuSouchi/list.jpg",
      detail: "ringOuhukuSouchi/detail.jpg",
    },
    title: "リング往復回転装置",
    brief: "リング部品を規定回数、規定時間往復回転させる装置。",
    category: "automachine",
    description: "",
  },
  {
    pid: "3",
    imageUrl: {
      list: "tableIdouSouchi/list.jpg",
      detail: "tableIdouSouchi/detail.jpg",
    },
    title: "大型テーブル移動装置",
    brief:
      " 900mm x 1800mmのテーブルを2000mm往復させる。サーボモータとボールネジで駆動。",
    category: "experiment",
    description: "",
  },
  {
    pid: "4",
    imageUrl: { list: "yumerobo/list.jpg", detail: "yumerobo/detail.jpg" },
    title: "壁面昇降ロボット「夢ロボ」",
    brief:
      "垂直の壁を昇降することができる人型のロボット。上海万博に展示された。",
    category: "robot",
    description: "",
  },
  {
    pid: "5",
    imageUrl: {
      list: "pushKensaSouchi/list.jpg",
      detail: "pushKensaSouchi/detail.jpg",
    },
    title: "タッチパネル多点プッシュ検査装置",
    brief:
      "タッチ信号の正常な出力を検査するため、スクリーンの任意の点を正確かつ高速にプッシュする装置。",
    category: "inspection",
    description: "",
  },
  {
    pid: "11",
    imageUrl: {
      list: "shiseiSeigyoSouchi/list.jpg",
      detail: "shiseiSeigyoSouchi/detail.jpg",
    },
    title: "3軸姿勢制御装置",
    brief: "ここに製品の概要が入ります。ここに製品の概要が入ります。",
    category: "automachine",
    description: "",
  },
];

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
