import { Box, Center, Divider, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { CalendarInterface } from "../../models/calendar";

interface IProps {
  data: CalendarInterface;
}

export type CalendarContextType = {
  children: React.ReactNode;
};

// const Calendar = ({day, date}: CalendarInterface) => {
const Calendar = ({ data }: IProps) => {
  // to set the data to cookies
  const [cookies, setCookie] = useCookies();
  const [date, setDate] = useState<string>();
  const handleDate = (dateValue: string) => {
    setDate(dateValue);
    setCookie("date", dateValue, { path: "/" });
  };

  return (
    <Center>
      <Box
        display={"flex"}
        flexDir="row"
        justifyContent={"center"}
        gap={2}
        m="2"
        width="100%"
        onClick={() => handleDate(data.date)}
        borderRight={date === data.date ? "3px solid orange" : "2px solid  gray"}
        borderLeft={date === data.date ? "3px solid orange" : "2px solid  gray"}
        bg={date === data.date ? "gray.100" : "white"}
        borderRadius="lg"
        _hover={{
          cursor: "pointer",
          backgroundColor: "gray.100",
          color: "red.400",
          borderRight: "3px solid orange",
          borderLeft: "3px solid orange",
        }}
      >
        
        <Stack align={"center"} spacing="0"  my={{base:"6", md:"6", lg:"4"}}      >
          <Text fontSize="lg" fontWeight="hairline" color="gray.500">
            {data.day?.substring(0, 3)}
          </Text>
          <Text fontSize="xl" fontWeight="550" color="gray.500">
            {data.date}
          </Text>
        </Stack>
       
      </Box>
    </Center>
  );
};

export default Calendar;
