import React from "react";
import Helmet from "react-helmet";

function SEO() {
  return (
    <Helmet>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="description" content="Hi! I'm Edgar a UI/UX Designer. I thrive in making usable, accessible, and desirable products - by analyzing the root
                cause, defining the needs, solving the right problem, and
                designing for the best experience."/>
      <meta name="theme-color" content="#ffffff" />
      <meta name="google-site-verification" content="82zI76PTd7szd1-fQDJ9rWe1gT6R5O1cVkax1bkF_BU" />
    </Helmet>
  );
}
