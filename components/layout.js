import Header from "../components/header";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useContext,
} from "react";
import { TransitionContext } from "../animation/TransitionContext";

const Layout = (props) => {
  const { setBackground } = useContext(TransitionContext);
  const kurva = useRef();
  const [hasmounted, setHasMounted] = useState();
  useEffect(() => {
    setHasMounted(true);
  }, []);
  useIsomorphicLayoutEffect(() => {
    // if (!hasmounted) return;
    setBackground(props.background || "white");
    // gsap.to(kurva.current, {
    //   background: props.background,
    //   duration: 1,
    // });
  }, [props.background]);

  return (
    <div className="page-wrapper" ref={kurva}>
      <Header />
      <div className="content-wrapper">{props.children}</div>
    </div>
  );
};

export default Layout;
