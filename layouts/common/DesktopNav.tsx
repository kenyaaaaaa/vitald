import { css, keyframes } from "@emotion/react";
import { mqLarge } from "../../components/utils/style";

type Props = {
  isScrolledY: boolean;
};

const DesktopNav = ({ isScrolledY }: Props) => {
  const borderColor = isScrolledY ? "black" : "white";
  return (
    <nav css={nav(borderColor)}>
      <ul>
        <li>
          <a href="">業務内容</a>
        </li>
        <li>
          <a href="">制作実績</a>
        </li>
        <li>
          <a href="">会社情報</a>
        </li>
        <li>
          <a href="">よくある質問</a>
        </li>
        <li>
          <a href="">お問い合わせ</a>
        </li>
      </ul>
    </nav>
  );
};

const nav = (borderColor: string = "white") => css`
  display: none;
  ${mqLarge} {
    display: block;
  }
  ul {
    display: flex;
    height: 100%;
    li {
      padding: 0 1.5rem;
      font-weight: bold;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      letter-spacing: 2.5px;
      a {
        position: relative;
        ::before {
          content: "";
          position: absolute;
          bottom: 0;
          background: ${borderColor};
          height: 1px;
          width: 100%;
          transform: scale(0, 1);
          transform-origin: right top;
          transition: transform 0.2s;
        }
        :hover::before {
          transform-origin: left top;
          transform: scale(1, 1);
        }
      }
      :last-child a {
        color: white;
        padding: 1rem 1.5rem;
        margin: 0 2rem 0 0.5rem;
        border-radius: 30px;
        background: linear-gradient(
          90deg,
          hsla(10, 70%, 65%) 0%,
          hsla(28, 70%, 65%) 100%
        );
        :hover {
          background: linear-gradient(
            90deg,
            hsla(10, 90%, 67%) 0%,
            hsla(28, 90%, 67%) 100%
          );
        }
        :hover::before {
          transform: scale(0, 0);
        }
      }
    }
  }
`;

export default DesktopNav;
