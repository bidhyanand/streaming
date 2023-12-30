import {
  Center,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { fullMatches, matchesDivision } from "../../models/fullMatches";
import { convertTimeToLocalTime } from "../../utils/time";

interface TableDesignProps {
  data: fullMatches[];
  title?: string;
}

const TableDesign = ({ data, title }: TableDesignProps) => {
  return (
    <>
      <Center my={2}>
        <Text
          fontWeight={"hairline"}
          color="#8A1538"
          fontFamily={"fantasy"}
          fontSize={"4xl"}
          letterSpacing="5px"
        >
          {title}
        </Text>
      </Center>
      <TableContainer px="10">
        <Table
          variant={"simple"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 30px 90px"
          borderRadius={"10px"}
          bg="radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,210,233,1) 100%);"
        >
          <TableCaption
            fontSize={"lg"}
            fontWeight="hairline"
            color={"gray.600"}
          >
            {" "}
            FIFA 2022 Schedule{" "}
          </TableCaption>
          <Thead bg="black">
            <Tr>
              <Th fontSize={"lg"} color="white" py={4}>
                Date
              </Th>
              <Th fontSize={"lg"} color="white" py={4}>
                Team 1
              </Th>
              <Th fontSize={"lg"} color="white" py={4}>
                Result
              </Th>
              <Th fontSize={"lg"} color="white" py={4}>
                Team 2
              </Th>
              <Th fontSize={"lg"} color="white" py={4}>
                Time
              </Th>
              <Th fontSize={"lg"} color="white">
                Venue
              </Th>
            </Tr>
          </Thead>
          <Tbody fontWeight={"500"} fontSize="md" letterSpacing={2}>
            {data.map((value, index) => {
              return (
                <Tr
                  key={index}
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                  }}
                >
                  <Td> {value.date} </Td>
                  <Td> {value.team1} </Td>
                  <Td> - </Td>
                  <Td> {value.team2} </Td>
                  <Td> {convertTimeToLocalTime(value.time)} </Td>
                  <Td> {value.location} </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableDesign;
