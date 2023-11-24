import Head from "next/head";
import React from "react";

const PageSEO = ({ title }) => {
  return (
    <>
      {title && (
        <Head>
          <title>Norlon — {title}</title>
          <meta name="title" content={`Norlon — ${title}`} />
          <meta
            name="description"
            content="Nolorn is a direct importer of fruits, vegetables, fruits, salads, mushrooms. Since 2008, and already more than 14 years, we have been delivering products to the homes of Ukrainians, restaurants, cafes and other partners."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:title" content={`Norlon — ${title}`} />
          <meta
            property="og:description"
            content="Nolorn is a direct importer of fruits, vegetables, fruits, salads, mushrooms. Since 2008, and already more than 14 years, we have been delivering products to the homes of Ukrainians, restaurants, cafes and other partners."
          />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="" />
          <meta property="twitter:url" content="" />
          <meta property="twitter:title" content={`Norlon — ${title}`} />
          <meta
            property="twitter:description"
            content="Nolorn is a direct importer of fruits, vegetables, fruits, salads, mushrooms. Since 2008, and already more than 14 years, we have been delivering products to the homes of Ukrainians, restaurants, cafes and other partners."
          />
          <meta property="twitter:image" content="" />
        </Head>
      )}
    </>
  );
};

export default PageSEO;
