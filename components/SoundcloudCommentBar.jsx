const tee = f => x => { f(x); return x; };
const trace = tee(console.log);
const Comment = props =>
	<div style={{position: 'absolute', left: props.offset}} >{props.body}</div>

export const SoundcloudCommentBar = props => {
	const {
		videoWidth, videoDuration, comments
	} = props;
	console.log('videoWidth, videoDuration', videoWidth, videoDuration);

	const genOffset = t => (videoWidth / videoDuration) * t;

	return (
		<div style={{position: 'relative', width: videoWidth}} >
			{comments.map(c => <Comment key={c.get('_id')} body={c.get('body')} offset={genOffset(c.get('timestamp'))}/>).toJS()}
		</div>
	);
};
