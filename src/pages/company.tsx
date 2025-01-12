import Layout from "@components/layout/Layout";
import Company from "@components/views/company/Company";
import { seoData } from "@constants/seo";

const CompanyPage = () => {
  const { title, description, jsonLd } = seoData.company;
  
  return (
    <Layout 
      pageTitle={title}
      pageDescription={description}
      jsonLd={jsonLd}
    >
      <Company />
    </Layout>
  );
};

export default CompanyPage;
