import HeroSection from "@components/views/home/HeroSection";
import ProductSection from "@components/views/home/ProductSection";
import VideoSection from "@components/views/home/VideoSection";
import ServiceSection from "@components/views/home/ServiceSection";
import Layout from "components/layout/Layout";
import { seoData } from "@constants/seo";

const HomePage = () => {
  const { title, description, jsonLd } = seoData.home;
  
  return (
    <Layout 
      pageTitle={title}
      pageDescription={description}
      jsonLd={jsonLd}
    >
      <HeroSection />
      <ServiceSection />
      <ProductSection />
      <VideoSection />
    </Layout>
  );
};

export default HomePage;
