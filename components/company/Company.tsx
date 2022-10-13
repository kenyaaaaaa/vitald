import { css } from "@emotion/react";
import { mqLarge } from "../../utils/style";

const Company = () => {
  return (
    <div css={wrapper}>
      <div css={title}>
        <h1>会社概要</h1>
        <p>Company</p>
      </div>
      <div css={container}>
        <div css={companyWrapper}>
          <dl css={item}>
            <dt css={left}>会社名</dt>
            <dd css={right}>国際バイタルディバイス有限会社</dd>
          </dl>
          <dl css={item}>
            <dt css={left}>住所</dt>
            <dd css={right}>
              大阪本社 〒537-0014 大阪市東成区大今里西1-12-7-103
              <br />
              東京オフィス 〒108-0075 東京都港区港南1-9-36 アレア品川13階 EO 801
            </dd>
          </dl>
          <dl css={item}>
            <dt css={left}>設立日</dt>
            <dd css={right}>2003年8月1日（創業1986年）</dd>
          </dl>
          <dl css={item}>
            <dt css={left}>資本金</dt>
            <dd css={right}>300万円</dd>
          </dl>
          <dl css={item}>
            <dt css={left}>代表</dt>
            <dd css={right}>植田　高年</dd>
          </dl>
          <dl css={item}>
            <dt css={left}>事業内容</dt>
            <dd css={right}>
              自動機械、ロボット、試験装置等の特注製作
              <br />
              機械設計　3D(IRONCAD)／2D(CADPAC)
            </dd>
          </dl>
          <dl css={item}>
            <dt css={left}>取引先</dt>
            <dd css={right}>
              独立行政法人「情報通信研究機構」、安田工業株式会社、NTT、独立行政法人「産業技術総合研究所」、キヤノン株式会社、東京電力株式会社、株式会社東設土木コンサルタント、つくば大学、東北大学、立命館大学、パナソニック株式会社、和研工業株式会社、そのほか（敬称略）
            </dd>
          </dl>
          <div css={access}>
            <p>アクセス</p>
            <p></p>
            <iframe
              css={map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.2467143854037!2d135.54108811587105!3d34.67372228044146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0a26c3b4987%3A0x2034ef29ad5eb3dc!2z44CSNTM3LTAwMTQg5aSn6Ziq5bqc5aSn6Ziq5biC5p2x5oiQ5Yy65aSn5LuK6YeM6KW_77yR5LiB55uu77yR77yS4oiS77yX4oiS77yR77yQ77yT!5e0!3m2!1sja!2sjp!4v1665650840522!5m2!1sja!2sjp"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const access = css`
  aspect-ratio: 16/9;
  width: 100%;
  border: 0;
  p {
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;
const map = css`
  aspect-ratio: 16/9;
  width: 100%;
  border: 0;
`;
const item = css`
  display: flex;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid whitesmoke;
  /* margin-left: 10rem; */
`;
const left = css`
  font-weight: bold;
  width: 30%;
`;
const right = css`
  width: 70%;
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

const companyWrapper = css`
  margin: 3rem auto 0 auto;
  padding: 3rem 3rem;
  ${mqLarge} {
    padding: 8rem 0 8rem 0;
    margin: 4rem auto 0 auto;
    width: 900px;
  }
`;

export default Company;
