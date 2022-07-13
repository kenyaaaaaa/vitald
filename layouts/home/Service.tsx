import { css } from "@emotion/react";

const Service = () => {
  return (
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
      <div css={readMore}>
        <a href="">詳細を見る・</a>
      </div>
    </section>
  );
};

const container = css`
  padding: 4rem 3rem 5rem 3rem;
  background-color: whitesmoke;
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

const readMore = css`
  border: 1px solid #1d2087;
  border-radius: 3px;
  height: 4.2rem;
  display: flex;
  margin: 5rem auto 0 auto;
  text-align: center;
  background-color: whitesmoke;
  a {
    font-weight: bold;
    color: #1d2087;
    display: block;
    width: 100%;
    line-height: 4.2rem;
  }
`;

export default Service;
