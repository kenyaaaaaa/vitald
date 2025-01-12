import Layout from "@components/layout/Layout";
import Service from "@components/views/service/Service";
import { seoData } from "@constants/seo";

const ServicePage = () => {
  const { title, description, jsonLd } = seoData.service;
  
  return (
    <Layout 
      pageTitle={title}
      pageDescription={description}
      jsonLd={jsonLd}
    >
      <Service />
    </Layout>
  );
};

export default ServicePage;
