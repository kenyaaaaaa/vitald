import Logo from "./Logo";
import Image from "next/image";
import { css, keyframes } from "@emotion/react";
import { mqLarge } from "../../components/utils/style";

const MobileNav = ({ isBurgerOpen }: { isBurgerOpen: boolean }) => {
  return (
    <nav css={[nav, isBurgerOpen ? active : ""]}>
      <Logo isScrolledY={undefined} bgColor={undefined} color={"black"} />
      <ul>
        <li>
          <a href="">
            <div css={iconWrapper}>
              <Image src="/icons/gear.png" width="26px" height="26px" />
            </div>
            業務内容
          </a>
        </li>
        <li>
          <a href="">
            <div css={iconWrapper}>
              <Image src="/icons/robotic-hand.png" width="26px" height="26px" />
            </div>
            製作実績
          </a>
        </li>
        <li>
          <a href="">
            <div css={iconWrapper}>
              <Image src="/icons/building.png" width="26px" height="26px" />
            </div>
            会社情報
          </a>
        </li>
        <li>
          <a href="">
            <div css={iconWrapper}>
              <Image src="/icons/conversation.png" width="26px" height="26px" />
            </div>
            よくある質問
          </a>
        </li>
        <li>
          <a href="">
            <div css={iconWrapper}>
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
  ${mqLarge} {
    display: none;
  }
  opacity: 0;
  width: 100%;
  position: fixed;
  ul {
    padding-top: 7.5rem;
    background-color: hsla(35, 20%, 90%, 1);
    background-color: hsla(0, 0%, 95%, 1);

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
