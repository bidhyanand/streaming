import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LiveDetail from "../components/liveDetail/LiveDetail";
import byDate from "../data/sorted_by_date.json";
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

const WatchLive = ({ liveData }: Iprops) => {
	const [isClickedLive, setIsClickedLive] = useState(true);
	const [loading, setLoading] = useState(true);
	const { query } = useRouter();
	// get data
	const clickedData = byDate.find((d) => d.name === query.name);
	useEffect(() => {
		if (clickedData) {
			setIsClickedLive(liveData?.includes(clickedData.name));
		}
		setLoading(false);
    // eslint-disable-next-line
	}, []);
	return (
		<div>
			<Head>
				<title>WORLDCUP LIVEM | WATCH LIVE</title>
				<meta name="description" content="World cup 2022 live stream" />
			</Head>
			{!loading && clickedData && (
				<LiveDetail isLive={isClickedLive} data={clickedData} />
			)}
		</div>
	);
};

export default WatchLive;
