import Head from "next/head";
import React from "react";
import Teams from "../components/teams/Teams";

const team = () => {
  return (
    <>
      <Head>
        <title>WORLDCUP LIVEM | TEAMS</title>
        <meta name="description" content="Streaming web app here" />
      </Head>
      <Teams />
    </>
  );
};

export default team;
