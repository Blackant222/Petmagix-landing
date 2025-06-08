import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white p-4 text-center">
      {/* 3D Element Placeholder - A rotating cube */}
      <div className="mb-8 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 perspective">
        <div className="cube w-full h-full relative transform-style-3d animate-rotate-y">
          <div className="face front absolute w-full h-full bg-sky-500 flex items-center justify-center text-2xl font-bold opacity-75">پت</div>
          <div className="face back absolute w-full h-full bg-emerald-500 flex items-center justify-center text-2xl font-bold opacity-75 transform rotate-y-180">مجیکس</div>
          <div className="face right absolute w-full h-full bg-amber-500 flex items-center justify-center text-2xl font-bold opacity-75 transform rotate-y-90 translate-z-16 sm:translate-z-20 md:translate-z-24">۳بعدی</div>
          <div className="face left absolute w-full h-full bg-rose-500 flex items-center justify-center text-2xl font-bold opacity-75 transform rotate-y-m90 translate-z-16 sm:translate-z-20 md:translate-z-24">جادو</div>
          <div className="face top absolute w-full h-full bg-violet-500 flex items-center justify-center text-2xl font-bold opacity-75 transform rotate-x-90 translate-z-16 sm:translate-z-20 md:translate-z-24">بالا</div>
          <div className="face bottom absolute w-full h-full bg-gray-500 flex items-center justify-center text-2xl font-bold opacity-75 transform rotate-x-m90 translate-z-16 sm:translate-z-20 md:translate-z-24">پایین</div>
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
        دروازه هوشمند مراقبت حیوانات Petmagix
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 text-slate-300">
        اولین دستیار هوشمند فارسی‌زبان برای مراقبت از حیوان خانگی شما
      </p>
      <a
        href="https://t.me/petmagixtest_bot" // Placeholder for actual bot link
        target="_blank"
        rel="noopener noreferrer"
        className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-lg text-xl sm:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
      >
        شروع در تلگرام
      </a>
    </section>
  );
};

export default Hero;
