"use client";

import { Bounded } from "@/components/Bounded";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";

const alternatingTextData = [
  {
    heading: "Fuel Your Day",
    body: "Start your morning with a clean, powerful boost of energy that helps you stay focused and alert. With zero crash and no compromise on ingredients, RIDE powers you through everything — from early meetings to late-night ideas.",
  },
  {
    heading: "Made for Movement",
    body: "Whether you’re crushing it at the gym, hitting the trails, or grinding through work, RIDE is built to keep pace with your high-energy lifestyle. Stay energized, hydrated, and ready for whatever comes next.",
  },
  {
    heading: "Real Ingredients",
    body: "Say goodbye to artificial flavors, chemicals, and sugar overload. RIDE is crafted with real fruit extracts, essential vitamins, and hydration-focused compounds to fuel your body naturally — and deliciously.",
  },
];


const AlternatingText = (): JSX.Element => {
  return (
    <Bounded
      className="alternating-text-container relative bg-yellow-300 text-sky-950"
    >
      <div>
        <div className="relative z-[100] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          {alternatingTextData.map((item, index) => (
            <div
              key={index}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
                )}
              >
                <h2 className="text-balance text-6xl font-bold">
                  {item.heading}
                </h2>
                <div className="mt-4 text-xl">
                  {item.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
