import { Box } from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import Live from "../components/live/Live";
import fullMatch from "../data/full_matches.json"; 
import byDate from "../data/sorted_by_date.json";
// https://5btghpauxwjsssigdg4hhe7ujm0kigjw.lambda-url.us-east-2.on.aws/?type=live
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
const live = ({ liveData }: Iprops) => {
  return (
    <Box minH={"100vh"} height={"100%"}  >
      <Head>
        <title>
          {" "}
          (LIVE) Fifa Worldcup Stream 2022 (Watch Fifa worldcup stream for free)
        </title>
        <meta
          name="description"
          content={`Fifa Live. Worldcup live stream. Watch the world&apos;s biggest soccer tournament in the comfort of your own home.
          Watch and enjoy the FIFA 2018 World Cup live stream on your pc or mac.
          World cup streaming is the main source of entertainment of millions of fans. for you, we provide the live streaming of world cup 2014 across the world. fifa, watch fifa worldcup 2022 . watch live football games. watch online fifa stream. fifa worldcup. fifa live stream. qatar worldcup. qatar worldcup stream live watch online. how to watch fifa worldcup  online. watch worldcup for free. free worldcup live. live worldcup free. free stream. free watch football game. football game watch live. Watch fifa worldcup stream live 2022. Watch qatar worldcup for free from fifastream.live . Free worldcup watch. How to watch fifa worldcup for free. Watch fifa worldcup
          `}
        />
        <meta
          name="keywords"
          content="fifa worldcup, watch worldcup steram, fifa live, watch football live, fifa stream, watch fifa live, watch football live stream, live stream , fifa 2022 live, watch fifa live"
        />
      </Head>
      <Live live={liveData} data={byDate} />
      <small>
        Fifa Live. Worldcup live stream. Watch the world&apos;s biggest soccer
        tournament in the comfort of your own home. Watch and enjoy the FIFA
        2018 World Cup live stream on your pc or mac. World cup streaming is the
        main source of entertainment of millions of fans. for you, we provide
        the live streaming of world cup 2014 across the world. fifa, watch fifa
        worldcup 2022 . watch live football games. watch online fifa stream.
        fifa worldcup. fifa live stream. qatar worldcup. qatar worldcup stream
        live watch online. how to watch fifa worldcup online. watch worldcup for
        free. free worldcup live. live worldcup free. free stream. free watch
        football game. football game watch live. Watch fifa worldcup stream live
        2022. Watch qatar worldcup for free from fifastream.live . Free worldcup
        watch. How to watch fifa worldcup for free. Watch fifa worldcup Fifa
        Live. Worldcup live stream. Watch the world&apos;s biggest soccer
        tournament in the comfort of your own home. Watch and enjoy the FIFA
        2018 World Cup live stream on your pc or mac. World cup streaming is the
        main source of entertainment of millions of fans. for you, we provide
        the live streaming of world cup 2014 across the world. fifa, watch fifa
        worldcup 2022 . watch live football games. watch online fifa stream.
        fifa worldcup. fifa live stream. qatar worldcup. qatar worldcup stream
        live watch online. how to watch fifa worldcup online. watch worldcup for
        free. free worldcup live. live worldcup free. free stream. free watch
        football game. football game watch live. Watch fifa worldcup stream live
        2022. Watch qatar worldcup for free from fifastream.live . Free worldcup
        watch. How to watch fifa worldcup for free. Watch fifa worldcup Fifa
        Live. Worldcup live stream. Watch the world&apos;s biggest soccer
        tournament in the comfort of your own home. Watch and enjoy the FIFA
        2018 World Cup live stream on your pc or mac. World cup streaming is the
        main source of entertainment of millions of fans. for you, we provide
        the live streaming of world cup 2014 across the world. fifa, watch fifa
        worldcup 2022 . watch live football games. watch online fifa stream.
        fifa worldcup. fifa live stream. qatar worldcup. qatar worldcup stream
        live watch online. how to watch fifa worldcup online. watch worldcup for
        free. free worldcup live. live worldcup free. free stream. free watch
        football game. football game watch live. Watch fifa worldcup stream live
        2022. Watch qatar worldcup for free from fifastream.live . Free worldcup
        watch. How to watch fifa worldcup for free. Watch fifa worldcup Fifa
        Live. Worldcup live stream. Watch the world&apos;s biggest soccer
        tournament in the comfort of your own home. Watch and enjoy the FIFA
        2018 World Cup live stream on your pc or mac. World cup streaming is the
        main source of entertainment of millions of fans. for you, we provide
        the live streaming of world cup 2014 across the world. fifa, watch fifa
        worldcup 2022 . watch live football games. watch online fifa stream.
        fifa worldcup. fifa live stream. qatar worldcup. qatar worldcup stream
        live watch online. how to watch fifa worldcup online. watch worldcup for
        free. free worldcup live. live worldcup free. free stream. free watch
        football game. football game watch live. Watch fifa worldcup stream live
        2022. Watch qatar worldcup for free from fifastream.live . Free worldcup
        watch. How to watch fifa worldcup for free. Watch fifa worldcup Fifa
        Live. Worldcup live stream. Watch the world&apos;s biggest soccer
        tournament in the comfort of your own home. Watch and enjoy the FIFA
        2018 World Cup live stream on your pc or mac. World cup streaming is the
        main source of entertainment of millions of fans. for you, we provide
        the live streaming of world cup 2014 across the world. fifa, watch fifa
        worldcup 2022 . watch live football games. watch online fifa stream.
        fifa worldcup. fifa live stream. qatar worldcup. qatar worldcup stream
        live watch online. how to watch fifa worldcup online. watch worldcup for
        free. free worldcup live. live worldcup free. free stream. free watch
        football game. football game watch live. Watch fifa worldcup stream live
        2022. Watch qatar worldcup for free from fifastream.live . Free worldcup
        watch. How to watch fifa worldcup for free. Watch fifa worldcup
      </small>
    </Box>
  );
};

export default live;
