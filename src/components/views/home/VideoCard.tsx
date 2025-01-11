import { css } from "@emotion/react";
import { useState } from "react";
import Image from "next/image";

const VideoCard = ({ videoId }: { videoId: string }) => {
  const [isThumbnail, setIsThumbnail] = useState(true);
  return (
    <section css={cardWrapper}>
      {isThumbnail ? (
        <div css={ytIcon}>
          <Image
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            onClick={() => setIsThumbnail(false)}
            width="320px"
            height="180px"
          />
        </div>
      ) : (
        <iframe
          width="320px"
          height="180px"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </section>
  );
};

const cardWrapper = css`
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
`;
const ytIcon = css`
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

export default VideoCard;
