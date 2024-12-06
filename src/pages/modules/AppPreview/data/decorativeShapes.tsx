import { BlueShape } from "@/pages/images/BlueShape";
import { GreenShape } from "@/pages/images/GreenShape";
import { LargeElipse } from "@/pages/images/LargeElipse";
import { OrangeShape } from "@/pages/images/OrangeShape";
import { PurpleShape } from "@/pages/images/PurpleShape";
import { SmallElipse } from "@/pages/images/SmallCircle";

export const decorativeShapes = [
  {
    Component: GreenShape,
    left: "200px",
    top: "-50px",
    direction: "horizontal" as const,
    duration: 4,
    distance: 25,
  },
  {
    Component: PurpleShape,
    left: "550px",
    top: "-50px",
    direction: "vertical" as const,
    duration: 5,
    distance: 30,
  },
  {
    Component: LargeElipse,
    left: "300px",
    top: "550px",
    direction: "vertical" as const,
    duration: 6,
    distance: 15,
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
    top: "300px",
    direction: "vertical" as const,
    duration: 4.5,
    distance: 25,
  },
  {
    Component: OrangeShape,
    left: "849px",
    top: "300px",
    direction: "vertical" as const,
    duration: 5.5,
    distance: 22,
  },
];
