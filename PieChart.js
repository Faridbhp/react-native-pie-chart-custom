import React from "react";
import { Svg, G, Path, Text as SvgText } from "react-native-svg";

const PieChart = ({ data, size = 150, outerRadius = 70 }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativeAngle = 0;

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {data.map((item, index) => {
        const { color, value, label } = item;
        const startAngle = cumulativeAngle;
        const angle = (value / total) * 360;
        const endAngle = cumulativeAngle + angle;
        cumulativeAngle += angle;

        const start = polarToCartesian(
          size / 2,
          size / 2,
          outerRadius,
          startAngle
        );
        const end = polarToCartesian(size / 2, size / 2, outerRadius, endAngle);

        const largeArcFlag = angle > 180 ? 1 : 0;
        const pathData = [
          `M ${size / 2} ${size / 2}`, // Move to center
          `L ${start.x} ${start.y}`, // Line to start of arc
          `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`, // Arc
          `L ${size / 2} ${size / 2}`, // Line back to center
        ].join(" ");

        const labelAngle = startAngle + angle / 2;
        const labelPosition = polarToCartesian(
          size / 2,
          size / 2,
          outerRadius / 2,
          labelAngle
        );

        return (
          <G key={index}>
            <Path d={pathData} fill={color} />
            <SvgText
              x={labelPosition.x}
              y={labelPosition.y}
              fill="white"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {label}
            </SvgText>
          </G>
        );
      })}
    </Svg>
  );
};

export default PieChart;
