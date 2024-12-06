import { BlueShape } from "@/images/BlueShape";
import { GreenShape } from "@/images/GreenShape";
import { LargeElipse } from "@/images/LargeElipse";
import { OrangeShape } from "@/images/OrangeShape";
import { PurpleShape } from "@/images/PurpleShape";
import { SmallElipse } from "@/images/SmallCircle";

export const decorativeShapes = [
  {
    Component: GreenShape,
    left: "625px",
    top: "-50px",
    direction: "horizontal" as const,
    duration: 4,
    distance: 25,
  },
  {
    Component: PurpleShape,
    left: "975px",
    top: "-50px",
    direction: "vertical" as const,
    duration: 5,
    distance: 30,
  },
  {
    Component: LargeElipse,
    left: "725px",
    top: "550px",
    direction: "vertical" as const,
    duration: 6,
    distance: 15,
  },
  {
    Component: SmallElipse,
    left: "375px",
    top: "-50px",
    direction: "vertical" as const,
    duration: 3.5,
    distance: 20,
  },
  {
    Component: BlueShape,
    left: "335px",
    top: "300px",
    direction: "vertical" as const,
    duration: 4.5,
    distance: 25,
  },
  {
    Component: OrangeShape,
    left: "1274px",
    top: "300px",
    direction: "vertical" as const,
    duration: 5.5,
    distance: 22,
  },
];
