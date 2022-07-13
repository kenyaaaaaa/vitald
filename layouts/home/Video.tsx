import { css } from "@emotion/react";
import VideoCard from "./VideoCard";

const videoIds = ["4XxmlgdYH1Y", "kaH6sePO1EQ", "y66GE4Zj0S4", "eOUsEipTaSA"];
const Video = () => {
  return (
    <section css={container}>
      <div css={title}>
        <h1>動画で見る</h1>
      </div>

      {videoIds.map((videoId, index) => (
        <VideoCard videoId={videoId} key={index} />
      ))}

      <div css={readMore}>
        <a href="">その他の動画を見る・</a>
      </div>
    </section>
  );
};

const container = css`
  padding: 4rem 3rem 20rem 3rem;
  background-color: whitesmoke;
`;

const title = css`
  text-align: center;
  margin-bottom: 3rem;
  color: #1d2087;
  h1 {
    font-size: 1.2rem;
    letter-spacing: 0.4rem;
    text-align: center;
    ::before {
      content: "VIDEO";
      display: block;
      padding-left: 0.4rem;
      text-align: center;
      letter-spacing: 0.6rem;
      font-size: 2.4rem;
    }
  }
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
    color: #1d2087;
    display: block;
    width: 100%;
    line-height: 4.2rem;
    font-weight: bold;
  }
`;

export default Video;
