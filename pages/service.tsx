import Header from "../components/common/Header";
import ContactInfo from "../components/common/ContactInfo";
import Footer from "../components/common/Footer";
import Head from "next/head";
import { css } from "@emotion/react";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Service from "../components/pages/service/Service";

const ServicePage: NextPageWithLayout = () => {
  return <Service />;
};

ServicePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>国際バイタルディバイス</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="noindex"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={wrapper}>
        <Header />
        <main>
          {page}
          <ContactInfo />
        </main>
        <Footer />
      </div>
    </>
  );
};

const wrapper = css`
  position: relative;
`;

export default ServicePage;
