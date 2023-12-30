import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { GoPrimitiveDot } from "react-icons/go";
interface Iprops{
  videoUrl? : string,
  title? : string,
  description? : string
}
const  HighlightDesign = ({videoUrl, title, description}  : Iprops) =>{
  return (
    <Center py={6}>
      <Box
        mx={2}
        // maxW={"300px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box h={"120px"} w={"full"}>
          <div>
            <iframe
              width="100%"
              src= { videoUrl || "https://www.youtube-nocookie.com/embed/FMrtSHAAPhM"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </Box>

        <Box px={2} py={6} mt="5">
          <Stack spacing={0} align={"start"}>
            <HStack fontSize={"lg"}>
              <Text>
                <GoPrimitiveDot />
              </Text>
              <Text>{title || "Match x"}</Text>
            </HStack>
            <Text fontSize={"lg"} fontWeight={"semibold"} px={2} pt={"3"}>
             {description || "Team 1 vs Team 2"}
            </Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}

export default HighlightDesign