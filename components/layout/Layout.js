import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title = "Book Best Hotel for your Holiday" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
