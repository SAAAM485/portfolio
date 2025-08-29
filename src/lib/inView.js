export function inView(node, params = {}) {
    let observer;

    const handleIntersect = (e) => {
        const intersecting = e[0].isIntersecting;
        if (intersecting) {
            node.classList.add(params.class || 'in-view');
        } else {
            node.classList.remove(params.class || 'in-view');
        }
    };

    const setObserver = () => {
        const options = { root: null, threshold: 0.5 };
        observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(node);
    };

    setObserver();

    return {
        destroy() {
            if (observer) {
                observer.disconnect();
            }
        }
    };
}