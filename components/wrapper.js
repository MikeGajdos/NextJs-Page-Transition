import React from "react";
import Layout from "./layout";
import { useState, useEffect } from "react";
import { useIsMounted } from "../animation/useIsMounted";

const Wrapper = (props) => {
  //   const [hasMounted, setHasMounted] = useState(false);
  //   useEffect(() => {
  //     setHasMounted(true);
  //   });
  const hasMounted = useIsMounted();
  if (!hasMounted) return null;
  return <Layout {...props} />;
};

export default Wrapper;
