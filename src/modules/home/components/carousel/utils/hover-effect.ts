import { MouseEvent } from 'react';
import { getWindowSize } from '@/utils/width-height-window-size';
let bounds: DOMRect;

const { width: windowWidth } = getWindowSize();

export const rotateToMouse = (e: MouseEvent<HTMLDivElement>, inputRef: any) => {
	if (windowWidth > 767) {
		if (inputRef && inputRef.current) {
			bounds = inputRef.current.getBoundingClientRect();
		}
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const leftX = mouseX - bounds.x;
		const topY = mouseY - bounds.y;
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2
		};
		const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

		if (inputRef.current) {
			inputRef.current.style.transform = `
      scale3d(1.04, 1.04, 1.04)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 1.5}deg
      )
    `;
		}
	}
};

export const removeListener = (inputRef: any) => {
	if (inputRef.current && windowWidth > 767) {
		inputRef.current.style.transform = '';
		inputRef.current.style.background = '';
	}
};
