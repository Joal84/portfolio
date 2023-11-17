import React, { Children } from "react";
import { useInView } from "react-intersection-observer";

export default function LazyLoader({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return <div ref={ref}>{inView && children}</div>;
}
