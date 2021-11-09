import React, { useEffect } from "react";
import Plot from "react-plotly.js";

export default function LineChart({
  yArray,
  xArray,
  point,
  interpolation,
  title,
}) {
  useEffect(() => {
    xArray.sort();
    yArray.sort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xArray, yArray, point, interpolation]);
  return (
    <Plot
      staticPlot={true}
      data={[
        {
          x: xArray,
          y: yArray,
          spline: true,
          type: "scatter",
          line: { shape: "spline" },
          mode: "lines+markers",
          marker: { color: "rgb(149, 207, 203)" },
        },
        {
          type: "scatter",
          x: [point],
          y: [interpolation !== "" ? interpolation : 0],
        },
      ]}
      layout={{ width: 500, height: 400, title: title }}
      config={{
        displayModeBar: false,
      }}
    />
  );
}
