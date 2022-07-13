import { css } from "@emotion/react";

const Hero = () => {
  return (
    <section>
      <div css={heroImg}>
        <div css={heroMsg}>
          <h1>
            機械の設計から製作まで、
            <br />
            オーダーメイドで
          </h1>
          <p>
            信頼の実績と技術力をもって、
            <br />
            一人一人のご要望に合わせた製品をお作りいたします。
          </p>
        </div>
      </div>
    </section>
  );
};

const heroImg = css`
  background: url(/images/bg-sample.jpg) no-repeat center/cover;
  position: relative;
  min-height: calc(var(--vh, 1vh) * 100);
  ::before {
    content: "";
    min-height: calc(var(--vh, 1vh) * 100);
    background-color: rgba(1, 4, 27, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
  }
`;

const heroMsg = css`
  z-index: 10;
  padding: 0 3rem;
  position: absolute;
  bottom: 0;
  transform: translateY(-55%);
  h1 {
    color: white;
    line-height: 1.4;
    font-family: "ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E",
      "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
  }
  p {
    font-weight: bold;
    margin-top: 1.5rem;
    font-size: 1.2rem;
    color: white;
  }
`;

export default Hero;
