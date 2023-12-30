import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Stack,
  Tag,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { imageUrl } from "../../data";
import { convertDateToLocaleDate, convertTimeToLocalTime } from "../../utils/time";
import LiveDetail from "../liveDetail/LiveDetail";
import ModalDesign from "../modal/Modal";
import TeamImage from "../Team";
import { useRouter } from "next/router";

interface Props {
  toOpenModal: () => void;
  toCloseModal: () => void;
}

type liveSchedule = {
  data: {
    date: string;
    team1: string;
    match: string;
    team2: string;
    group?: string;
    time: any;
    location: string;
    name: string;
  }[];
  live: string[];
};
const currentDate = new Date().toLocaleDateString("en-US", {
  day: "numeric",
  month: "short",
});

const date = currentDate.split(" ");
const newDate = date[1] + " " + date[0];
console.log(newDate,"dxxxx new")

const Live = ({ data, live }: liveSchedule) => {
  // routing
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clickedData, setClickedData] = useState<any>(null);
  const [isClickedLive, setIsClickedLive] = useState(false);
  const ndate = new Date()
  let filteredData = data.filter((item) => {
    const converted = convertDateToLocaleDate(`${item.date} ${item.time}`)
    if(converted?.getMonth() === ndate.getMonth() && converted?.getDate() === ndate.getDate()){
      return item
    }
  });
  // data.filter((item) => {
  //   console.log(convertDateToLocaleDate(item.date), "dxxx")
  // });

  if (filteredData.length === 0) {
    let filteredData2 = data.filter((item) => item.date > newDate);
    filteredData = filteredData2.slice(0, 4);
  }

  const handleModalOpen = (item: any) => {
    if (!live.includes(item.name)) {
      onOpen();
      setClickedData(item);
      setIsClickedLive(live.includes(item.name));
    } else {
      router.push(`/watchlive?name=${item.name}`);
    }
  };

  return (
    <Box mx={{ base: "6", md: "10" }} my="2">
      <Flex
        justify={"flex-start"}
        alignItems={"center"}
        gap={4}
        bg="#660E29"
        px="6"
      >
        <Box
          bg={"#7F1431"}
          borderRadius="full"
          display={{ base: "none", md: "inline-block" }}
        >
          {/* eslint-disable-next-line */}
          <img
            src={`${imageUrl}/image/trophy.png`}
            alt="Fifa trophy"
            style={{ width: 80, height: 80 }}
          />
        </Box>
        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          color="#7A7B9E"
          fontFamily="fantasy"
          fontWeight={"semibold"}
          letterSpacing="2px"
          py={{ base: 4, md: 0 }}
        >
          World Cup 2022 Live Matches
        </Text>
      </Flex>

      {filteredData.length > 0 ? (
        <>
          {filteredData.map((item, index) => {
            return (
              <>
                <Flex key={index} mb="4">
                  <Box bg={"#F0F0F5"} p="2" width={"100%"}>
                    <Stack spacing={0}>
                      <Text color={"#6D8CCA"}>{convertDateToLocaleDate(`${item.date} ${item.time}`).toLocaleString("en-US", {
                        month : "short",
                        day : "numeric",
                        year : "numeric"
                      })}</Text>
                      {live.includes(item.name) ? (
                        <Text color={"red"} fontWeight="bold" className="blink">
                          Watch Live
                        </Text>
                      ) : (
                        <Text
                          color={"#6D8CCA"}
                          fontWeight="bold"
                          className="blink"
                        >
                          Upcoming Match
                        </Text>
                      )}
                    </Stack>
                  </Box>
                </Flex>
                <Box
                  pl={{ base: 5, md: 0 }}
                  bg={live?.includes(item.name) ? "red.100" : "white"}
                  borderWidth={1}
                  cursor="pointer"
                  onClick={() => handleModalOpen(item)}
                  _hover={{
                    bg: "#F8F8FA",
                  }}
                  mb={10}
                >
                  <Flex
                    justify={{ base: "space-around", md: "space-between" }}
                    gap={{ base: "2", md: "0" }}
                    p="2"
                    align={"center"}
                  >
                    <Text
                      color={"black"}
                      fontWeight="500"
                      fontSize={"sm"}
                      display={{
                        base: "none",
                        md: "block",
                      }}
                    >
                      Group {item.group}
                    </Text>
                    <Box
                      py={{ base: 4, md: 0 }}
                      display={"flex"}
                      alignItems="center"
                      flexDir="row"
                      gap={{
                        base: "4",
                        md: "6",
                        lg: "8",
                      }}
                      px="2"
                    >
                      <HStack
                        gap={{
                          base: "0",
                          md: "2",
                          lg: "4",
                        }}
                      >
                        {live?.includes(item.name) && (
                          <Tag
                            className="blink"
                            backgroundColor={"red.500"}
                            color={"white"}
                          >
                            Live
                          </Tag>
                        )}
                        <Text
                          color={"black"}
                          fontWeight="500"
                          fontSize={{
                            base: "md",
                            md: "md",
                          }}
                        >
                          {item.team1}
                        </Text>
                        <Box display={{ base: "none", md: "inline-block" }}>
                          <TeamImage name={item.team1} />
                        </Box>
                      </HStack>
                      <Stack direction={"column"} align="center" spacing={0}>
                        <Text
                          fontSize={"10px"}
                          fontWeight="500"
                          display={{
                            base: "none",
                            md: "block",
                          }}
                        >
                          NS
                        </Text>
                        <Badge
                          fontSize={{
                            base: "sm",
                            md: "sm",
                          }}
                          fontWeight="600"
                          color={"twitter.600"}
                        >
                          {convertTimeToLocalTime(item.time).substring(0, 9)}
                        </Badge>
                      </Stack>
                      <HStack gap={{ base: "0", md: "2" }}>
                        <Box display={{ base: "none", md: "inline-block" }}>
                          <TeamImage name={item.team2} />
                        </Box>
                        <Text
                          color={"black"}
                          fontWeight="500"
                          fontSize={{
                            base: "md",
                            md: "md",
                          }}
                        >
                          {item.team2}
                        </Text>
                        {live?.includes(item.name) && (
                          <Tag
                            className="blink"
                            backgroundColor={"red.500"}
                            color={"white"}
                          >
                            Live
                          </Tag>
                        )}
                      </HStack>
                    </Box>
                    <Button
                      display={{ base: "none", md: "inline-block" }}
                      fontSize={"sm"}
                      color="red.500"
                      cursor={"pointer"}
                      onClick={() => handleModalOpen(item)}
                      _hover={{
                        bg: "gray.300",
                      }}
                      height={{
                        base: "30px",
                        md: "40px",
                      }}
                      width={{
                        base: "40px",
                        md: "120px",
                      }}
                    >
                      <Text
                        fontSize={{
                          base: "xs",
                          md: "sm",
                        }}
                        _hover={{
                          transform: "scale(1.2)",
                          color: "red.600",
                        }}
                      >
                        {live?.includes(item.name) ? "Watch Live" : "Details"}
                      </Text>
                    </Button>
                  </Flex>
                </Box>
              </>
            );
          })}
        </>
      ) : null}

      {/* details modal */}
      <ModalDesign toOpenModal={isOpen} toCloseModal={onClose}>
        <LiveDetail isLive={isClickedLive} data={clickedData} />
      </ModalDesign>
    </Box>
  );
};

export default Live;
