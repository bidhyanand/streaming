import {
  Box,
  Divider,
  GridItem,
  HStack,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { StandingsProps } from "../../models/standingsModels";
import TeamImage from "../Team";



const StandingTable = ({ data }: StandingsProps) => {
  console.log(data, "hello from standing table");
  return (
    <Box
      // display="flex"
      // flexDirection="row"
      // // flexWrap={"wrap"}
      // width="100%"
    >
      <SimpleGrid columns={{base: 1, md : 2}}>
      {data.map((groups, index) => {
        return (
          <GridItem
          key={index}
          >
            <TableContainer
            borderRadius={"lg"}
            width={{ base: "100%", md: "100%", lg: "95%" }}
            m="4"
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
            }
          >
            <Table width={"100%"} bg="#5A0B26">
              <Thead key={index}>
                <Tr>
                  <Th color={"white"} fontSize="xs" fontWeight={"semibold"}>
                    Group {groups.group}
                  </Th>{" "}
                  <Th color={"white"} fontSize="xs" fontWeight={"semibold"}>
                    P
                  </Th>{" "}
                  <Th color={"white"} fontSize="xs" fontWeight={"semibold"}>
                    w
                  </Th>{" "}
                  <Th color={"white"} fontSize="xs" fontWeight={"semibold"}>
                    D
                  </Th>{" "}
                  <Th color={"white"} fontSize="xs" fontWeight={"semibold"}>
                    L
                  </Th>{" "}
                  <Th color={"white"} fontSize="xs" fontWeight={"semibold"}>
                    GF
                  </Th>{" "}
                  <Th color={"white"} fontSize="xs" fontWeight={"semibold"}>
                    GA
                  </Th>{" "}
                  <Th color={"white"} fontSize="xs" fontWeight={"semibold"}>
                    +/-
                  </Th>{" "}
                  <Th color={"white"} fontSize="xs" fontWeight={"semibold"}>
                    Pts
                  </Th>
                </Tr>
              </Thead>
              <Tbody bg={"white"}>
                {groups.teams.map((item, index) => {
                  console.log("standing table is", item);

                  return (
                    <Tr key={index}>
                      <Td>
                        <HStack
                          direction={"row"}
                          height="3"
                          width={"100%"}
                          align="center"
                        >
                          <Divider
                            orientation="vertical"
                            borderColor="green.400"
                            // if index is 0 and 1 then show green color else show red color
                            borderLeftColor={
                              index === 0 || index === 1
                                ? "green.400"
                                : "red.400"
                            }
                            borderLeftWidth="3px"
                            mr={2}
                          />
                          <TeamImage name={item.name} />

                          <Text fontWeight={"500"} fontSize="md">
                            {" "}
                            {item.name}{" "}
                          </Text>
                        </HStack>
                      </Td>
                      <Td fontWeight={"400"} fontSize="xs">
                      {item.matchesPoint}
                      </Td>
                      <Td fontWeight={"400"} fontSize="xs">
                        {item.won}
                      </Td>
                      <Td fontWeight={"400"} fontSize="xs">
                        {item.draw}
                      </Td>
                      <Td fontWeight={"400"} fontSize="xs">
                        {item.lost}
                      </Td>
                      <Td fontWeight={"400"} fontSize="xs">
                        {item.goalsFor}
                      </Td>
                      <Td fontWeight={"400"} fontSize="xs">
                        {item.goalsAgainst}
                      </Td>
                      <Td fontWeight={"400"} fontSize="xs">
                        {item.goalDifference}
                      </Td>
                      <Td fontWeight={"400"} fontSize="xs">
                        {item.points}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
          </GridItem>
        );
      })}
      </SimpleGrid>
    </Box>
  );
};

export default StandingTable;