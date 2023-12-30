import {
  Box,
  Center,
  Flex,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import Argentina from "../../assets/country/arg.png";
import Brazil from "../../assets/country/brasil.png";
import fifa from "../../assets//logo/trophy.png";
import Image from "next/image";
import TeamImage from "../Team";
import { convertTimeToLocalTime } from "../../utils/time";
import CountDown from "../countdown/CountDown";
import dynamic from "next/dynamic";
import md5 from "md5";
import { useEffect, useRef, useState } from "react";
import {
  FaExpand,
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

import { isIOS, isMobile } from "react-device-detect";
// import ReactHlsPlayer from "@gumlet/react-hls-player";

// const ReactHlsPlayer = dynamic(() => import("@gumlet/react-hls-player"), {
//   ssr: false,
// });

const FlvNextPlayer = dynamic(() => import("../flv/Flv"), {
  ssr: false,
});
type clickedDataProps = {
  data: {
    date: string;
    team1: string;
    match: string;
    team2: string;
    group?: string;
    time: any;
    name: string;
    location: string;
  };
  isLive?: boolean;
  isOpen?: boolean;
};

const LiveDetail = ({ data, isLive, isOpen }: clickedDataProps) => {
  let sign;
  let ext = Date.now() + 30000;
  let key = md5(`/livestream/${data.name}-${ext}-helloPrivate`);
  sign = `?sign=${ext}-${key}`;
  const [type, setType] = useState("pause");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePause = () => {
    setType("pause");
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setType("play");
    setIsPlaying(true);
  };
  const handleUnmute = () => {
    setIsMuted(false);
  };
  const handleMute = () => {
    setIsMuted(true);
  };

  const vRef = useRef<any>(null);

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      vRef?.current?.requestFullscreen();
    }
  };

  return (
    <>
      <Box
        bg={"#F2F2F2"}
        boxShadow="lg"
        py={4}
        borderBottom="4px solid black "
        borderBottomRadius={10}
      >
        <Flex gap={6} px="2">
          <Box bg="twitter.400" borderRadius={"full"}>
            <Image src={fifa} alt="Fifa" width="50" height="45" />
          </Box>
          <Stack spacing="0" align={"start"}>
            <Text color={"black"} fontWeight="bold">
              FIFA World Cup 2022
            </Text>
            <Text>{data.date} </Text>
          </Stack>
        </Flex>
        <Flex
          justify={"space-between"}
          align={"center"}
          my="6"
          px={{ md: 32, base: 5 }}
        >
          <VStack>
            {/* <Image src={Argentina} alt="Argentina" width="50" height="30" /> */}
            <TeamImage name={data.team1} />
            <Text>{data.team1}</Text>
          </VStack>
          <Text> {convertTimeToLocalTime(data.time)?.substring(0, 9)} </Text>
          <VStack>
            {/* <Image src={Brazil} alt="Argentina" width="50" height="30" /> */}
            <TeamImage name={data.team2} />
            <Text>{data.team2}</Text>
          </VStack>
        </Flex>
        <Center>
          <Text fontWeight={"500"} fontSize="md">
            Live Stream
          </Text>
        </Center>
      </Box>
      <Box bg={"#F2F2F2"} boxShadow="lg" my={4} py="6">
        <Flex flexDir={"column"} px="4" gap={4}>
          <Text
            color={"black"}
            fontWeight="500"
            display={{ base: "none", md: "flex" }}
          >
            WORLDCUP LIVE {data.team1} vs {data.team2} Live
          </Text>
          <Stack spacing={0} mb="6" gap={2}>
            <Text
              color={"black"}
              fontSize={{ base: "md", MD: "lg" }}
              fontWeight="bold"
              display={{ base: "none", md: "flex" }}
            >
              {data.team1} vs {data.team2} Live Streaming Links
            </Text>
            <Text
              color={"black"}
              fontWeight="hairline"
              fontSize={{ base: "xs", md: "sm" }}
            >
              WORLDCUP LIVEM will be providing a free live stream of the match.
              You can access the live stream by clicking on the links below.
            </Text>
          </Stack>

          {isLive ? (
            <>
              We are live.
              <br />
              {isIOS ? (
                <>
                Not supported on iOS for now.
                </>
                // <ReactHlsPlayer
                //   playerRef={vRef}
                //   src={`https://stream.fifastream.live/livestream/${data.name}/index.m3u8${sign}`}
                //   autoPlay={false}
                //   controls={true}
                //   width="100%"
                //   height="auto"
                // />
              ) : (
                <>
                  <div className="video_full" ref={vRef}>
                    <div
                      className="yvideo"
                      style={{
                        height: document.fullscreenElement ? "100vh" : "100%",
                      }}
                      onClick={isPlaying ? handlePause : handlePlay}
                    >
                      <FlvNextPlayer
                        url={`wss://stream.fifastream.live/livestream/${
                          isIOS ? `${data.name}/index.m3u8` : `${data.name}.flv`
                        }${sign}`}
                        isMuted={isMuted}
                        isLive={true}
                        // showControls={true}
                        enableStashBuffer={true}
                        type={type}
                      />
                    </div>
                    {!isPlaying && (
                      <Box
                        position={"absolute"}
                        right={"30%"}
                        top={"45%"}
                        zIndex={9999999}
                      >
                        <button onClick={handlePlay}>
                          {isMobile ? (
                            // <FaPlay
                            // 	size={150}
                            // 	color="teal"
                            // />
                            ""
                          ) : (
                            <FaPlay size={300} color="teal" />
                          )}
                        </button>
                      </Box>
                    )}
                    <div className="control_background">
                      <button onClick={isPlaying ? handlePause : handlePlay}>
                        {isPlaying ? (
                          <FaPause size={30} color="white" />
                        ) : (
                          <FaPlay size={30} color="white" />
                        )}
                      </button>
                      <div>
                        <button onClick={isMuted ? handleUnmute : handleMute}>
                          {isMuted ? (
                            <FaVolumeMute size={30} color="white" />
                          ) : (
                            <FaVolumeUp size={30} color="white" />
                          )}
                        </button>
                        <button
                          style={{ marginLeft: 50 }}
                          onClick={handleFullscreen}
                        >
                          <FaExpand size={30} color="white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {/* exitFullscreen */}
              {/* <button onClick={handlePause}>pause</button> */}
              {/* <button onClick={handlePlay}>play</button> */}
              {/* <button onClick={handleFullscreen}>fullscreen</button> */}
              {/* <button onclick="rewind(event)"><i class="fa fa-fast-backward"></i></button> */}
              {/* <div class="timeline">
                <div class="bar">
                    <div class="inner"></div>
                </div>
            </div> */}
              {/* <button onclick="forward(event)"><i class="fa fa-fast-forward"></i></button> */}
              {/* <button onclick="fullScreen(event)"><i class="fa fa-expand"></i></button> */}
              {/* <button onclick="download(event)"><i class="fa fa-cloud-download"></i></button> */}
            </>
          ) : (
            <Center>
              <VStack>
                <Text fontSize={"lg"} fontWeight="550" letterSpacing={"2"}>
                  Remaining Time
                </Text>
                <Text>
                  <CountDown
                    time={`${new Date().getFullYear()} ${
                      data.date
                    } ${convertTimeToLocalTime(data.time)}`}
                  />
                </Text>
              </VStack>
            </Center>
          )}

          <Stack spacing={2}>
            <Text color={"black"} fontSize="lg" fontWeight="bold">
              Start {data.date} &{" "}
              {convertTimeToLocalTime(data.time).substring(0, 9)}
            </Text>
            <Text color={"black"} fontWeight="hairline">
              {data.date} 2022,{" "}
              {convertTimeToLocalTime(data.time).substring(0, 9)}
            </Text>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default LiveDetail;
