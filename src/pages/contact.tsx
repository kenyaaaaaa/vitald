import Layout from "@components/layout/Layout";
import Contact from "@components/views/contact/Contact";
import { seoData } from "@constants/seo";

const ContactPage = () => {
  const { title, description, jsonLd } = seoData.contact;
  
  return (
    <Layout 
      pageTitle={title}
      pageDescription={description}
      showContactInfo={false}
      jsonLd={jsonLd}
    >
      <Contact />
    </Layout>
  );
};

export default ContactPage;


