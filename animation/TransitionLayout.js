import { gsap } from "gsap";
import { TransitionContext } from "./TransitionContext";
import { useState, useContext, useRef, useEffect } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState();
  const { timeline, background } = useContext(TransitionContext);
  const el = useRef();

  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        // there are no outro animations, so immediately transition
        setDisplayChildren(children);
      } else {
        timeline.play().then(() => {
          // outro complete so reset to an empty paused timeline
          timeline.seek(0).pause().clear();

          // setDisplayChildren(children);
        });
      }
    }
  }, [children]);

  useEffect(() => {
    gsap.to(el.current, {
      opacity: 1,
      duration: 0.2,
    });
  }, [children]);

  // useIsomorphicLayoutEffect(() => {
  //   gsap.to(el.current, {
  //     background,
  //     opacity: 1,
  //     duration: 10,
  //   });
  // }, [background]);

  return (
    <div ref={el} className="cuntPolacek">
      {displayChildren}
    </div>
  );
}
