import Logo from "./Logo";
import Image from "next/image";
import { css } from "@emotion/react";

const Navigation = ({ isBurgerOpen }: { isBurgerOpen: boolean }) => {
  // const classNames = clsx(styles.nav, { [styles.active]: isBurgerOpen });

  return (
    <nav css={[nav, isBurgerOpen ? active : ""]}>
      <Logo />
      <ul>
        <li>
          <a href="">
            <div css={iconWrap}>
              <Image src="/icons/gear.png" width="26px" height="26px" />
            </div>
            業務内容
          </a>
        </li>
        <li>
          <a href="">
            <div css={iconWrap}>
              <Image src="/icons/robotic-hand.png" width="26px" height="26px" />
            </div>
            製作実績
          </a>
        </li>
        <li>
          <a href="">
            <div css={iconWrap}>
              <Image src="/icons/building.png" width="26px" height="26px" />
            </div>
            会社情報
          </a>
        </li>
        <li>
          <a href="">
            <div css={iconWrap}>
              <Image src="/icons/conversation.png" width="26px" height="26px" />
            </div>
            よくある質問
          </a>
        </li>
        <li>
          <a href="">
            <div css={iconWrap}>
              <Image src="/icons/email.png" width="26px" height="26px" />
            </div>
            お問い合わせ
          </a>
        </li>
      </ul>
    </nav>
  );
};

const nav = css`
  visibility: hidden;
  opacity: 0;
  width: 100%;
  position: fixed;
  box-shadow: 1px 1px 20px dimgray;
  ul {
    padding-top: 8rem;
    background-color: #f2f0ed;
    text-align: center;
    li {
      display: flex;
      height: 5.7rem;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 1.4rem;
      border-bottom: 1px solid white;
      &:last-child {
        color: white;
        background: linear-gradient(90deg, #e57b65 0%, #e48967 50%);
      }
      a {
        width: 100%;
        display: block;
        line-height: 5.7rem;
      }
    }
  }
`;

const iconWrap = css`
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
export default Navigation;
