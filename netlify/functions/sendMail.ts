import { Handler } from "@netlify/functions";
import { createTransport } from "nodemailer";

const handler: Handler = async (event, context) => {
  if (!event.body) {
    return { statusCode: 500 };
  }
  const formInput = JSON.parse(event.body);
  const userName = formInput.name;
  const userCompany = formInput.company;
  const userDivision = formInput.division;
  const userMail = formInput.mail;
  const userTel = formInput.tel;
  const content = formInput.content;
  const userFrom = "国際バイタルディバイス有限会社 <contact@vitald.net>";
  const userSubject = "お問合せありがとうございます";
  const userText = `
${userName} 様

この度はお問合せいただき、誠にありがとうございます。
このメールはシステムからの自動返信メールです。
お問い合わせ内容につきましては、追って担当者よりご連絡させて頂きます。

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
お名前：　${userName}
貴社名：　${userCompany}
部署名：　${userDivision}
メールアドレス：　${userMail}
電話番号：　${userTel}
お問い合わせ内容：
${content}
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


1週間以上たってもメールでのご返信もしくは
お電話でのご連絡がない場合は
お問い合わせが届いていない可能性がございます。
その場合は恐れ入りますが、下記問い合わせ先に直接ご連絡ください。


―――――――――――――――――――――
国際バイタルディバイス有限会社
大阪本社：
〒537-0014
大阪市東成区大今里西1-12-7-103

東京オフィス：
〒108-0075
東京都港区港南1-9-36  アレア品川13階 EO 801

Tel：06-6978-2299
Mail：contact@vitald.net
―――――――――――――――――――――
  `;

  const transporter = createTransport({
    // host: "smtp.ethereal.email",
    service: "gmail",
    // port: 587,
    port: 465,
    auth: {
      user: "fromkenya.121@gmail.com",
      pass: "hkxdiqjutjszowzx",
    },
  });

  const toUser = await transporter.sendMail({
    from: `${userFrom}`,
    to: `${userMail}`,
    subject: `${userSubject}`,
    text: `${userText}`,
  });

  const adminMail = "fromkenya.121@gmail.com";
  const adminSubject = "サイトから問い合わせがありました！！！";
  const adminFrom = "【国際バイタルディバイス有限会社】HP";
  const adminText = `
お名前：　${userName}
貴社名：　${userCompany}
部署名：　${userDivision}
メールアドレス：　${userMail}
電話番号：　${userTel}
お問い合わせ内容：
${content}
`;

  const toAdmin = await transporter.sendMail({
    from: `${adminFrom}`,
    to: `${adminMail}`,
    subject: `${adminSubject}`,
    text: `${adminText}`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(event.body),
  };
};

export { handler };