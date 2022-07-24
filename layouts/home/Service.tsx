import { css } from "@emotion/react";
import ReadMore from "../../components/ReadMore";

const Service = () => {
  return (
    <div css={wrapper}>
      <section css={container}>
        <div css={title}>
          <h1>
            機械化<span>✕</span>自動化
          </h1>
        </div>
        <div css={description}>
          <p>
            ご希望に合わせて、自動機械・試験装置・ロボットを設計製作いたします。
            <br />
            人が行うには危険な作業を機械に任せたい、自動化装置を取り入れることにより生産性の向上を図りたい、人を楽しませるロボットを作りたい等々、機械化／自動化による問題解決は当社にお任せください。
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
  justify-content: center;
  align-items: center;
  span {
    color: black;
    margin: 0 2rem;
  }
  h1 {
    position: relative;
    letter-spacing: 0.4rem;
    font-weight: 200;
    ::before {
      content: "";
      border-radius: 2px;
      left: 50%;
      bottom: 5%;
      background-color: #e57b58;
      transform: translateX(-144%);
      position: absolute;
      display: inline-block;
      width: 8rem;
      height: 3px;
    }
    ::after {
      content: "";
      border-radius: 2px;
      transform: translateX(39%);
      background-color: #e57b58;
      position: absolute;
      left: 50%;
      bottom: 5%;
      display: inline-block;
      width: 8rem;
      height: 3px;
      // -webkit-transform: translateX(-80%);
    }
  }
`;

const description = css`
  margin-top: 4rem;
`;
export default Service;
