import React from 'react';
import SplashCursor from './SplashCursor';

export default function FluidBackground({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 -z-10">
        <SplashCursor 
          SIM_RESOLUTION={64}
          DYE_RESOLUTION={512}
          DENSITY_DISSIPATION={4}
          VELOCITY_DISSIPATION={2.5}
          SPLAT_RADIUS={0.15}
          SPLAT_FORCE={4000}
          COLOR_UPDATE_SPEED={8}
        />
      </div>
      {children}
    </div>
  );
} 