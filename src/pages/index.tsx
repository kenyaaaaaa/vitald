import HeroSection from "@components/views/home/HeroSection";
import ProductSection from "@components/views/home/ProductSection";
import VideoSection from "@components/views/home/VideoSection";
import { css } from "@emotion/react";
import ServiceSection from "@components/views/home/ServiceSection";
import Layout from "components/layout/Layout";

const HomePage = () => {

  return (
    <Layout>
      <HeroSection />
      <ServiceSection />
      <ProductSection />
      <VideoSection />
    </Layout>
  );
};
export default HomePage;
