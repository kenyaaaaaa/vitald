import { css } from "@emotion/react";
import { mqLarge } from "../../../const/Breakpoint";

type Faq = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const faqs: Faq[] = [
    {
      question: "受け付けロボットは製作できますか？",
      answer: "製作可能です。",
    },
    {
      question: "人間の顔と同様なロボットの顔は製作できますか？",
      answer:
        "製作可能です。皮膚は特殊なゴムで質感を再現し、髪の毛、まつ毛、まゆ毛は一本ずつ植え付けます。まばたきやウインクもさせることが可能です。",
    },
    {
      question:
        "電動雲台、旋回台に安価な既製品はありますか？＜質問と検討内容の関連性＞",
      answer:
        "申し訳ございませんが、オーダーメイドのため既製品はありません。お求めの仕様が水平回転のみ、または水平と垂直で精度は不要というような場合や、複数個の発注（5台程度）の場合だと比較的安価でご提供可能になります。「安価な中国製を使っているが頻繁に故障するので国内製を検討している」というようなご相談は承りますので、お気軽にお問い合わせください。",
    },
    {
      question:
        "自動機械、試験装置はどんな分野向けのものが製作可能ですか？＜分野の説明＞",
      answer:
        "ゼロから設計するため、ほとんどの分野に対応可能です。過去の製品は企業、大学、研究所など多方面で活躍しています。詳細につきましては「製作実績」のページをご覧ください。",
    },
    {
      question: "自動機械、試験装置はどのくらいの精度で動作しますか?",
      answer:
        "サーボモータやステッピングモータを使えば 0.01°の精度は容易に実現可能であり、さらに高い精度で製作することも可能です。回転精度が必要な場合は対象物をモータ軸に直接取り付け、直線精度が必要な場合はモータとボールネジを組み合わせます。機械全体としては、各部品（モータ、ボールネジ、ベルト、ギア等）相互の精度を組み合わせたものとなります。",
    },
    {
      question:
        "モータ等を使用しない、動かない治具や装置なども製作できますか？",
      answer: "製作可能です。",
    },
    {
      question:
        "機械、装置はどのくらいの大きさのものまで製作可能ですか?＜運送できるサイズ＞",
      answer:
        "大型のものでない限り問題なく、目安としては運送できるサイズであれば対応可能です。",
    },
    {
      question:
        "設計のみの依頼もできますか?＜solidworksとは、3Dは他形式も可能か＞",
      answer:
        "設計のみのご依頼も承りしております。3DCADは「IRONCAD」、2DCADは「CADPACK」を使用しており、3DデータはSTEP形式、2DデータはDWG／DXF形式で納品可能です。SOLIDWORKSとの受け渡しの際にはSTEP形式で納品を行いました。",
    },
    {
      question: "Webによる打ち合わせはできますか？＜方法の詳細があれば＞",
      answer: "Webによる打ち合わせも対応しております。",
    },
    {
      question: "納品までの流れをおしえてください。",
      answer:
        "仕様が定まっていない場合、まずは話し合いをしながら仕様を固めていき、仕様が決まれば、「お見積り提出 → 着手 → 設計 → 製作 → 試運転 → 納入」の流れとなります。",
    },
    {
      question: "納品までにかかる期間はどのくらいですか?",
      answer:
        "状況と仕様によって二ヶ月前後から、複雑なものはそれ以上のお時間をいただく場合もございます。お急ぎの場合はご相談承りますので、お気軽にお問い合わせください。",
    },
  ];
  return (
    <>
      <div css={wrapper}>
        <div css={title}>
          <h1>よくある質問</h1>
          <p>FAQ</p>
        </div>
        <div css={container}>
          <div css={faqWrapper}>
            {faqs.map((faq: Faq, index: number) => {
              return (
                <div css={faqStyle} key={index}>
                  <div css={left}>
                    <span>Q.</span>
                  </div>
                  <div css={right}>
                    <div css={question}>
                      <p>{faq.question}</p>
                    </div>
                    <div css={answer}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const faqWrapper = css`
  margin: 3rem auto 0 auto;
  padding: 3rem 3rem;
  ${mqLarge} {
    padding: 8rem 0 8rem 0;
    margin: 4rem auto 0 auto;
    width: 900px;
  }
`;
const faqStyle = css`
  margin-bottom: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid hsl(0, 0%, 90%);
  display: flex;
  ${mqLarge} {
  }
`;
const left = css`
  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: hsl(0, 0%, 70%);
  }
  ${mqLarge} {
    span {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
`;
const right = css`
  margin-left: 1rem;
  ${mqLarge} {
    margin-left: 7rem;
  }
`;
const question = css`
  p {
    font-size: 1.4rem;
    font-weight: bold;
    display: inline-block;
  }
`;
const answer = css`
  p {
    margin-top: 1rem;
    font-size: 1.3rem;
    color: hsl(0, 0%, 40%);
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
  background-color: white;
  ${mqLarge} {
    width: 90vw;
    box-shadow: 6px 6px 20px gainsboro;
  }
`;
const title = css`
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

export default FAQ;
