import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MediaQueries } from "@styles/mediaQueries";
import { navItems, NavItem } from "@constants/navItems";

const Footer = () => {
  const router = useRouter();
  const isContactPage = router.pathname === "/contact";
  return (
    <footer css={[footer, isContactPage ? paddingNarrow : paddingWide]}>
      <div css={container}>
        <div css={titleWrapper}>
          <h1>国際バイタルディバイス有限会社</h1>
          <span>Vital Device International</span>
        </div>
        <div css={wrapper}>
          <div>
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
          </div>
          <div>
            <dl>
              <dt>大阪本社</dt>
              <dd>〒537-0014</dd>
              <dd>大阪市東成区大今里西1-12-7-103</dd>
              <dt>東京オフィス</dt>
              <dd>〒108-0075</dd>
              <dd>東京都港区港南1-9-36 アレア品川13階 EO 801</dd>
            </dl>

            <div css={contact}>
              <p>Tel：06-6978-2299</p>
              <p>Mail：contact@vitald.net</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const paddingNarrow = css`
  padding-top: 7rem;
`;
const paddingWide = css`
  padding-top: 44rem;
  ${MediaQueries.DESKTOP} {
    padding-top: 26rem;
  }
`;

const footer = css`
  background-color: rgb(39, 37, 37);
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 5rem;
  color: white;
  h1 {
    font-family: "ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E",
      "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
    font-size: 1.9rem;
    font-weight: 200;
    text-align: center;
  }
  span {
    text-align: center;
    line-height: 0.8rem;
    display: block;
    font-size: 1rem;
    letter-spacing: 3px;
  }
  ul {
    font-size: 1.2rem;
    margin: 3rem 0;
    width: 100%;
  }
  li {
    padding: 1.2rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  dt {
    font-weight: bold;
    font-size: 1.2rem;
    margin: 2rem 0 0.5rem 0;
  }
  dd {
    font-size: 1.1rem;
  }
  p {
    font-size: 1.2rem;
  }
  ${MediaQueries.DESKTOP} {
    display: flex;
    justify-content: center;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-bottom: 5rem;
    ul {
      margin-right: 25rem;
      margin-top: 1rem;
    }
  }
`;

const contact = css`
  margin-top: 2rem;
`;

const container = css`
  ${MediaQueries.DESKTOP} {
    width: 1200px;
  }
`;
const titleWrapper = css`
  ${MediaQueries.DESKTOP} {
    display: inline-block;
    text-align: center;
  }
`;

const wrapper = css`
  ${MediaQueries.DESKTOP} {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

export default Footer;
