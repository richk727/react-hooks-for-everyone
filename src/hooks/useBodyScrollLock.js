import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
    useLayoutEffect(() => {
        const originalOverflowStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflowStyle;
        }
    }, []);
}

export { useBodyScrollLock }