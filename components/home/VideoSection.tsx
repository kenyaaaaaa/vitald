import { css } from "@emotion/react";
import VideoCard from "./VideoCard";
import ReadMore from "../common/ReadMore";
import { productData } from "../../const/ProductData";

const targetVideoIds = productData
  .filter((product) => {
    switch (product.pid) {
      case "1":
      case "2":
      case "12":
      case "4":
      case "5":
      case "11":
        return true;
    }
  })
  .map((product) => product.videoIds[0]) as string[];

const VideoSection = () => {
  return (
    <div css={wrapper}>
      <section css={container}>
        <div css={title}>
          <h1>動画で見る</h1>
        </div>
        <div css={cardWrapper}>
          {targetVideoIds.map((videoId: string, index: number) => {
            return <VideoCard videoId={videoId} key={index} />;
          })}
        </div>
        <ReadMore
          bgColor={"whitesmoke"}
          text={"すべての動画を見る"}
          path={"/video"}
        />
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
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;

export default VideoSection;
