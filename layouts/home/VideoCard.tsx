import { css } from "@emotion/react";

const VideoCard = ({ videoId }: { videoId: string }) => {
  return (
    <section css={cardWrap}>
      <div css={videoWrap}>
        <iframe
          width="315px"
          height="175px"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

const cardWrap = css`
  text-align: center;
  margin-bottom: 3rem;
`;

const videoWrap = css`
  position: relative;
  line-height: normal;
  font-size: 0;
  ::before {
    content: "";
    z-index: 1;
    background-color: rgba(46, 59, 146, 0.05);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default VideoCard;
