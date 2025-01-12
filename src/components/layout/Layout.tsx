import Header from "./Header";
import Footer from "./Footer";
import ContactInfo from "./ContactInfo";
import SEO from "../seo/SEO";
import { css } from "@emotion/react";

interface LayoutProps {
  children: React.ReactNode;
  showContactInfo?: boolean;
  pageTitle?: string;
  pageDescription?: string;
  jsonLd?: Record<string, any>;
  noindex?: boolean;
}

const Layout = ({
  children,
  showContactInfo = true,
  pageTitle,
  pageDescription,
  jsonLd,
  noindex,
}: LayoutProps) => {
  return (
    <div css={wrapper}>
      <SEO
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        jsonLd={jsonLd}
        noindex={noindex}
      />
      <div css={layoutStyle}>
        <Header />
        <main>
          {children}
          {showContactInfo && <ContactInfo />}
        </main>
        <Footer />
      </div>
    </div>
  );
};

// モバイルメニュー表示時のoverlayのため
const wrapper = css`
  position: relative;
`;

const layoutStyle = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
  }
`;

export default Layout;
