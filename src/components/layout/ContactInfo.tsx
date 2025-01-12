import { css } from "@emotion/react";
import Link from "next/link";
import { MediaQueries } from "@styles/mediaQueries";

const Contact = () => {
  return (
    <section css={wrapper}>
      <div css={contact}>
        <div css={[phone, contactInner]}>
          <h3>お電話でのお問い合わせ</h3>
          <a href="tel:06-6978-2299">06-6978-2299</a>
          <p>受付時間　平日9:00〜18:00</p>
          <p>
            弊社へのご質問がございましたら
            <br />
            お気軽にお電話ください。
          </p>
        </div>
        <div css={[mail, contactInner]}>
          <h3>サイトでのお問い合わせ</h3>
          <Link href="/contact">
            お問い合わせフォームへ・
          </Link>
          <p>
            機械の設計製作のご相談、ご質問が
            <br />
            ございましたら、弊社にいつでも
            <br />
            お気軽にお問合せください。
          </p>
        </div>
      </div>
    </section>
  );
};

const wrapper = css`
  position: relative;
`;

const contact = css`
  position: absolute;
  /* width: 500px; */
  top: -10rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  ${MediaQueries.DESKTOP} {
    display: flex;
    top: -10rem;
  }
`;

const contactInner = css`
  /* min-width: 320px; */

  width: 90vw;
  /* width: 80%; */
  padding: 3rem 0;
  ${MediaQueries.DESKTOP} {
    width: 600px;
    padding: 4rem 0rem;
  }
  p {
    font-size: 1.2rem;
  }
`;

const phone = css`
  background: linear-gradient(
    90deg,
    hsla(14, 70%, 60%) 0%,
    hsla(14, 70%, 62%) 100%
  );
  ${MediaQueries.DESKTOP} {
    background: linear-gradient(
      180deg,
      hsla(14, 70%, 60%) 0%,
      hsla(14, 70%, 62%) 100%
    );
  }
  a {
    font-size: 2.9rem;
    margin: 1rem 0;
    display: inline-block;
  }
`;

const mail = css`
  background: linear-gradient(
    90deg,
    hsla(14, 70%, 64%) 0%,
    hsla(14, 70%, 62%) 100%
  );
  ${MediaQueries.DESKTOP} {
    background: linear-gradient(
      180deg,
      hsla(14, 70%, 64%) 0%,
      hsla(14, 70%, 62%) 100%
    );
  }
  a {
    display: inline-block;
    border: 1px solid white;
    background-color: white;
    border-radius: 3px;
    color: hsla(10, 70%, 65%);
    padding: 1rem 2rem;
    font-weight: bold;
    margin: 1.5rem 0;
  }
`;

export default Contact;
