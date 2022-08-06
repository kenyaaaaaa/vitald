import { css } from "@emotion/react";
import VideoCard from "./VideoCard";
import ReadMore from "../common/ReadMore";
import { mqLarge } from "../../utils/style";

const videoIds: string[] = [
  "4XxmlgdYH1Y",
  "kaH6sePO1EQ",
  "y66GE4Zj0S4",
  "eOUsEipTaSA",
  "6yPqWxWPQx4",
  "y0rd4ctSD-0",
];
function chunk<T extends any[]>(arr: T, size: number) {
  return arr.reduce(
    (newarr, _, i) => (i % size ? newarr : [...newarr, arr.slice(i, i + size)]),
    [] as T[][]
  );
}

const Video = () => {
  return (
    <div css={wrapper}>
      <section css={container}>
        <div css={title}>
          <h1>動画で見る</h1>
        </div>
        {chunk(videoIds, 3).map((element: any, index: number) => {
          return (
            <div css={cardWrapper} key={index}>
              {element.map((videoId: string, index: number) => {
                return <VideoCard videoId={videoId} key={index} />;
              })}
            </div>
          );
        })}
        {/* {videoIds.map((videoId, index) => (
          <VideoCard videoId={videoId} key={index} />
        ))} */}

        <ReadMore bgColor={"whitesmoke"} text={"その他の動画を見る"} />
      </section>
    </div>
  );
};

const wrapper = css`
  background-color: whitesmoke;
`;

const container = css`
  padding: 4rem 3rem 20rem 3rem;
  background-color: whitesmoke;
  max-width: 1200px;
  margin: 0 auto;
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

const cardWrapper = css`
  ${mqLarge} {
    display: flex;
    justify-content: space-between;
  }
`;

export default Video;
