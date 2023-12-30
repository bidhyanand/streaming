import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import StandingTable from "../components/standingTables/StandingTable";
import standingsData from "../data/standings.json";
const standings = () => {
  return (
    <Box px="10">
      <Head>
        <title> WORLDCUP LIVEM | STANDING </title>
        <meta name="description" content="World cup 2022 standing " />
      </Head>
      <StandingTable data={standingsData} />
    </Box>
  );
};

export default standings;
