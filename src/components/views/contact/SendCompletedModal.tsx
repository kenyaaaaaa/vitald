import Link from "next/link";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { MediaQueries } from "styles/mediaQueries";

const SendCompletedModal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>お問い合わせありがとうございます。</h1>
      <div>
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
export default SendCompletedModal;
