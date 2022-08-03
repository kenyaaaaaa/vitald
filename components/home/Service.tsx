import { css } from "@emotion/react";
import ReadMore from "../common/ReadMore";
import { mqLarge } from "../../utils/style";
import Image from "next/image";

const Service = () => {
  return (
    <div css={wrapper}>
      <section css={container}>
        <div css={wrapperInner}>
          <div css={imgWrapper}>
            <div css={draft2dImg}>
              <Image src={`/images/draft2D.jpg`} width="300px" height="200px" />
            </div>
            <div css={draft3dImg}>
              <Image src={`/images/draft3D.jpg`} width="300px" height="200px" />
            </div>
          </div>
          <div>
            <div css={title}>
              <h1>
                あらゆるニーズに対応した
                <br />
                機械の設計製作
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
                機械化／自動化による問題解決は弊社にお任せください。
              </p>
            </div>
          </div>
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
  ${mqLarge} {
    padding: 7rem 1rem 5rem;
  }
`;

const wrapperInner = css`
  margin-bottom: 4rem;
  ${mqLarge} {
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 9rem;
  }
`;

const imgWrapper = css`
  display: none;
  ${mqLarge} {
    display: block;
    width: 50%;
    /* margin-right: 5rem; */
  }
`;

const draft2dImg = css`
  ${mqLarge} {
    position: absolute;
    top: -13%;
    z-index: 1;
    opacity: 0.85;
  }
`;

const draft3dImg = css`
  ${mqLarge} {
    opacity: 0.8;
    position: absolute;
    top: 38%;
    left: 20%;
  }
`;

const title = css`
  display: flex;

  span {
    color: black;
    margin: 0 2rem;
  }
  h1 {
    position: relative;
    letter-spacing: 0.3rem;
    font-weight: 400;
    line-height: 1.5;
  }
`;

const description = css`
  margin-top: 2.5rem;
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
