import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/1.webp";
import schedule from "../data/full_matches.json";
import Head from "next/head";
import CountDown from "../components/countdown/CountDown";
import TableDesign from "../components/tableDesign/TableDesign";
import Calendar from "../components/calendar/Calendar";
import Responsive from "../components/highlightVideos/Slider";
import calendarData from "../data/date.json";
import ScheduleByDate from "../components/schedule/ScheduleByDate";
import { useCookies } from "react-cookie";

const Schedule = () => {
  // to get data from cookies
  const [cookies, setCookie] = useCookies();
  const [cookieState, setCookieState] = useState("");

  useEffect(() => {
    const dateFromCookies = cookies["date"];
    setCookieState(dateFromCookies);
  }, [cookies]);

  // to get the data from json file that matches dateFromCookies
  let filteredData = schedule.matches.groupStage.filter(
    (item) => item.date === cookieState
  );

  return (
    <div>
      <Head>
        <title>WORLDCUP LIVEM | SCHEDULE</title>
        <meta name="description" content="Schedule for world cup 2022" />
      </Head>
      <Box display={"flex"}>
        <Box display={{ base: "none", md: "inline-block" }}>
          <Image src={logo} alt="logo" />
        </Box>
        <div>
          <Text
            textAlign={"center"}
            fontFamily={"fantasy"}
            fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
            py={10}
          >
            Schedule World Cup 2022 (QATAR)
          </Text>
          <CountDown />
        </div>
        <Box display={{ base: "none", md: "inline-block" }}>
          <Image src={logo} alt="logo" />
        </Box>
      </Box>
      <br />
      <Box px="10">
        <Responsive slideToShow={12} minShow={2} showDot={false}>
          {calendarData.calendar.map((item, index) => (
            <Calendar data={item} key={index} />
          ))}
        </Responsive>
        <br />
        <br />
        {filteredData.length > 0 ? (
          <ScheduleByDate dataByDate={filteredData} />
        ) : (
          <>
            <TableDesign
              data={schedule.matches.roundOf16}
              title="Round of 16"
            />
            <TableDesign
              data={schedule.matches.quarterfinal}
              title="Quater Final"
            />
            <TableDesign data={schedule.matches.final} title="Final" />;
          </>
        )}
      </Box>
    </div>
  );
};

export default Schedule;
