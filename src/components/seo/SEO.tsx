import Head from "next/head";
import { useRouter } from 'next/router';
import { defaultTitle, defaultDescription, domain, baseJsonLd } from '../../constants/seo';

interface SEOProps {
  pageTitle?: string;
  pageDescription?: string;
  jsonLd?: Record<string, any>;
  noindex?: boolean;
}

const SEO = ({ 
  pageTitle, 
  pageDescription, 
  jsonLd,
  noindex 
}: SEOProps) => {
  const router = useRouter();
  
  // カスタムJSON-LDとベースを結合
  const finalJsonLd = jsonLd ? {
    ...baseJsonLd,
    ...jsonLd,
  } : baseJsonLd;

  return (
    <Head>
      <title>{pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle}</title>
      <meta 
        name="description" 
        content={pageDescription || defaultDescription}
      />
      <meta property="og:title" content={pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle} />
      <meta property="og:description" content={pageDescription || defaultDescription} />
      <meta property="og:url" content={`${domain}${router.asPath}`} />
      <meta name="robots" content={noindex ? "noindex" : "index,follow"} />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(finalJsonLd) }}
      />
    </Head>
  );
};

export default SEO; 