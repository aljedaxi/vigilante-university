import {List, Map} from 'immutable';
import {useRef, useState, useEffect} from 'react';
import {SoundcloudCommentBar} from '../components/SoundcloudCommentBar';
import {useElementSize} from '../components/hooks';
import {Layout} from './index';
import ReactPlayer from 'react-player';

export const Seminar = props => {
	const mrRlTime = 'https://www.youtube.com/watch?v=oYmqJl4MoNI';
	const comments = List([
		Map({timestamp: 60, _id: 'random', body: 'body and blood'})
	]);
	const videoRef = useRef();
	const playerRef = useRef();

	const {width: lessonWidth} = useElementSize(videoRef);

	const {getCurrentTime, getDuration = () => 0} = playerRef?.current ?? {};
	const videoDuration = getDuration();
	console.log('videoDuration', videoDuration);

	return (
		<Layout>
			<div ref={videoRef}>
				<ReactPlayer ref={playerRef} url={mrRlTime}/>
			</div>
			<SoundcloudCommentBar 
				videoWidth={lessonWidth}
				videoDuration={videoDuration}
				comments={comments}
			/>
		</Layout>
	);
};

export default Seminar;
