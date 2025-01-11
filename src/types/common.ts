export interface NavItem {
  name: string;
  path: string;
  iconPath: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: {
    list: string;
    detail: string;
  };
  category?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}
