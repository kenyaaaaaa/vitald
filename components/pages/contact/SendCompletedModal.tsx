import { useModal } from "react-hooks-use-modal";
import Link from "next/link";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { mqLarge } from "../../../const/Breakpoint";

const SendCompletedModal = () => {
  return (
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

      <Link href="/">
        <a>ホームに戻る・</a>
      </Link>
    </motion.div>
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

export default SendCompletedModal;
