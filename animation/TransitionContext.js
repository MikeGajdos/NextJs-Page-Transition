import React, { useState, createContext, useCallback, useContext } from "react";
import { gsap } from "gsap";

export const TransitionContext = createContext({});
export const TransitionProvider = ({ children }) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  );
  const [background, setBackground] = useState("yellow");

  return (
    <div>
      <TransitionContext.Provider
        value={{
          timeline,
          setTimeline,
          background,
          setBackground,
        }}
      >
        {children}
      </TransitionContext.Provider>
    </div>
  );
};
