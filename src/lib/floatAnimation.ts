import { keyframes } from "@emotion/react";

export const floatAnimation = (
  direction: "horizontal" | "vertical",
  distance: number = 20
) => keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate${
      direction === "horizontal" ? "X" : "Y"
    }(${distance}px);
  }
  100% {
    transform: translate(0, 0);
  }
`;
