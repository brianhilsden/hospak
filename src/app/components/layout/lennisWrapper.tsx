"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

type LenisWrapperProps = {
  children: React.ReactNode;
};

export default function LenisWrapper({ children }: LenisWrapperProps): JSX.Element {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.15,
        syncTouch: true,
      }}
    >
      <div>{children}</div>
    </ReactLenis>
  );
}
