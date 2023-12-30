import { FC, useEffect, Fragment, useRef, useState } from "react";
import flv from "flv.js";

export interface ReactFlvPlayerProps {
	isLive?: boolean;
	hasAudio?: boolean;
	hasVideo?: boolean;
	showControls?: boolean;
	enableStashBuffer?: boolean;
	stashInitialSize?: number | undefined;
	height?: number;
	width?: number;
	isMuted?: boolean;
	url: string;
	videoProps?: React.DetailedHTMLProps<
		React.VideoHTMLAttributes<HTMLVideoElement>,
		HTMLVideoElement
	>;
	flvMediaSourceOptions?: flv.MediaDataSource;
	flvConfig?: flv.Config;
	type? : string
	// errorCallback?: (err: any) => void;
}

export const ReactFlvPlayerx: FC<ReactFlvPlayerProps> = (props) => {
	const {
		height,
		width,
		isLive,
		hasAudio,
		hasVideo,
		showControls,
		enableStashBuffer,
		stashInitialSize,
		isMuted,
		url,
		type,
	} = props;

	const videoRef = useRef<HTMLVideoElement>(null);
	
	const [playerCopy, setPlayerCopy] = useState<any>(null);
	
	const onPlay = () => {
		if(playerCopy){
			playerCopy.play()
		}
	};

	

	const onPause = ()=>{
		if(playerCopy){
			playerCopy.pause()
		}
	}

	useEffect(()=>{
		if(type === "play"){
			onPlay()
			
		}

		if(type === "pause"){
			// if(videoRef?.current){
			// 	videoRef.current.volume = .1
			// }
			onPause()
		}
		// eslint-disable-next-line
	},[type])

	useEffect(() => {
		const player = flv.createPlayer(
			{
				type: "flv",
				isLive: isLive,
				hasAudio: hasAudio,
				hasVideo: hasVideo,
				url: url,
				...props.flvMediaSourceOptions,
			},
			{
				stashInitialSize: stashInitialSize,
				enableStashBuffer: enableStashBuffer,
				...props.flvConfig,
			}
		);
		setPlayerCopy(player);

		player.attachMediaElement(videoRef.current!);
		player.load();

		const onDestroy = ()=>{
			if(player){
				player.destroy()
			}
		}
		return onDestroy



		// player.on("error", (err) => {
		//   props.errorCallback?.(err);
		// });
		// eslint-disable-next-line
	}, []);
	return (
		<Fragment>
			<video
				// controls={showControls}
				muted={isMuted}
				ref={videoRef}
				style={{ height, width }}
				{...props.videoProps}
			/>
		</Fragment>
	);
};

export default ReactFlvPlayerx;
