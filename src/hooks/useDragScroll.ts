import { useRef } from "react";

type DragHandlers<T extends HTMLElement> = {
    onPointerDown: (event: React.PointerEvent<T>) => void;
    onPointerMove: (event: React.PointerEvent<T>) => void;
    onPointerUp: (event: React.PointerEvent<T>) => void;
    onPointerLeave: (event: React.PointerEvent<T>) => void;
    onPointerCancel: (event: React.PointerEvent<T>) => void;
};

export const useDragScroll = <T extends HTMLElement>(): {
    ref: React.RefObject<T>;
    handlers: DragHandlers<T>;
} => {
    const ref = useRef<T | null>(null);
    const activePointerId = useRef<number | null>(null);
    const startX = useRef(0);
    const startScroll = useRef(0);

    const stopDragging = () => {
        const el = ref.current;
        activePointerId.current = null;
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
            el.setPointerCapture(event.pointerId);
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

            el.releasePointerCapture(event.pointerId);
            stopDragging();
        },
        onPointerLeave: () => {
            stopDragging();
        },
        onPointerCancel: () => {
            stopDragging();
        },
    };

    return { ref, handlers };
};

