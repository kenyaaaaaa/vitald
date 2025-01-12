import { productItems } from "./productItems";
import { FAQItems } from "./faqItems";

export const siteName = "国際バイタルディバイス";
export const domain = "https://vitald.co.jp";
export const defaultTitle = siteName;
export const defaultDescription = "自動機械の開発・製造・販売を行う国際バイタルディバイスの公式サイトです。";
export const baseJsonLd = {
  "@context": "https://schema.org"
};

type SinglePageSEO = {
    title: string;
    description: string;
    jsonLd?: Record<string, any>;
};

type ProductDetailSEO = {
  [pid: string]: SinglePageSEO;
};
  
type SEOData = {
    home: SinglePageSEO;
    company: SinglePageSEO;
    products: SinglePageSEO;
    faq: SinglePageSEO;
    contact: SinglePageSEO;
    service: SinglePageSEO;
    video: SinglePageSEO;
    productDetail: ProductDetailSEO;
  };

// 各ページのSEO情報
export const seoData: SEOData = {
  home: {
    title: "ホーム",
    description: "自動機械の開発・製造・販売を行う国際バイタルディバイスの公式サイトです。信頼の技術と品質で、お客様のニーズにお応えした製品をご提供します。",
    jsonLd: {
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://vitald.co.jp/#organization", 
          "name": siteName,
          "url": domain,
          "logo": "https://vitald.co.jp/images/logo.png",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "telephone": "06-6978-2299",
              "areaServed": "JP"
            }
          ]
          // "sameAs": ["SNSのURLなどあれば"]
        },
        {
          "@type": "WebSite",
          "@id": "https://vitald.co.jp/#website",
          "url": domain,
          "name": siteName,
          "publisher": {
            "@id": "https://vitald.co.jp/#organization"
          }
        }
      ]
    }
  },
  company: {
    title: "会社概要",
    description: "自動機械、試験装置、ロボットの設計・製作を行う国際バイタルディバイスの会社概要ページです。",
    jsonLd: {
      "@type": "AboutPage",
      "name": `会社概要 | ${siteName}`,
      "description": "動機械、試験装置、ロボットの設計・製作を行う国際バイタルディバイスの会社概要ページです。",
      "url": `${domain}/company`
    }
  },
  products: {
    title: "製作実績",
    description: "国際バイタルディバイスの製作実績ページです。自動機械、試験装置、ロボットなど、当社の製品をご紹介します。",
    jsonLd: {
      "@type": "ItemList",
      name: `製作実績 | ${siteName}`,
      description: "国際バイタルディバイスの製作実績ページです。自動機械、試験装置、ロボットなど、当社の製品をご紹介します",
      numberOfItems: productItems.length,
      itemListElement: productItems.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.title,
          description: product.brief,
          image: `/images/products/${product.imageUrl.list}`
        }
      }))
    }
  },
  faq: {
    title: "よくある質問",
    description: "国際バイタルディバイスに関するよくある質問とその回答をまとめています。",
    jsonLd: {
      "@type": "FAQPage",
      name: `よくある質問 | ${siteName}`,
      description: "国際バイタルディバイスに関するよくある質問とその回答をまとめています。",
      url: `${domain}/faq`,
      mainEntity: FAQItems.map(item => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
  },
  contact: {
    title: "お問い合わせ",
    description: "国際バイタルディバイスへのお問い合わせページです。製品やサービスに関するお問い合わせはこちらからお願いいたします。",
    jsonLd: {
      "@type": "ContactPage",
      name: `お問い合わせ | ${siteName}`,
      description: "国際バイタルディバイスへのお問い合わせページです。製品やサービスに関するお問い合わせはこちらからお願いいたします。",
      url: `${domain}/contact`
    }
  },
  service: {
    title: "事業内容",
    description: "自動機械の開発・製造・販売を行う国際バイタルディバイスの事業内容についてご紹介します。お客様のニーズに合わせた最適なソリューションをご提案いたします。",
    jsonLd: {
      "@type": "Service",
      name: `事業内容 | ${siteName}`,
      description: "自動機械の開発・製造・販売を行う国際バイタルディバイスの事業内容についてご紹介します。お客様のニーズに合わせた最適なソリューションをご提案いたします。"
    }
  },
  video: {
    title: "動画一覧",
    description: "国際バイタルディバイスの製品やサービスに関する動画コンテンツをご覧いただけます。",
    jsonLd: {
      "@type": "VideoGallery",
      name: `動画一覧 | ${siteName}`,
      description: "国際バイタルディバイスの製品やサービスに関する動画コンテンツをご覧いただけます。",
      url: `${domain}/video`
    }
  },
  productDetail: Object.fromEntries(
    productItems.map(product => [
      product.pid,
      {
        title: product.title,
        description: `${product.title}の製品詳細ページです。${product.description}`,
        jsonLd: {
          "@type": "Product",
          name: product.title,
          description: product.description,
          image: `/images/products/${product.imageUrl.detail}`,
          category: product.category,
          url: `${domain}/products/${product.pid}`
        }
      }
    ])
  )
}