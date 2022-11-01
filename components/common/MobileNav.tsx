import Logo from "./Logo";
import Image from "next/image";
import { css } from "@emotion/react";
import { mqLarge } from "../../utils/style";
import Link from "next/link";

const MobileNav = ({ isBurgerOpen }: { isBurgerOpen: boolean }) => {
  return (
    <nav css={[nav, isBurgerOpen ? active : ""]}>
      <Link href="/">
        <a href="/" css={logo}>
          <h1>国際バイタルディバイス有限会社</h1>
          <p>Vital Device International</p>
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/service">
            <a>
              <div css={iconWrapper}>
                <Image src="/icons/gear.png" width="26px" height="26px" />
              </div>
              事業内容
            </a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a>
              <div css={iconWrapper}>
                <Image
                  src="/icons/robotic-hand.png"
                  width="26px"
                  height="26px"
                />
              </div>
              製作実績
            </a>
          </Link>
        </li>
        <li>
          <Link href="/company">
            <a>
              <div css={iconWrapper}>
                <Image src="/icons/building.png" width="26px" height="26px" />
              </div>
              会社概要
            </a>
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <a>
              <div css={iconWrapper}>
                <Image
                  src="/icons/conversation.png"
                  width="26px"
                  height="26px"
                />
              </div>
              よくある質問
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>
              <div css={iconWrapper}>
                <Image src="/icons/email.png" width="26px" height="26px" />
              </div>
              お問い合わせ
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const logo = css`
  cursor: pointer;
  display: inline-block;
  padding: 1.6rem 2.5rem 1.6rem;
  border-bottom: 1px solid white;
  color: white;
  color: black;
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
`;
const nav = css`
  ${mqLarge} {
    display: none;
  }
  opacity: 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  visibility: hidden;
  background-color: hsla(0, 0%, 95%, 1);
  ul {
    text-align: center;
    li {
      display: flex;
      height: 5.6rem;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 1.3rem;
      border-bottom: 1px solid white;
      &:last-child {
        color: white;
        background: linear-gradient(
          90deg,
          hsla(10, 70%, 65%) 0%,
          hsla(28, 70%, 65%) 100%
        );
      }
      a {
        width: 100%;
        display: block;
        line-height: 5.6rem;
      }
    }
  }
`;

const iconWrapper = css`
  position: relative;
  display: inline;
  left: -0.7rem;
  top: 0.7rem;
`;

const active = css`
  z-index: 1000;
  visibility: visible;
  opacity: 1;
  // transition: .8s ease-out;
  // -webkit-transition: -webkit-transform all .2s;
`;
export default MobileNav;
