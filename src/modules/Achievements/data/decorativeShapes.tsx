import { BlueShape } from "@/images/BlueShape";
import { GreenShape } from "@/images/GreenShape";
import { OrangeShape } from "@/images/OrangeShape";
import { SmallElipse } from "@/images/SmallCircle";

export const decorativeShapes = [
  {
    Component: GreenShape,
    left: "350px",
    top: "-150px",
    direction: "horizontal" as const,
    duration: 4,
    distance: 25,
  },
  {
    Component: SmallElipse,
    left: "-50px",
    top: "-50px",
    direction: "vertical" as const,
    duration: 3.5,
    distance: 20,
  },
  {
    Component: BlueShape,
    left: "-90px",
    top: "400px",
    direction: "vertical" as const,
    duration: 4.5,
    distance: 25,
  },
  {
    Component: OrangeShape,
    left: "849px",
    top: "100px",
    direction: "vertical" as const,
    duration: 5.5,
    distance: 22,
  },
];
