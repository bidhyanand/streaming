import Head from "next/head";
import announcementData from "../data/announcement.json";
import Announcement from "../components/header/Announcement";
import Container from "../container/Container";
import HighlightVideos from "../components/highlightVideos/HighlightCarousel";
import { Box, Flex } from "@chakra-ui/react";
import Live from "../components/live/Live";
import Schedule from "../components/schedule/Schedule";
import fullMatchesSchedule from "../data/full_matches.json";
import sortedByDate from "../data/sorted_by_date.json";
import byDate from "../data/sorted_by_date.json";
import Responsive from "../components/highlightVideos/Slider";
import axios from "axios";
interface Iprops {
  liveData: string[];
}
export async function getServerSideProps() {
  const apiData = await axios.get(
    "https://5btghpauxwjsssigdg4hhe7ujm0kigjw.lambda-url.us-east-2.on.aws/?type=live"
  );
  const data = apiData.data;
  return {
    props: {
      liveData: data.data,
    },
  };
}
const Home = ({ liveData }: Iprops) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });
  const date = currentDate.split(" ");
  const newDate = date[1] + " " + date[0];
  let filteredData = sortedByDate.filter((item) => item.date === newDate);

  if (filteredData.length === 0) {
    let newFilteredData = sortedByDate.filter((item) => item.date > newDate);
    filteredData = newFilteredData.slice(0, 4);
  }

  return (
    <div>
      <Head>
        <title>
          Fifa Worldcup Stream 2022 (Watch Fifa worldcup stream for free)
        </title>
        <meta
          name="description"
          content={`Watch the world&apos;s biggest soccer tournament in the comfort of your own home.
          Watch and enjoy the FIFA 2018 World Cup live stream on your pc or mac.
          World cup streaming is the main source of entertainment of millions of fans. for you, we provide the live streaming of world cup 2014 across the world. fifa, watch fifa worldcup 2022 . watch live football games. watch online fifa stream. fifa worldcup. fifa live stream. qatar worldcup. qatar worldcup stream live watch online. how to watch fifa worldcup  online. watch worldcup for free. free worldcup live. live worldcup free. free stream. free watch football game. football game watch live. Watch fifa worldcup stream live 2022. Watch qatar worldcup for free from fifastream.live . Free worldcup watch. How to watch fifa worldcup for free. Watch fifa worldcup
          `}
        />
        <meta
          name="keywords"
          content="fifa worldcup, watch worldcup steram, fifa live, watch football live, fifa stream, watch fifa live, watch football live stream, live stream , fifa 2022 live, watch fifa live"
        />
      </Head>
      <Box ml={{ base: 2, md: 10 }}>
        <Responsive slideToShow={3} slideInMid={2}>
          {filteredData.map((item, index) => (
            <Schedule key={index} data={item} live={liveData} />
          ))}
        </Responsive>
      </Box>
      <Box mx={{ md: 10, base: 5 }}>
        <Announcement data={announcementData.annoucement} />
      </Box>
      <Live live={liveData} data={byDate} />
      <Box mx={{ md: 10, base: 5 }}>
        <Container />
        <HighlightVideos />
      </Box>
      <br />
      <br />
      <br />
      <br />
      <small>
        fifa, watch fifa worldcup 2022 . watch live football games. watch online
        fifa stream. fifa worldcup. fifa live stream. qatar worldcup. qatar
        worldcup stream live watch online. how to watch fifa worldcup online.
        watch worldcup for free. free worldcup live. live worldcup free. free
        stream. free watch football game. football game watch live. Watch fifa
        worldcup stream live 2022. Watch qatar worldcup for free from
        fifastream.live . Free worldcup watch. How to watch fifa worldcup for
        free. Watch fifa worldcup. Fifa Live. Worldcup live stream. Watch the
        world&apos;s biggest soccer tournament in the comfort of your own home.
        Watch and enjoy the FIFA 2018 World Cup live stream on your pc or mac.
        World cup streaming is the main source of entertainment of millions of
        fans. for you, we provide the live streaming of world cup 2014 across
        the world. fifa, watch fifa worldcup 2022 . watch live football games.
        watch online fifa stream. fifa worldcup. fifa live stream. qatar
        worldcup. qatar worldcup stream live watch online. how to watch fifa
        worldcup online. watch worldcup for free. free worldcup live. live
        worldcup free. free stream. free watch football game. football game
        watch live. Watch fifa worldcup stream live 2022. Watch qatar worldcup
        for free from fifastream.live . Free worldcup watch. How to watch fifa
        worldcup for free. Watch fifa worldcup Fifa Live. Worldcup live stream.
        Watch the world&apos;s biggest soccer tournament in the comfort of your
        own home. Watch and enjoy the FIFA 2018 World Cup live stream on your pc
        or mac. World cup streaming is the main source of entertainment of
        millions of fans. for you, we provide the live streaming of world cup
        2014 across the world. fifa, watch fifa worldcup 2022 . watch live
        football games. watch online fifa stream. fifa worldcup. fifa live
        stream. qatar worldcup. qatar worldcup stream live watch online. how to
        watch fifa worldcup online. watch worldcup for free. free worldcup live.
        live worldcup free. free stream. free watch football game. football game
        watch live. Watch fifa worldcup stream live 2022. Watch qatar worldcup
        for free from fifastream.live . Free worldcup watch. How to watch fifa
        worldcup for free. Watch fifa worldcup Fifa Live. Worldcup live stream.
        Watch the world&apos;s biggest soccer tournament in the comfort of your
        own home. Watch and enjoy the FIFA 2018 World Cup live stream on your pc
        or mac. World cup streaming is the main source of entertainment of
        millions of fans. for you, we provide the live streaming of world cup
        2014 across the world. fifa, watch fifa worldcup 2022 . watch live
        football games. watch online fifa stream. fifa worldcup. fifa live
        stream. qatar worldcup. qatar worldcup stream live watch online. how to
        watch fifa worldcup online. watch worldcup for free. free worldcup live.
        live worldcup free. free stream. free watch football game. football game
        watch live. Watch fifa worldcup stream live 2022. Watch qatar worldcup
        for free from fifastream.live . Free worldcup watch. How to watch fifa
        worldcup for free. Watch fifa worldcup
      </small>
    </div>
  );
};

export default Home;
