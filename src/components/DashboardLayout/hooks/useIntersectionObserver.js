import { useRef } from "react";

export default function useIntersectionObserver() {
  let mouseDown = false;
  let startX, scrollLeft;
  const draggableArea = useRef();

  function startDragging(e) {
    if (draggableArea) {
      mouseDown = true;
      startX = e.pageX - draggableArea.current.offsetLeft;
      scrollLeft = draggableArea.current.scrollLeft;
    }
  }

  function stopDragging(e) {
    mouseDown = false;
  }

  function dragging(e) {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    if (draggableArea) {
      const x = e.pageX - draggableArea.current.offsetLeft;
      const scroll = x - startX;
      draggableArea.current.scrollLeft = scrollLeft - scroll;
    }
  }

  return [
    mouseDown,
    startX,
    scrollLeft,
    draggableArea,
    startDragging,
    dragging,
    stopDragging,
  ];
}
