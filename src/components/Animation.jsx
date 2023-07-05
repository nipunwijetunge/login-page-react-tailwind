import React from "react";

const Animation = () => {
  return (
    <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
      <div className="hidden 2xl:flex 2xl:mb-20 text-6xl font-normal">
        Bounce
      </div>
      <div className="xl:mx-10 w-60 h-60 bg-gradient-to-tr from-cyan-500 to-blue-800 rounded-full animate-bounce" />
      <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      <div className="hidden z-10 2xl:flex 2xl:-mb-20 text-cyan-500 text-6xl font-normal">
        ꓭɐɔʞ
      </div>
    </div>
  );
};

export default Animation;
