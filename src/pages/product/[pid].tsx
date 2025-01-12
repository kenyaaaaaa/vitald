import Layout from "@components/layout/Layout";
import Product from "@components/views/product/Product";
import { useRouter } from "next/router";
import { seoData } from "@constants/seo";

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  
  const seo = typeof pid === 'string' ? seoData.productDetail[pid] : undefined;
  
  if (!seo) {
    return null;
  }

  return (
    <Layout 
      pageTitle={seo.title}
      pageDescription={seo.description}
      jsonLd={seo.jsonLd}
    >
      <Product />
    </Layout>
  );
};

export default ProductPage;
