import { css } from "@emotion/react";
import { mqLarge } from "../../../const/Breakpoint";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { motion } from "framer-motion";
import { useModal } from "react-hooks-use-modal";
import Link from "next/link";

const Contact = () => {
  const [isLoading, setLoading] = useState(false);

  const [Modal, open, close, isOpen] = useModal("__next", {
    preventScroll: false,
    closeOnOverlayClick: false,
  });

  interface FromInputs {
    name: string;
    company: string;
    division: string;
    mail: string;
    tel: string;
    content: string;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FromInputs>();

  const sendMail = (data: FieldValues) => {
    setLoading(true);
    axios
      .post("/.netlify/functions/sendMail", data)
      .then((res) => {
        setLoading(false);
        open();
        console.log(res);
      })
      .catch(() => {
        setLoading(false);
      });
  };

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
                sendMail(data);
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
              {isLoading ? (
                <button disabled={true}>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    送信中
                  </motion.span>
                  <BeatLoader color="white" loading={isLoading} size={4} />
                </button>
              ) : (
                <button>
                  <span>送信</span>
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      {/* <AnimatePresence> */}
      <Modal>
        <motion.div
          // key="modal"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          css={modal}
        >
          <h1>お問い合わせありがとうございます。</h1>
          <div css={modalDescWrapper}>
            <p>確認のため、自動返信メールをお送りしております。</p>
            <p>
              お問い合わせ頂いた内容については確認の上、
              <br />
              近日中に弊社担当者よりご連絡いたします。
            </p>
          </div>
          {/* <button onClick={close}>a</button> */}
          <Link href="/">
            <a>ホームに戻る・</a>
          </Link>
        </motion.div>
      </Modal>
      {/* </AnimatePresence> */}
    </>
  );
};

const modal = css`
  color: black;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 1rem; */
  width: 95vw;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  h1 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
  a {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: bold;
  }
  ${mqLarge} {
    width: 1100px;
    max-width: 1100px;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;
const modalDescWrapper = css`
  margin-bottom: 2rem;
`;

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
  button {
    appearance: none;
    background-color: hsl(10, 70%, 65%);
    border: none;
    margin-top: 2rem;
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    letter-spacing: 0.4rem;
    border-radius: 4px;
    ${mqLarge} {
      padding: 0.6rem;
      width: 80%;
    }
    :hover {
      background-color: hsl(12, 90%, 65%);
    }
    span {
      font-size: 1.2rem;
      color: white;
      /* display: inline-block; */
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
