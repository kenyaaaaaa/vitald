import Layout from "@components/layout/Layout";
import Video from "@components/views/video/Video";
import { seoData } from "@constants/seo";

const VideoPage = () => {
  const { title, description, jsonLd } = seoData.video;
  
  return (
    <Layout 
      pageTitle={title}
      pageDescription={description}
      jsonLd={jsonLd}
    >
      <Video />
    </Layout>
  );
};

export default VideoPage;
