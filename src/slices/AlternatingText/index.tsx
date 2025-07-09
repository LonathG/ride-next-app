"use client";

import { Bounded } from "@/components/Bounded";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";

const alternatingTextData = [
  {
    heading: "Fuel Your Day",
    body: "Start strong with a burst of clean energy. No crash, no compromise.",
  },
  {
    heading: "Made for Movement",
    body: "Designed to keep up with your active lifestyle — from gym to grind.",
  },
  {
    heading: "Real Ingredients",
    body: "No artificial junk. Just real fruit extracts, vitamins, and hydration.",
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
