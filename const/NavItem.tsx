export type NavItem = {
  name: string;
  path: string;
  iconPath: string;
};

export const navItems: NavItem[] = [
  { name: "事業内容", path: "/service", iconPath: "/icons/gear.png" },
  { name: "制作実績", path: "/product", iconPath: "/icons/robotic-hand.png" },
  { name: "会社概要", path: "/company", iconPath: "/icons/building.png" },
  { name: "よくある質問", path: "/faq", iconPath: "/icons/conversation.png" },
  { name: "お問い合わせ", path: "/contact", iconPath: "/icons/email.png" },
];
