import { css } from "@emotion/react";
import { mqLarge } from "../../utils/style";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <>
      <div css={wrapper}>
        <div css={title}>
          <h1>お問い合わせ</h1>
          <p>Contact</p>
        </div>
        <div css={container}>
          <div css={left}>
            <p css={formDesc}>
              機械の設計製作のご相談、ご質問がございましたら、
              <br />
              フォームからお問合せください。
            </p>
            <p css={phoneDesc}>お電話でも承ります。お気軽にご連絡ください。</p>
            <a href="tel:06-6978-2299" css={phoneNumber}>
              06-6978-2299
            </a>
          </div>
          <div css={right}>
            <p css={required}>
              <span>＊</span>必須
            </p>
            <form
              onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
            >
              <label htmlFor="name">
                お名前<span>＊</span>
              </label>
              <input id="name" {...register("name")} />
              <label htmlFor="company">
                貴社名<span>＊</span>
              </label>
              <input id="company" {...register("company")} />
              <label htmlFor="division">部署名</label>
              <input id="division" {...register("division")} />
              <label htmlFor="mail">
                メールアドレス<span>＊</span>
              </label>
              <input id="mail" {...register("mail")} />
              <label htmlFor="phone">
                電話番号<span>＊</span>
              </label>
              <input id="phone" {...register("phone")} />
              <label htmlFor="content">
                お問い合わせ内容<span>＊</span>
              </label>
              <textarea id="content" {...register("content")} />
              {/* <p>{data}</p> */}
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const formDesc = css`
  font-size: 1.2rem;
  padding-top: 5rem;
  ${mqLarge} {
    padding: 0;
  }
`;
const phoneDesc = css`
  font-size: 1.2rem;
  margin-top: 3rem;
`;
const phoneNumber = css`
  font-size: 2rem;
  font-weight: bold;
  ${mqLarge} {
    margin-top: 0.5rem;
  }
`;
const left = css`
  text-align: center;
  ${mqLarge} {
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;
const required = css`
  font-size: 0.6rem;
  font-weight: bold;
  text-align: right;
  width: 100%;
  ${mqLarge} {
    width: 80%;
  }
`;
const right = css`
  padding: 5rem 0;
  ${mqLarge} {
    width: 80%;
  }
  label {
    font-size: 1rem;
    font-weight: bold;
  }
  span {
    font-size: 0.6rem;
    color: red;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    ${mqLarge} {
      width: 80%;
      border-radius: 4px;
    }
    border: 1px solid gainsboro;
    padding: 0.6rem;
    margin-bottom: 15px;
    font-size: 14px;
    :focus {
      outline: 0;
      background-color: whitesmoke;
    }
  }
  textarea {
    height: 6rem;
  }
  input[type="submit"] {
    appearance: none;
    background-color: hsl(10, 70%, 65%);
    color: white;
    border: none;
    margin-top: 3rem;
    display: block;
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    letter-spacing: 0.5rem;
    margin-top: 4rem;
    ${mqLarge} {
      width: 80%;
      border-radius: 4px;
    }
  }
  ${mqLarge} {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
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
  background-color: white;
  padding: 0 3rem;
  margin: 3rem 1rem;
  ${mqLarge} {
    box-shadow: 6px 6px 20px gainsboro;
    display: flex;
    width: 100%;
    max-width: 1100px;
    margin: 4rem auto;
    padding: 0;
  }
`;
const title = css`
  margin-left: 3rem;
  max-width: 1100px;
  p {
    font-size: 1rem;
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

export default Contact;
