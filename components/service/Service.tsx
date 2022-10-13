import { css } from "@emotion/react";
import { mqLarge } from "../../utils/style";

const Service = () => {
  return (
    <div css={wrapper}>
      <div css={title}>
        <h1>業務内容</h1>
        <p>Service</p>
      </div>
      <div css={container}>
        <div css={serviceWrapper}>
          <div css={serviceTitle}>
            <h2>完全特注の機械製作</h2>
          </div>
          <div css={serviceDesc}>
            <p>
              省力化機械・自動組立装置・ロボット・試験装置・旋回台・走行車両など、個々のニーズに対応する機械の製作を行っております。
              <br />
              <br />
              市販を目的とした大量生産や大型の機械の製作に関しましては弊社で対応することは難しいですが、小規模のもので独自性の高い機械を導入したい、といったケースは弊社の得意とするところであり、是非ともご相談・ご依頼いただければと思います。
              <br />
              <br />
              市販部品の活用によるコスト削減、短納期の実現が弊社の強みであり、
              昭和61年の創業以来、企業、大学、研究所など多方面から数多くのご依頼をお受けして参りました。
              <br />
              豊富な実績と確かな技術力をもって、ご要望に応える製品をお作りいたします。
            </p>
          </div>
          <div css={serviceTitle}>
            <h2 css={mt}>機械設計</h2>
          </div>
          <div css={serviceDesc}>
            <p>
              弊社では機械の設計から製作、納品までを一貫して行っておりますが、設計のみのご依頼も引き受けております。
              3DCADは「IRONCAD」、2DCADは「CADPACK」を使用しており、3DデータはSTEP形式、2DデータはDWG／DXF形式で納品可能です。
              お気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mt = css`
  margin-top: 4rem;
`;
const serviceTitle = css`
  h2 {
    font-size: 1.7rem;
  }
`;
const serviceDesc = css`
  margin-top: 1rem;
  p {
    font-size: 1.3rem;
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

const serviceWrapper = css`
  margin: 3rem auto 0 auto;
  padding: 3rem 3rem;
  ${mqLarge} {
    padding: 6rem 0 8rem 0;
    margin: 4rem auto 0 auto;
    width: 900px;
  }
`;

export default Service;
