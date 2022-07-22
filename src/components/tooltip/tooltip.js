import { cloneElement, useRef, useState } from "react";

import styles from "./styles.module.css";

import Portal from "../portal/portal";

const createPlacement = (p) => ({
  current: p,
  negate() {
    if (this.current === "left") return "right";
    if (this.current === "right") return "left";
    if (this.current === "top") return "bottom";
    if (this.current === "bottom") return "top";
  },
  isHorizontal() {
    return this.current === "left" || this.current === "right";
  },
  isVertical() {
    return this.current === "top" || this.current === "bottom";
  },
});

const getPos = (elem, tooltip, placement, space) => {
  const pos = { x: 0, y: 0 };

  const boundary = {
    l: space,
    t: space,
    r: window.innerWidth - (tooltip.clientWidth + space),
    b: window.innerHeight - (tooltip.clientHeight + space),
  };

  const elemRect = elem.getBoundingClientRect();

  let recursiveCounter = 0;

  // It's a Recursive Function for getting the position within boundary
  (function getAccuratePosition(placement) {
    placement = createPlacement(placement);

    switch (placement.current) {
      case "top": {
        pos.x = elemRect.left + (elem.offsetWidth - tooltip.offsetWidth) / 2;
        pos.y = elemRect.top - tooltip.offsetHeight - space;
        break;
      }
      case "bottom": {
        pos.x = elemRect.left + (elem.offsetWidth - tooltip.offsetWidth) / 2;
        pos.y = elemRect.bottom + space;
        break;
      }
      case "right": {
        pos.x = elemRect.right + space;
        pos.y = elemRect.top + (elem.offsetHeight - tooltip.offsetHeight) / 2;
        break;
      }
      case "left": {
        pos.x = elemRect.left - tooltip.offsetWidth - space;
        pos.y = elemRect.top + (elem.offsetHeight - tooltip.offsetHeight) / 2;
        break;
      }
      default: {
      }
    }

    if (recursiveCounter < 2) {
      if (
        (placement.isHorizontal() &&
          (pos.x < boundary.l || pos.x > boundary.r)) ||
        (placement.isVertical() && (pos.y < boundary.t || pos.y > boundary.b))
      ) {
        recursiveCounter++;
        getAccuratePosition(placement.negate());
      }

      // Remove Overflow, Adjust within the Boundary
      if (pos.x < boundary.l) pos.x = boundary.l;
      else if (pos.x > boundary.r) pos.x = boundary.r;

      if (pos.y < boundary.t) pos.y = boundary.t;
      else if (pos.y > boundary.b) pos.y = boundary.b;
    }
  })(placement);

  return pos;
};

const Tooltip = ({ content, placement = "bottom", space = 10, children }) => {
  const [show, setShow] = useState(false);
  const posRef = useRef({ x: 10, y: 10 });
  const tooltipRef = useRef(null);

  const handleMouseOver = (e) => {
    setShow(true);

    posRef.current = getPos(
      e.currentTarget,
      tooltipRef.current,
      placement,
      space,
    );
  };
  const handleMouseOut = () => setShow(false);

  return (
    <>
      {cloneElement(children, {
        onMouseOver: handleMouseOver,
        onMouseOut: handleMouseOut,
      })}
      <Portal id="tooltip">
        <div
          ref={tooltipRef}
          className={`${styles.tooltip} ${show && styles.visible}`}
          style={{
            top: posRef.current.y,
            left: posRef.current.x,
            transformOrigin: createPlacement(placement).negate(),
            transform: `scale(${show ? 1 : 0.5})`,
          }}
        >
          {content}
        </div>
      </Portal>
    </>
  );
};

export default Tooltip;
