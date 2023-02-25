export function getWindowSize(): { width: number; height: number } {
	let width = 0;
	let height = 0;

	if (typeof window !== 'undefined') {
		width =
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth;
		height =
			window.innerHeight ||
			document.documentElement.clientHeight ||
			document.body.clientHeight;
	} else if (
		typeof navigator !== 'undefined' &&
		navigator.userAgent.indexOf('Mobile') !== -1
	) {
		width = 360;
		height = 640;
	} else if (
		typeof navigator !== 'undefined' &&
		navigator.userAgent.indexOf('iPad') !== -1
	) {
		width = 768;
		height = 1024;
	} else {
		width = 1366;
		height = 768;
	}

	return { width, height };
}
