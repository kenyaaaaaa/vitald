import Layout from "@components/layout/Layout";
import FAQ from "components/views/faq/FAQ";
import { seoData } from "@constants/seo";

const FAQPage = () => {
  const { title, description, jsonLd } = seoData.faq;
  
  return (
    <Layout 
      pageTitle={title}
      pageDescription={description}
      jsonLd={jsonLd}
    >
      <FAQ />
    </Layout>
  );
};

export default FAQPage;
