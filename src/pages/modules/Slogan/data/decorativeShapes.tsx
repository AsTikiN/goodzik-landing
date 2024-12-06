import { GreenShape } from "@/pages/images/GreenShape";
import { LargeElipse } from "@/pages/images/LargeElipse";
import { SmallElipse } from "@/pages/images/SmallCircle";
import { SmallGreenElipse } from "@/pages/images/SmallGreenCircle";

export const decorativeShapes = [
  {
    Component: SmallElipse,
    left: "0",
    top: "0",
    direction: "vertical" as const,
    duration: 4,
    distance: 25,
  },
  {
    Component: SmallElipse,
    left: "150px",
    top: "400px",
    direction: "vertical" as const,
    duration: 5,
    distance: 30,
  },
  {
    Component: SmallGreenElipse,
    left: "-150px",
    top: "200px",
    direction: "horizontal" as const,
    duration: 3,
    distance: 15,
  },
  {
    Component: LargeElipse,
    left: "900px",
    top: "250px",
    direction: "vertical" as const,
    duration: 3.5,
    distance: 20,
  },
  {
    Component: GreenShape,
    left: "700px",
    top: "-100px",
    direction: "horizontal" as const,
    duration: 4.5,
    distance: 25,
  },
];
