import { GreenShape } from "@/images/GreenShape";
import { LargeElipse } from "@/images/LargeElipse";
import { OrangeShape } from "@/images/OrangeShape";
import { PurpleShape } from "@/images/PurpleShape";
import { SmallElipse } from "@/images/SmallCircle";

export const decorativeShapes = [
  {
    Component: GreenShape,
    left: "280px",
    top: "-100px",
    direction: "horizontal" as const,
    duration: 4,
    distance: 25,
  },
  {
    Component: PurpleShape,
    left: "910px",
    top: "-43px",
    direction: "vertical" as const,
    duration: 5,
    distance: 30,
  },
  {
    Component: LargeElipse,
    left: "460px",
    top: "495px",
    direction: "vertical" as const,
    duration: 6,
    distance: 15,
  },
  {
    Component: SmallElipse,
    left: "-120px",
    top: "0px",
    direction: "vertical" as const,
    duration: 3.5,
    distance: 20,
  },

  {
    Component: OrangeShape,
    left: "890px",
    top: "260px",
    direction: "vertical" as const,
    duration: 5.5,
    distance: 22,
  },
];
