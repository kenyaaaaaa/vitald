import Layout from "@components/layout/Layout";
import Contact from "@components/views/contact/Contact";

const ContactPage = () => {
  return (
    <Layout showContactInfo={false}>
      <Contact />
    </Layout>
  );
};

export default ContactPage;


