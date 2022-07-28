import { css } from "@emotion/react";

const VideoCard = ({ videoId }: { videoId: string }) => {
  return (
    <section css={cardWrapper}>
      <iframe
        width="320px"
        height="180px"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};

const cardWrapper = css`
  text-align: center;
  margin-bottom: 5rem;
`;

export default VideoCard;
