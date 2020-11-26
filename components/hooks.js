import {useState, useRef, useEffect} from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export const useElementSize = (ref) => {
	const [dimensions, setDimensions] = useState({width: 0, height: 0});
	const observer = useRef(
		new ResizeObserver((entries) => {
			const {width, height} = entries[0].contentRect;
			setDimensions({width, height});
		})
	);
	useEffect(() => {
		if (ref.current) {
			observer.current.observe(ref.current);
		}
		return () => {
			observer.current.disconnect();
		};
	}, [ref, observer]);
	return dimensions;
};

