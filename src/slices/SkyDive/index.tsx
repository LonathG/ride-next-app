"use client";

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";
import { View } from "@react-three/drei";

const SkyDive = (): JSX.Element => {
  const flavor = "blackCherry"; // You can replace with any flavor value you use
  const sentence = "UNLEASH YOUR ENERGY"; // Replace with your desired sentence

  return (
    <Bounded className="skydive h-screen">
      <h2 className="sr-only">{sentence}</h2>
      <View className="h-screen w-screen">
        <Scene flavor={flavor} sentence={sentence} />
      </View>
    </Bounded>
  );
};

export default SkyDive;
