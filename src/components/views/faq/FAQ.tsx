import { css } from "@emotion/react";
import { MediaQueries } from "@styles/mediaQueries";
import { FAQItems } from "@constants/faqItems";

const FAQ = () => {
  return (
    <>
      <div css={wrapper}>
        <div css={title}>
          <h1>よくある質問</h1>
          <p>FAQ</p>
        </div>
        <div css={container}>
          <div css={faqWrapper}>
            {FAQItems.map((faq, index) => {
              return (
                <div css={faqStyle} key={index}>
                  <div css={left}>
                    <span>Q.</span>
                  </div>
                  <div css={right}>
                    <div css={question}>
                      <p>{faq.question}</p>
                    </div>
                    <div css={answer}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const faqWrapper = css`
  margin: 3rem auto 0 auto;
  padding: 3rem 3rem;
  ${MediaQueries.DESKTOP} {
    padding: 8rem 0 8rem 0;
    margin: 4rem auto 0 auto;
    width: 900px;
  }
`;
const faqStyle = css`
  margin-bottom: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid hsl(0, 0%, 90%);
  display: flex;
  ${MediaQueries.DESKTOP} {
  }
`;
const left = css`
  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: hsl(0, 0%, 70%);
  }
  ${MediaQueries.DESKTOP} {
    span {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
`;
const right = css`
  margin-left: 1rem;
  ${MediaQueries.DESKTOP} {
    margin-left: 7rem;
  }
`;
const question = css`
  p {
    font-size: 1.4rem;
    font-weight: bold;
    display: inline-block;
  }
`;
const answer = css`
  p {
    margin-top: 1rem;
    font-size: 1.3rem;
    color: hsl(0, 0%, 40%);
  }
`;

const wrapper = css`
  background-color: whitesmoke;
  padding-bottom: 20rem;
  padding-top: 9rem;
  ${MediaQueries.DESKTOP} {
    padding-top: 11rem;
  }
`;
const container = css`
  background-color: white;
  ${MediaQueries.DESKTOP} {
    width: 90vw;
    box-shadow: 6px 6px 20px gainsboro;
  }
`;
const title = css`
  margin-left: 3rem;
  max-width: 1100px;

  p {
    font-size: 1rem;
    line-height: 0.8;
    letter-spacing: 2px;
  }
  ${MediaQueries.DESKTOP} {
    margin: 0 auto;
    h1 {
      /* font-size: 2.7rem; */
    }
    p {
      color: black;
      font-size: 1.2rem;
      text-align: left;
    }
  }
`;

export default FAQ;
