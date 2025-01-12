import { css } from "@emotion/react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  videoId: string;
};

const VideoCard = ({ videoId }: Props) => {
  // 再生中かどうかを state で管理
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section css={wrapper}>
      {isPlaying ? (
        <iframe
          css={iframeStyle}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        />
      ) : (
        <div css={thumbnailWrapper} onClick={() => setIsPlaying(true)}>
          <div css={youtubeIcon}></div>
          <Image
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="YouTube video thumbnail"
            layout="fill"
          />
        </div>
      )}
    </section>
  );
};

export default VideoCard;

/* -- 以下、Emotion CSS -- */

// 親要素: アスペクト比 16:9、幅100%、最大幅640pxなど
const wrapper = css`
  position: relative;
  width: 100%;
  max-width: 640px;
  margin: 0 auto; /* センター寄せはお好みで */
  aspect-ratio: 16 / 9;
`;

// サムネイル用のラッパ
const thumbnailWrapper = css`
  position: relative; 
  width: 100%;
  height: 100%; 
  cursor: pointer;
  margin-bottom: 4rem;
  & > span > img {
    object-fit: cover;
  }
`;

// iframe をアスペクト比を保ったまま全画面埋めたい場合
const iframeStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 0;
`;

const youtubeIcon = css`
  ::before {
    position: absolute;
    background: url(/icons/yt-icon-mono.webp);
    content: "";
    z-index: 1;
    background-size: 100%;
    width: 70px;
    height: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.9;
    transition: 0.5s;
  }
  :hover::before {
    cursor: pointer;
    background-image: url(/icons/yt-icon-red.webp);
  }
`;
