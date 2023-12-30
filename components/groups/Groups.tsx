import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Responsive from "../highlightVideos/Slider";
import { GroupsDivison } from "../../models/groupModel";
import TeamImage from "../Team";

const Groups = ({ data }: GroupsDivison) => {
  return (
    <Responsive slideToShow={1} slideInMid={1}>
      {data.map((group, index) => {
        return (
          <Box
            bg={"#EDEEE4"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
            borderRadius="100px 10px "
            py={{ base: 5, md: 10 }}
            key={index}
          >
            <Text
              color={"#8B1638"}
              fontSize="2xl"
              textAlign="center"
              fontWeight="bold"
            >
              Group {group.group}
            </Text>
            <Divider
              orientation="horizontal"
              borderColor={"#8B1638"}
              borderWidth="1px"
              my={2}
            />

            {group.teams.map((item, index) => {
              return (
                <VStack align={"start"} px="4" key={index}>
                  <HStack
                    key={index}
                    cursor="pointer"
                    _hover={{
                      bg: "twitter.100",
                      borderRadius: "10px",
                      p: "2",
                    }}
                  >
                    {/* <Text
                      color={"#881635"}
                      fontSize="2xl"
                      fontWeight={"semibold"}
                      fontFamily="fantasy"
                      letterSpacing={2}
                    >
                      {item.placement}
                    </Text> */}
                    {/* <Image src={item.flagImage} alt="teamFlag" width={"40"} height={"30"} /> */}
                    <br />
                    <br />
                    <TeamImage name={item.name} />
                    <Text
                      color={"#881635"}
                      fontSize="2xl"
                      fontWeight={"semibold"}
                      fontFamily="fantasy"
                      letterSpacing={2}
                    >
                      {item.name}
                    </Text>
                  </HStack>
                </VStack>
              );
            })}
          </Box>
        );
      })}
    </Responsive>
  );
};

export default Groups;
