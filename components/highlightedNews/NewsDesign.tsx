import {
	Badge,
	Box,
	Flex,
	GridItem,
	Heading,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { News } from "../../models/topNewsModal";

const NewsDesign = ({ data }: any) => {
	const router = useRouter();

	return (
		<Box width={290}>
			<Flex justifyContent={"flex-end"}>
				<Badge
					colorScheme="whatsapp"
					position={"absolute"}
					mt={2}
					mr={1}
					variant={"subtle"}
					cursor={"pointer"}
				>
					FIFA.COM
				</Badge>
			</Flex>
			{/* eslint-disable-next-line */}
			<img
				src={data.image}
				alt={data.title}
				style={{
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
					height: 180,
					width: "100%",
					// width: 300,
				}}
				onClick={() => window.open(data.url, "_blank")}
			/>

			<Box
				boxShadow={"lg"}
				pt={0}
				bgColor="#eee"
				// w={288}
				p={2}
				style={{
					borderBottomLeftRadius: 10,
					borderBottomRightRadius: 10,
				}}
			>
				<Text fontSize={"20px"} fontWeight="bold" className="titleLine">
					{data.title}
				</Text>
				<Text fontSize={"13px"} className="contentLine">
					{data.description?.substring(0, 100)} ...
				</Text>
			</Box>
			<br />
			<br />
		</Box>
	);
};

export default NewsDesign;
