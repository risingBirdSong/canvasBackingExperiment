import * as React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Circle = () => {
  let ref = useRef();

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 50, 0, 2 * Math.PI);
    context.fill();
  });

  return <canvas ref={ref} style={{ width: "100px", height: "100px" }} />;
};

export default Circle;
