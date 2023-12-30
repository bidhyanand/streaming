import Head from "next/head";
import React, { useEffect, useState } from "react";
import NewsTab from "../components/news/NewsTab";

const news = () => {

  
  return (
    <>
      <Head>
        <title>WORLDCUP LIVEM | NEWS</title>
        <meta name="description" content="Here you can get the description" />
      </Head>
      <NewsTab  />
    </>
  );
};

export default news;
