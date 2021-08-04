import React from "react";
import Helmet from "react-helmet";

function SEO() {
  return (
    <Helmet>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      <link rel="icon" href="/logo.ico" type="image/x-icon" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Edgar Louis - UI/UX Designer" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta
        property="og:description"
        name="description"
        content="Designing your digital product to be more accessible, desirable, and usable. A pasionate builder and problem solver. Edgar Louis is a UI/UX designer based on Indonesia."
      />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:image" content="/preview.png" />
      <meta
        name="google-site-verification"
        content="82zI76PTd7szd1-fQDJ9rWe1gT6R5O1cVkax1bkF_BU"
      />
      <title>Edgar Louis - UI/UX Designer</title>
    </Helmet>
  );
}
