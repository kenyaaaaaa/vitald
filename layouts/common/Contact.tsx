import { css } from "@emotion/react";

const Contact = () => {
  return (
    <section css={wrap}>
      <div css={contact}>
        <div css={phone}>
          <h3>お電話でのお問い合わせ</h3>
          <a href="tel:06-6978-2299">06-6978-2299</a>
          <p>受付時間　平日9:00〜18:00</p>
        </div>
        <div css={mail}>
          <h3>サイトでのお問い合わせ</h3>
          <a href="">お問い合わせフォームへ・</a>
          <p>お気軽にお問い合わせください</p>
        </div>
      </div>
    </section>
  );
};

const wrap = css`
  position: relative;
`;

const contact = css`
  position: absolute;
  bottom: -23rem;
  left: 3rem;
  right: 3rem;
  text-align: center;
  color: white;
`;

const phone = css`
  padding: 3rem 0;
  background: linear-gradient(90deg, #e48967 0%, #e57b65 99%);
  a {
    font-size: 2.8rem;
  }
`;

const mail = css`
  background: linear-gradient(90deg, #e57b58 0%, #e57b65 99%);
  padding: 3rem 0;
  a {
    display: inline-block;
    border: 1px solid white;
    background-color: white;
    border-radius: 3px;
    color: #e57b58;
    padding: 1rem 2rem;
    font-weight: bold;
    margin: 0.7rem 0;
  }
`;

export default Contact;
