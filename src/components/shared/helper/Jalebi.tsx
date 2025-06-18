import React from 'react';

interface JalebiProps {
  size?: number; 
}

function Jalebi({ size = 200 }: JalebiProps) {
  const center = size / 2;

  const generateMultiLayerSpiral = () => {
    const spirals = [];
    const layers = 3;

    for (let layer = 0; layer < layers; layer++) {
      const maxRadius = (size * 0.35) - layer * (size * 0.075);
      const turns = 3 + layer;
      const points = 150;
      const angleOffset = (layer * Math.PI) / 3;

      let path = '';

      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * turns * 2 * Math.PI + angleOffset;
        const radius = (i / points) * maxRadius;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);

        path += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
      }

      spirals.push({
        path,
        color: '#d3d3d3',
        width: size * 0.003,
      });
    }

    return spirals;
  };

  const spirals = generateMultiLayerSpiral();

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-sm animate-pulsing"
    >
      <circle cx={center} cy={center} r={size * 0.01} fill="#d3d3d3" opacity="0.3" />

      {spirals.map((spiral, index) => (
        <path
          key={index}
          d={spiral.path}
          stroke={spiral.color}
          strokeWidth={spiral.width}
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
      ))}

      <circle cx={center} cy={center} r={size * 0.006} fill="#d3d3d3" />
      <circle cx={center + size * 0.2} cy={center + size * 0.1} r={size * 0.005} fill="#d3d3d3" opacity="0.5" />
      <circle cx={center - size * 0.2} cy={center - size * 0.1} r={size * 0.005} fill="#d3d3d3" opacity="0.5" />
      <circle cx={center + size * 0.4} cy={center + size * 0.3} r={size * 0.004} fill="#d3d3d3" opacity="0.4" />
      <circle cx={center - size * 0.4} cy={center - size * 0.3} r={size * 0.004} fill="#d3d3d3" opacity="0.4" />
    </svg>
  );
}

export default Jalebi;
