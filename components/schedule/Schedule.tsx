import {
  Box,
  Divider,
  Flex,
  HStack,
  ListItem,
  Text,
  Tooltip,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import fullMatch from "../../data/full_matches.json";
import { convertTimeToLocalTime } from "../../utils/time";
import Carousel from "../carousel/Carousel";
import Responsive from "../highlightVideos/Slider";
import { useRouter } from "next/router";
import TeamImage from "../Team";
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
  };
  live: string[];
};
const Schedule = ({ data, live }: liveSchedule) => {
  console.log(data, "hello from schedule");

  const router = useRouter();

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        bg={"black"}
        borderRadius="20px"
        p={2}
        color={"white"}
        my="2"
        ml={3}
        mb={10}
        onClick={() => {
          router.push(`/live`);
        }}
      >
        <Flex
          direction={"row"}
          py={2}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"nowrap"}
        >
          <Text
            color={live?.includes(data.name) ? "red" : "blue.500"}
            fontWeight="bold"
            className="blink"
          >
            {live?.includes(data.name) ? "Live" : "Next Match"}
          </Text>
          <UnorderedList
            display={"inline-flex"}
            color="gray.400"
            gap="6"
            fontSize={{ base: "sm", md: "sm", lg: "md" }}
          >
            <ListItem>Group {data.group}</ListItem>
            <ListItem>FIFA 2022</ListItem>
            <Tooltip label={data.location}>
              <ListItem display={{ base: "none", md: "inline-block" }}>
                {data.location.substring(0, 6)}
              </ListItem>
            </Tooltip>
          </UnorderedList>
        </Flex>
        <Box display={"flex"} px="2" width={"100%"} mt="2">
          <VStack alignItems={"start"}>
            <HStack alignItems={"center"}>
              <TeamImage name={data.team1} />
              <Text fontWeight={500} fontSize="md">
                {data.team1}
              </Text>
            </HStack>
            <HStack alignItems={"center"}>
              <TeamImage name={data.team2} />
              <Text fontWeight={500} fontSize="md">
                {data.team2}
              </Text>
            </HStack>
          </VStack>
          <VStack alignItems={"start"} ml="auto">
            <VStack alignItems={"end"} gap="2">
              <Text fontWeight={"hairline"} fontSize="lg">
                {convertTimeToLocalTime(data.time).substring(0, 9)}
              </Text>
              <Text fontWeight={"hairline"} fontSize="md">
                {data.date}
              </Text>
            </VStack>
          </VStack>
        </Box>
        {/* <Text color={"gray.400"} fontWeight="hairline" fontSize={"12px"}>
          Match start in <strong>2</strong> hrs and <strong>30</strong> mins
        </Text> */}
      </Box>
    </>
  );
};

export default Schedule;
