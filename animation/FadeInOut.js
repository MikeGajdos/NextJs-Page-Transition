import { useRef, useContext } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
import { TransitionContext } from "./TransitionContext";

const FadeInOut = ({ children, delay }) => {
  const { timeline } = useContext(TransitionContext);
  const el = useRef();

  // useIsomorphicLayoutEffect to avoid console warnings
  useIsomorphicLayoutEffect(() => {
    // intro animation will play immediately

    gsap.to(el.current, {
      opacity: 1,
      delay: delay,
      // visibility: "visible",
      duration: 1.5,
    });

    // add outro animation to top-level outro animation timeline
    timeline.add(
      gsap.to(el.current, {
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
      }),
      0
    );
  }, []);

  // set initial opacity to 0 to avoid FOUC for SSR
  return (
    <div ref={el} className="polacek">
      {children}
    </div>
  );
};

export default FadeInOut;
