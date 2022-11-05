import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { mqLarge } from "../../const/Breakpoint";

type Props = {
  isHomeAndPageTop: boolean;
};

const Logo = ({ isHomeAndPageTop }: Props) => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <Link href="/">
      <a
        css={[
          logo,
          isHome && mobileBgBlue,
          isHomeAndPageTop ? desktopBgBlue : bgWhite,
        ]}
      >
        <h1>国際バイタルディバイス有限会社</h1>
        <p>Vital Device International</p>
      </a>
    </Link>
  );
};

const logo = css`
  display: inline-block;
  cursor: pointer;
  color: black;
  padding: 0.8rem 2rem 1.6rem;
  margin-top: 0.8rem;
  margin-left: 0.5rem;
  h1 {
    font-family: "ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E",
      "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
    font-size: 1.3rem;
    font-size: 1.6rem;
  }
  p {
    text-align: center;
    font-size: 8px;
    letter-spacing: 3px;
    line-height: 1;
  }

  ${mqLarge} {
    margin: 0.2rem 0;
    position: static;
    padding: 0.8rem 4rem 1.5rem;
    transition: 0.5s;
    h1 {
      font-size: 1.5rem;
      font-size: 1.7rem;
    }
    p {
      line-height: 0.8rem;
      font-size: 0.9rem;
      font-size: 1rem;
      letter-spacing: 3px;
    }
  }
`;

const mobileBgBlue = css`
  background-color: hsla(240, 70%, 20%, 0.8);
  color: white;
`;

const desktopBgBlue = css`
  ${mqLarge} {
    background-color: hsla(240, 70%, 20%, 0.8);
    color: white;
  }
`;
const bgWhite = css`
  ${mqLarge} {
    background-color: transparent;
    color: black;
  }
`;

export default Logo;
