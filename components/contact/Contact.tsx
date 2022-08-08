import { css } from "@emotion/react";
import { mqLarge } from "../../utils/style";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  interface FromInputs {
    name: string;
    company: string;
    division: string;
    mail: string;
    tel: string;
    content: string;
  }
  // const axios = require("axios").default;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FromInputs>();
  // const [data, setData] = useState("");

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
            <p css={telDesc}>お電話でも承ります。お気軽にご連絡ください。</p>
            <div>
              <a href="tel:06-6978-2299" css={telNumber}>
                06-6978-2299
              </a>
            </div>
          </div>
          <div css={right}>
            <p css={required}>
              <span>＊</span>必須
            </p>
            <form
              onSubmit={handleSubmit((data) => {
                // setData(JSON.stringify(data))
                axios
                  .post("/.netlify/functions/sendMail", data)
                  .then((res) => {
                    console.log(res);
                  })
                  .catch(() => {});
              })}
            >
              <label htmlFor="name">
                お名前<span>＊</span>
              </label>
              <input id="name" {...register("name", { required: true })} />
              {errors.name && (
                <p css={errorMessage}>お名前を入力してください</p>
              )}

              <label htmlFor="company">
                貴社名<span>＊</span>
              </label>
              <input
                id="company"
                {...register("company", { required: true })}
              />
              {errors.company && (
                <p css={errorMessage}>貴社名を入力してください</p>
              )}
              <label htmlFor="division">部署名</label>
              <input id="division" {...register("division")} />
              <label htmlFor="mail">
                メールアドレス<span>＊</span>
              </label>
              <input
                id="mail"
                {...register("mail", {
                  required: true,
                  pattern: /[\w\d_-]+@[\w\d_-]+\.[\w\d._-]+/,
                })}
              />
              {errors.mail?.type === "required" && (
                <p css={errorMessage}>メールアドレスを入力してください</p>
              )}
              {errors.mail?.type === "pattern" && (
                <p css={errorMessage}>メールアドレスの形式が正しくありません</p>
              )}
              <label htmlFor="tel">
                電話番号<span>＊</span>
              </label>
              <input
                type="tel"
                id="tel"
                {...register("tel", { required: true })}
              />
              {errors.tel && (
                <p css={errorMessage}>電話番号を入力してください</p>
              )}
              <label htmlFor="content">
                お問い合わせ内容<span>＊</span>
              </label>
              <textarea
                id="content"
                {...register("content", { required: true })}
              />
              {errors.content && (
                <p css={errorMessage}>お問い合わせ内容を入力してください</p>
              )}
              {/* <p>{data}</p> */}
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const errorMessage = css`
  font-size: 1rem;
  color: red;
  padding-bottom: 1rem;
  ${mqLarge} {
  }
`;
const formDesc = css`
  font-size: 1.2rem;
  padding-top: 5rem;
  ${mqLarge} {
    padding: 0;
  }
`;
const telDesc = css`
  font-size: 1.2rem;
  margin-top: 3rem;
`;
const telNumber = css`
  display: inline-block;
  font-size: 2.2rem;
  font-weight: bold;
  ${mqLarge} {
    margin-top: 0.7rem;
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
    font-size: 1.1rem;
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
    :hover {
      background-color: hsl(12, 90%, 65%);
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
  padding-bottom: 7rem;
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

export default Contact;
