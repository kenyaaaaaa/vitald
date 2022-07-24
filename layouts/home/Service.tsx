import { css } from "@emotion/react";
import ReadMore from "../../components/ReadMore";
import { mqLarge } from "../../components/utils/style";

const Service = () => {
  return (
    <div css={wrapper}>
      <section css={container}>
        <div css={title}>
          <h1>
            {/* 機械設計、製作 */}
            あらゆるニーズに対応した
            <br />
            機械の設計製作
            {/* <span>✕</span> */}
          </h1>
        </div>
        <div css={description}>
          <p>
            ご希望に合わせて、自動機械・試験装置・ロボットを設計製作いたします。
            <br />
            人が行うには危険な作業を機械に任せたい、
            <br css={[pcBreak, spMT]} />
            自動化装置を取り入れることにより生産性の向上を図りたい、
            <br css={pcBreak} />
            人を楽しませるロボットを作りたい等々、
            <br css={pcBreak} />
            機械化／自動化による問題解決は当社にお任せください。
          </p>
        </div>
        <ReadMore bgColor={"whitesmoke"} text={"詳細を見る"} />
      </section>
    </div>
  );
};

const wrapper = css`
  background-color: whitesmoke;
`;
const container = css`
  padding: 4rem 3rem 5rem 3rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const title = css`
  display: flex;
  /* justify-content: center; */

  span {
    color: black;
    margin: 0 2rem;
  }
  h1 {
    position: relative;
    letter-spacing: 0.3rem;
    font-weight: 400;
    line-height: 1.5;
    /* border-bottom: 3px solid #e57b58; */
    /* ::before {
      content: "";
      left: 50%;
      bottom: 5%;
      background-color: #e57b58;
      opacity: 0.7;
      transform: translateX(-144%);
      position: absolute;
      display: inline-block;
      width: 17.5rem;
      height: 6px;
    } */
  }
`;

const description = css`
  margin-top: 2rem;
  p {
  }
  ${mqLarge} {
    line-height: 2;
    font-size: 1.3rem;
  }
`;

const pcBreak = css`
  display: none;
  ${mqLarge} {
    display: block;
  }
`;

const spMT = css`
  margin-top: 2rem;
`;

export default Service;
