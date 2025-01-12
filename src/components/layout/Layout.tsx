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
  noindex
}: LayoutProps) => {
  return (
    <>
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
        </main>
        {showContactInfo && <ContactInfo />}
        <Footer />
      </div>
    </>
  );
};

const layoutStyle = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
  }
`;

export default Layout;