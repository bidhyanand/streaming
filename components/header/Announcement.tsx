import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import style from "../../styles/Announcement.module.css";
import Marquee from "react-fast-marquee";
import { Announce, AnnouncementModel } from "../../models/announcementModel";

const Announcement = ({ data }: Announce) => {
  return (
    <Marquee speed={60} gradient={false}>
      <Flex
        bg={"black"}
        w="100%"
        color={"white"}
        py="4"
        alignItems={"center"}
        fontSize="lg"
      >
        {data.map((item: AnnouncementModel) => (
          <Box key={item.id} className={style.announcement}>
            <span className={style.spanSecond}>{item.description}</span>
          </Box>
        ))}
      </Flex>
    </Marquee>
  );
};

export default Announcement;
