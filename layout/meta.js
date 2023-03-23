import Head from "next/head";

export default function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Simon Hemrom | Portfolio",
  keywords: "portfolio, resume, biodata",
  description:
    "Latest web developer online resume, biodata, and portfolio web page",
};
