import { css } from "@emotion/react";
import { mqLarge } from "../../utils/style";

const Hero = () => {
  return (
    <section>
      <div css={heroImg}>
        <div css={wrapper}>
          <div css={heroMsg}>
            <h1>
              機械の設計から製作まで、
              <br />
              オーダーメイドで。
            </h1>
            <p>
              信頼の実績と技術力をもって、
              <br />
              一人一人のご要望に合わせた製品をお作りいたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const wrapper = css`
  ${mqLarge} {
    max-width: 1200px;
    margin: auto;
  }
`;

const heroImg = css`
  background: url(/images/hero.jpg) no-repeat center/cover;
  position: relative;
  min-height: calc(var(--vh, 1vh) * 100);
  ::before {
    content: "";
    min-height: calc(var(--vh, 1vh) * 100);
    background: linear-gradient(
      180deg,
      hsla(10, 40%, 20%, 0.5),
      hsla(240, 60%, 5%, 0.7)
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
  }
  ${mqLarge} {
    background: url(/images/hero_pc.png) no-repeat center/cover;
    min-height: 600px;
    ::before {
      min-height: 600px;
    }
  }
`;

const heroMsg = css`
  z-index: 10;
  padding: 0 3rem;
  position: absolute;
  bottom: 0;
  transform: translateY(-55%);
  h1 {
    font-size: 2.6rem;
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
  ${mqLarge} {
    transform: translateY(-30%);
    h1 {
      line-height: 1.4;
      font-size: 3.2rem;
    }
    p {
      margin-top: 2rem;
      font-size: 1.4rem;
    }
  }
`;

export default Hero;
