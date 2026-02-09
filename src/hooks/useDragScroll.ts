import { useRef } from "react";

type DragHandlers<T extends HTMLElement> = {
    onPointerDown: (event: React.PointerEvent<T>) => void;
    onPointerMove: (event: React.PointerEvent<T>) => void;
    onPointerUp: (event: React.PointerEvent<T>) => void;
    onPointerLeave: (event: React.PointerEvent<T>) => void;
    onPointerCancel: (event: React.PointerEvent<T>) => void;
    onTouchStart: (event: React.TouchEvent<T>) => void;
    onTouchMove: (event: React.TouchEvent<T>) => void;
    onTouchEnd: () => void;
    onTouchCancel: () => void;
};

export const useDragScroll = <T extends HTMLElement>(): {
    ref: React.RefObject<T>;
    handlers: DragHandlers<T>;
} => {
    const ref = useRef<T | null>(null);
    const activePointerId = useRef<number | null>(null);
    const isTouchDragging = useRef(false);
    const startX = useRef(0);
    const startScroll = useRef(0);

    const stopDragging = () => {
        const el = ref.current;
        activePointerId.current = null;
        isTouchDragging.current = false;
        if (el) el.classList.remove("cursor-grabbing");
    };

    const handlers: DragHandlers<T> = {
        onPointerDown: (event) => {
            if (event.button !== 0 && event.pointerType === "mouse") return;

            const el = ref.current;
            if (!el) return;

            activePointerId.current = event.pointerId;
            startX.current = event.clientX;
            startScroll.current = el.scrollLeft;
            el.classList.add("cursor-grabbing");
            try {
                el.setPointerCapture(event.pointerId);
            } catch {
                // Some in-app browsers can throw here; drag still works without capture.
            }
        },
        onPointerMove: (event) => {
            const el = ref.current;
            if (!el || activePointerId.current !== event.pointerId) return;

            const walk = event.clientX - startX.current;
            el.scrollLeft = startScroll.current - walk;
        },
        onPointerUp: (event) => {
            const el = ref.current;
            if (!el || activePointerId.current !== event.pointerId) return;

            try {
                el.releasePointerCapture(event.pointerId);
            } catch {
                // Ignore if capture is not active.
            }
            stopDragging();
        },
        onPointerLeave: () => {
            stopDragging();
        },
        onPointerCancel: () => {
            stopDragging();
        },
        onTouchStart: (event) => {
            if (typeof window !== "undefined" && "PointerEvent" in window) return;

            const el = ref.current;
            const touch = event.touches[0];
            if (!el || !touch) return;

            isTouchDragging.current = true;
            startX.current = touch.clientX;
            startScroll.current = el.scrollLeft;
            el.classList.add("cursor-grabbing");
        },
        onTouchMove: (event) => {
            if (typeof window !== "undefined" && "PointerEvent" in window) return;
            if (!isTouchDragging.current) return;

            const el = ref.current;
            const touch = event.touches[0];
            if (!el || !touch) return;

            const walk = touch.clientX - startX.current;
            el.scrollLeft = startScroll.current - walk;
            event.preventDefault();
        },
        onTouchEnd: () => {
            stopDragging();
        },
        onTouchCancel: () => {
            stopDragging();
        },
    };

    return { ref, handlers };
};
