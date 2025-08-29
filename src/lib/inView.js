/**
 * @param {HTMLElement} node
 */
export default function inView(node) {
	/** @type {IntersectionObserver} */
	let observer;

	/**
	 * @param {IntersectionObserverEntry[]} entries
	 */
	const handleIntersect = (entries) => {
		const [e] = entries; // Destructure the first entry
		if (e.isIntersecting) {
			e.target.classList.add('in-view');
		} else {
			e.target.classList.remove('in-view');
		}
	};

	observer = new IntersectionObserver(handleIntersect);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
