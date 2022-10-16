import { css } from "@emotion/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { mqLarge } from "../../utils/style";
import VideoCard from "../home/VideoCard";

const videoIds: string[] = [
  "4XxmlgdYH1Y",
  "kaH6sePO1EQ",
  "y66GE4Zj0S4",
  "eOUsEipTaSA",
  "6yPqWxWPQx4",
  "y0rd4ctSD-0",
];

const Video = () => {
  return (
    <div css={wrapper}>
      <div css={title}>
        <div>
          <h1>動画一覧</h1>
          <p>Video</p>
        </div>
        <div css={videoLink}>
          <Link href={"/product"} scroll={false}>
            <a>実績一覧に戻る</a>
          </Link>
        </div>
      </div>
      <div css={container}>
        <div css={productWrapper}>
          <div css={cardWrapper}>
            {videoIds.map((videoId: string, index: number) => {
              return <VideoCard videoId={videoId} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const cardWrapper = css`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
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
  margin-top: 5rem;
  background-color: white;
  ${mqLarge} {
    /* box-shadow: 6px 6px 20px gainsboro; */
  }
`;
const productWrapper = css`
  margin: 2rem auto 0 auto;
  padding: 3rem 3rem;
  ${mqLarge} {
    padding: 6rem 0 6rem 0;
    max-width: 1400px;
  }
`;

const videoLink = css`
  a {
    display: inline-block;
    font-size: 1.2rem;
    color: white;
    /* color: hsl(240, 70%, 20%); */
    margin-left: 3rem;
    border: 1px solid hsl(240, 70%, 20%);
    border-radius: 10px;
    background-color: hsl(240, 70%, 20%);
    /* background-color: whitesmoke; */
    padding: 0.1rem 2rem;
  }
`;

const title = css`
  align-items: center;
  display: flex;
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

export default Video;
