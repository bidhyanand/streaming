import { Box, Text } from "@chakra-ui/react";
import { type } from "os";
import { FC, useEffect, useState } from "react";
import styles from "../../styles/CountDown.module.css";

type Props = {
	interval: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

interface IProps {
	time?: string;
}

const CountDown: FC<IProps> = ({ time }) => {
	const [timerDays, setTimerDays] = useState<number>();
	const [timerHours, setTimerHours] = useState<number>();
	const [timerMinutes, setTimerMinutes] = useState<number>();
	const [timerSeconds, setTimerSeconds] = useState<number>();

	let interval: any;
	const startTimer = () => {
		const countdownDate = new Date(
			time ? time : `November 20, 2022 21:45:00`
		).getTime();
		interval = setInterval(() => {
			// here we are getting the current date and time
			const now = new Date().getTime();
			// here we are getting the distance between the current date and time and the countdown date and time
			const distance = countdownDate - now;
			// here we are converting the distance into days, hours, minutes and seconds
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
			// here we are setting the state of the timer
			if (distance < 0) {
				// stop our timer
				clearInterval(interval.current);
			} else {
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		});
	};

	// here we are calling the startTimer function
	useEffect(() => {
		startTimer();
		return () => clearInterval(interval);
	});

	return (
		<Box className={styles.timer}>
			<Box className={styles.clock}>
				<section>
					<Text fontSize={"3rem"}>{timerDays}</Text>
					<Text color="blackAlpha.400" text-shadow={"none"}>
						Days
					</Text>
				</section>
				<span>
					<Text fontWeight={"bold"} fontSize="lg">
						:
					</Text>
				</span>
				<section>
					<Text fontSize={"3rem"}>{timerHours}</Text>
					<Text color="blackAlpha.400" text-shadow={"none"}>
						Hours
					</Text>
				</section>
				<span>
					<Text fontWeight={"bold"} fontSize="lg">
						:
					</Text>
				</span>

				<section>
					<Text fontSize={"3rem"}>{timerMinutes}</Text>
					<Text color="blackAlpha.400" text-shadow={"none"}>
						Minutes
					</Text>
				</section>
				<span>
					<Text fontWeight={"bold"} fontSize="lg">
						:
					</Text>
				</span>

				<section>
					<Text fontSize={"3rem"}>{timerSeconds}</Text>
					<Text color="blackAlpha.400" text-shadow={"none"}>
						Seconds
					</Text>
				</section>
			</Box>
		</Box>
	);
};

export default CountDown;
