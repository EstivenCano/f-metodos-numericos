import React, { useEffect } from "react";
import Plot from "react-plotly.js";

export default function LineChart({ yArray, xArray, point, interpolation }) {
  useEffect(() => {
    xArray.sort();
    yArray.sort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xArray, yArray]);
  return (
    <Plot
      staticPlot={true}
      data={[
        {
          x: xArray,
          y: yArray,
          title: "Buneas",
          spline: true,
          type: "scatter",
          line: { shape: "spline" },
          mode: "lines+markers",
          marker: { color: "rgb(149, 207, 203)" },
        },
        { type: "scatter", x: [point], y: [interpolation] },
      ]}
      layout={{ width: 500, height: 400, title: "LaGrange" }}
      config={{
        displayModeBar: false,
      }}
    />
  );
}
