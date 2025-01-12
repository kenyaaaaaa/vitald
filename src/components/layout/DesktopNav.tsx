import { css } from "@emotion/react";
import Link from "next/link";
import { MediaQueries } from "@styles/mediaQueries";
import { navItems, NavItem } from "@constants/navItems";

type Props = {
  isHomeAndScrolledTop: boolean;
};

const DesktopNav = ({ isHomeAndScrolledTop }: Props) => {
  return (
    <nav css={nav(isHomeAndScrolledTop)}>
      <ul>
        {navItems.map((navItem: NavItem, index: number) => {
          return (
            <li key={index}>
              <Link href={navItem.path}>
                <a>{navItem.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const nav = (isHomeAndNotScrolledY: boolean) => css`
  display: none;
  ${MediaQueries.DESKTOP} {
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
          background: ${isHomeAndNotScrolledY ? "white" : "black"};
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
