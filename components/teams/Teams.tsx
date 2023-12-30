import { Box, GridItem, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../public/1.webp";
import TeamImage from "../Team";

const Teams = () => {
	const teams = [
		"Qatar",
		"Ecuador",
		"Senegal",
		"Netherlands",
		"England",
		"Iran",
		"USA",
		"Wales",
		"Argentina",
		"Saudi Arabia",
		"Mexico",
		"Poland",
		"France",
		"Denmark",
		"Tunisia",
		"Australia",
		"Spain",
		"Germany",
		"Japan",
		"Costa Rica",
		"Belgium",
		"Canada",
		"Morocco",
		"Croatia",
		"Brazil",
		"Serbia",
		"Switzerland",
		"Cameroon",
		"Portugal",
		"Ghana",
		"Uruguay",
		"South Korea",
	];
	return (
		<>
			<Box display={"flex"}>
      <Box display={{md : "inline-block", base : "none"}}>
				<Image src={logo} alt="logo" />
        </Box>
				<div>
					<VStack>
						<Text
							textAlign={"center"}
							fontFamily={"fantasy"}
							fontSize={{base:"3xl", md:"5xl", lg:"6xl"}}
							py={8}
						>
							Top 32 Teams Qualified For World Cup 2022 (QATAR)
						</Text>

						<Text fontWeight={"hairline"} fontSize={{base:"sm", md:"md", lg:"lg"}} w={{base:"80%", md:"100%"}} >
							{`You can see each team'sNews, Players, and Fixtures by clicking on the team's logo.`}
						</Text>
					</VStack>
				</div>
        <Box display={{md : "inline-block", base : "none"}}>
  				<Image src={logo} alt="logo" />
        </Box>
			</Box>
			<SimpleGrid columns={{ base: 1, md:2, lg:4 }}>
				{teams.map((names, index) => {
					return (
						<GridItem bg={"#901A3D"}  px="10"  key={index}>
							<Box
								bg={"#EDEEE4"}
								boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
								width={280}
								height={90}
								borderRadius="100px 10px "
								pt={5}
								my="4"
								key={index}
								// while clicking on the team name redict to the url  by using the name of the team and change the name of the team to lower case and open the url in new tab
								onClick={() => {
									window.open(
										`https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022/teams/${names.toLowerCase()}/squad`
									);
								}}
								_hover={{
									cursor: "pointer",
									bg: "twitter.100",
									color: "white",
								}}
							>
								<Box
									display={"flex"}
									justifyContent={"center"}
									gap={"4"}
								>
									<Box pt={1}>
										<TeamImage name={names} />
									</Box>
									<Text
										color={"#8B1638"}
										fontSize="2xl"
										textAlign="center"
										fontWeight="bold"
									>
										{names}
									</Text>
								</Box>
							</Box>
						</GridItem>
					);
				})}
			</SimpleGrid>
		</>
	);
};

export default Teams;
