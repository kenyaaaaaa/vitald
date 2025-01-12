import Layout from "@components/layout/Layout";
import Products from "@components/views/products/Products";
import { seoData } from "@constants/seo";

const ProductListPage = () => {
  const { title, description, jsonLd } = seoData.products;
  
  return (
    <Layout 
      pageTitle={title}
      pageDescription={description}
      jsonLd={jsonLd}
    >
      <Products />
    </Layout>
  );
};

export default ProductListPage;
