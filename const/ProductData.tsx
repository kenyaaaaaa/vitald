export type ProductData = {
  pid: string;
  imageUrl: { list: string; detail: string };
  title: string;
  brief: string;
  category: string;
  description: string;
  videoIds: string[];
};
// "4XxmlgdYH1Y", //インファノイド
// "kaH6sePO1EQ", //姿勢制御（無回転）
// "mLo5Ni4cl3E", //姿勢制御
// "EOBDtpaC2Ec", //リング
// "y66GE4Zj0S4", //多点
// "eOUsEipTaSA", //恐竜
// "6yPqWxWPQx4", //精密雲台
// "y0rd4ctSD-0", //ゆめろぼ

export const productData: ProductData[] = [
  {
    pid: "1",
    imageUrl: { list: "infanoid/list.jpg", detail: "infanoid/detail.jpg" },
    title: "人間型ロボット「インファノイド」",
    brief:
      "関節は人間とほぼ同じ可動範囲で、頭、眉、眼、唇の動きで表情が作れる。",
    category: "robot",
    description:
      "体高60cm、重量14kg、稼働箇所は28カ所。\n各関節は人間とほぼ同じ可動範囲であり、頭、眉、眼、唇の独立した動きで人間の表情を柔軟に表現することができる。\n目に内蔵されたカメラにより視線上にある物体の動きを追従することができ、「あっち向いてホイ」でインファノイドと遊ぶこともできる。\nワイヤにより駆動力を伝達し、軽量化とともにスムーズな動作を実現した。情報通信研究機構と当社の共同製作。",
    videoIds: ["4XxmlgdYH1Y"],
  },
  {
    pid: "2",
    imageUrl: {
      list: "ringOuhukuSouchi/list.jpg",
      detail: "ringOuhukuSouchi/detail.jpg",
    },
    title: "リング往復回転装置",
    brief: "リング部品を規定回数、規定時間往復回転させる装置。",
    category: "autoMachine",
    description:
      "ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。",
    videoIds: ["EOBDtpaC2Ec"],
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
    description:
      "ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。",
    videoIds: [],
  },
  {
    pid: "4",
    imageUrl: { list: "yumerobo/list.jpg", detail: "yumerobo/detail.jpg" },
    title: "壁面昇降ロボット「夢ロボ」",
    brief:
      "垂直の壁を昇降することができる人型のロボット。上海万博に展示された。",
    category: "robot",
    description:
      "ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。",
    videoIds: ["y0rd4ctSD-0"],
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
    description:
      "ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。",
    videoIds: ["y66GE4Zj0S4"],
  },
  {
    pid: "6",
    imageUrl: { list: "senkaidai/list.jpg", detail: "senkaidai/detail.jpg" },
    title: "1軸旋回台",
    brief: "ここに製品の概要が入ります。ここに製品の概要が入ります。",
    category: "autoMachine",
    description:
      "ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。",
    videoIds: [],
  },
  {
    pid: "7",
    imageUrl: {
      list: "kaigoIjouSouchi/list.jpg",
      detail: "kaigoIjouSouchi/detail.jpg",
    },
    title: "介護用移乗装置",
    brief: "ここに製品の概要が入ります。ここに製品の概要が入ります。",
    category: "experiment",
    description:
      "ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。",
    videoIds: [],
  },
  {
    pid: "8",
    imageUrl: {
      list: "dakenSouchi/list.jpg",
      detail: "dakenSouchi/detail.jpg",
    },
    title: "打検装置",
    brief: "ここに製品の概要が入ります。ここに製品の概要が入ります。",
    category: "inspection",
    description:
      "ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。",
    videoIds: [],
  },
  {
    pid: "9",
    imageUrl: {
      list: "3hzHanpukuSouchi/list.jpg",
      detail: "3hzHanpukuSouchi/detail.jpg",
    },
    title: "3Hz高速反復移動装置",
    brief:
      "100mmの間隔の中で、2kgの物体を3往復（毎秒）移動させることができる装置。",
    category: "experiment",
    description:
      "ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。",
    videoIds: [],
  },
  {
    pid: "10",
    imageUrl: {
      list: "ashikubiMogiSouchi/list.jpg",
      detail: "ashikubiMogiSouchi/detail.jpg",
    },
    title: "足首関節模擬装置",
    brief: "ここに製品の概要が入ります。ここに製品の概要が入ります。",
    category: "experiment",
    description:
      "ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。",
    videoIds: [],
  },
  {
    pid: "11",
    imageUrl: {
      list: "shiseiSeigyoSouchi/list.jpg",
      detail: "shiseiSeigyoSouchi/detail.jpg",
    },
    title: "3軸姿勢制御装置",
    brief: "ここに製品の概要が入ります。ここに製品の概要が入ります。",
    category: "autoMachine",
    description:
      "ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。",
    videoIds: ["kaH6sePO1EQ", "mLo5Ni4cl3E"],
  },
  {
    pid: "12",
    imageUrl: {
      list: "seimitsuUndai/list.jpg",
      detail: "seimitsuUndai/detail.jpg",
    },
    title: "2軸精密電動雲台",
    brief: "ここに製品の概要が入ります。ここに製品の概要が入ります。",
    category: "autoMachine",
    description:
      "ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。",
    videoIds: ["6yPqWxWPQx4"],
  },
  {
    pid: "13",
    imageUrl: { list: "fuppy/list.jpg", detail: "fuppy/detail.jpg" },
    title: "マスコットロボット「ふっぴぃ」",
    brief:
      "首を左右に振り、両手足を上下に可動させることができる。3種類の音声出力も可能",
    category: "robot",
    description:
      "ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。ここに製品の説明が入ります。",
    videoIds: [],
  },
];
