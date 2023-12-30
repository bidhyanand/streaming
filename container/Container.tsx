import {
  Box,
  Center,
  GridItem,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NewsDesign from "../components/highlightedNews/NewsDesign";
import Groups from "../components/groups/Groups";
import CountDown from "../components/countdown/CountDown";
import groupsDivison from "../data/group_stage.json";
import axios from "axios";

type dataProps = {
  props: {
    title: string;
    url: string;
    description: string;
    image: string;
    source: string;
  }[];
};

const Container = () => {
  const [storeNewsData, setStoreNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  let response = async () => {
    let res = await axios({
      method: "GET",
      url: "https://5btghpauxwjsssigdg4hhe7ujm0kigjw.lambda-url.us-east-2.on.aws?type=fifa",
    });
    setStoreNewsData(res.data.data.splice(0,6));
    setLoading(false);
  };
  useEffect(() => {
    response();
  }, []);

  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} my="4">
        <GridItem colSpan={2}>
          <Box mr={{ base: 0, md: 5 }} ml={{ base: 5, md: 0 }}>
            {loading ? (
              <Center mt={{ base: 0, md: 200 }}>
                <div className="loading">
                  <h2>Page is loading</h2>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Center>
            ) : (
              <SimpleGrid columns={{ md: 2, base: 1, lg: 3 }} >
                {storeNewsData.map((items, index) => {
                  return (
                    <GridItem key={index}  >
                      <NewsDesign data={items} />
                    </GridItem>
                  );
                })}
              </SimpleGrid>
            )}
          </Box>
        </GridItem>
        <GridItem colSpan={{ md: 2, lg: 1 }}>
          {/* <Box boxShadow={"lg"} borderRadius={"md"}>
            <Text
              fontSize={"4xl"}
              fontFamily={"Poppins"}
              fontWeight={"hairline"}
              border={"1px solid gray "}
              bg={"twitter.800"}
              p={5}
              textColor={"white"}
              alignItems={"center"}
              display={"flex"}
              justifyContent={"center"}
              letterSpacing={"6px"}
              borderTopRadius="lg"
            >
              CountDown
            </Text>
            <br />
            <CountDown />
            <br />
          </Box> */}
          <br />
          <Box boxShadow={"lg"} borderRadius={"md"}>
            <Text
              fontSize={"4xl"}
              fontFamily={"Poppins"}
              fontWeight={"hairline"}
              border={"1px solid gray "}
              bg={"twitter.800"}
              p={5}
              textColor={"white"}
              alignItems={"center"}
              display={"flex"}
              justifyContent={"center"}
              letterSpacing={"6px"}
              borderTopRadius="lg"
            >
              Group Divison
            </Text>
            <Box m={2}>
              <Groups data={groupsDivison} />
            </Box>
          </Box>
        </GridItem>
      </SimpleGrid>
    </div>
  );
};

export default Container;
