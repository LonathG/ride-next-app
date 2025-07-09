import React from "react";

import ParallaxText from "./ParallaxText";

const Footer: React.FC = () => {
  return (
    <div
      className="w-screen h-fit z-10 relative font-AlbertSans_Regular bg-[#4169E1] text-white"
      style={{
        background: `linear-gradient(to bottom, #4169E1 0%, #6A8FE8 20%, #2C3E99 100%)`,
      }}
    >
      <div className="w-full h-fit bg-green lg:px-24 opacity-80 flex justify-between items-center text-sm font-extralight text-text px-4 md:px-8 relative -bottom-8">
        <div>Sample Project By WebMinds Designs</div>
        <div className="flex justify-end gap-12 ">
          <div className="cursor-pointer hover:underline">Copyrights</div>
          <div className="cursor-pointer hover:underline">Terms of Service</div>
        </div>
      </div>
      <main className="flex flex-col items-center justify-center h-[360px] bg-transparent text-text md:pb-0">
        <ParallaxText baseVelocity={-1.5} fontSize="text-[300px]">
          - Get In Touch -
        </ParallaxText>
      </main>
    </div>
  );
};

export default Footer;
