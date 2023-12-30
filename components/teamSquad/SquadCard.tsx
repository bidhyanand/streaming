import { Box, Divider, Flex, Text } from "@chakra-ui/react"
import Image from "next/image";
import Argentina from "../../assets/country/arg.png";
import Messi from '../../assets/logo/messi.png'

const SquadCard = () => {
  return (
    <Box height={"45vh"} border="2px solid orange" alignItems={"center"} bg="#EEEEE4" w={"15%"} borderRadius=" 49% 47% 50% 52% / 9% 8% 22% 22%" p="2" >
       <Box>
            <Box position={"relative"}>
            <Image src={Messi} alt="argentina"  />
          
            </Box>
            <Box position={"absolute"} mt="-14%" >
                <Image src={Argentina} alt="argentina" height={"25"} width="30" />
       
            </Box>
       </Box>
       <Flex flexDir={"column"} justify="center" justifyContent={"center"} align="center" >
                <Text fontWeight={"hairline"} fontSize="md" >Lionel</Text>
                <Text  fontWeight={"600"} fontSize="lg" letterSpacing={"2px"} >MESSI</Text>
                <Divider
                    orientation="horizontal"
                    borderColor="orange"
                    borderWidth={'1px'}
                    my="2"
                    w="80%"
                />
                <Text fontWeight={"400"} fontSize="sm" >FORWARD</Text>
       </Flex>
    </Box>
  )
}

export default SquadCard