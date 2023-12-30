import {
  GridItem,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NewsDesign from "../highlightedNews/NewsDesign";
import axios from "axios";

const NewsTab = () => {
  const [storeNewsData, setStoreNewsData] = useState([]);
  let response = async () => {
    let res = await axios({
      method: "GET",
      url: "https://5btghpauxwjsssigdg4hhe7ujm0kigjw.lambda-url.us-east-2.on.aws?type=fifa",
    });
    setStoreNewsData(res.data.data);
    // setLoading(false);
  };
  useEffect(() => {
    response();
  }, []);
  console.log(storeNewsData, "data is");
  return (
    <>
      <Tabs size={"lg"}>
        <TabList color={"white"} fontWeight="semibold" bg="#202124">
          <Tab>FIFA.COM</Tab>
          <Tab>Google</Tab>
          <Tab>Trending</Tab>
          <Tab>Popular</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* <NewsDesign data={newsData.news} /> */}
            <SimpleGrid columns={{ md: 2, base: 1, lg: 4 }} pl={{ base: 5 }}>
              {storeNewsData.map((items, index) => {
                return (
                  <GridItem key={index} cursor="pointer">
                    <NewsDesign data={items} />
                  </GridItem>
                );
              })}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <p>Coming soon .......</p>
          </TabPanel>
          <TabPanel>
            <p>Coming soon .......</p>
          </TabPanel>
          <TabPanel>
            <p>Coming soon .......</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default NewsTab;
