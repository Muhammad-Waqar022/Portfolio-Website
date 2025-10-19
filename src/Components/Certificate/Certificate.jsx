import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "../public/Certificates/frontend.png",
  "../public/Certificates/freecodecamp.png",
  "../public/Certificates/js.png",
  "../public/Certificates/react.png",
  "../public/Certificates/wordpress.png",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 80;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const CertificatesCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      // Only auto-slide if user isn't dragging
      const x = dragX.get();
      if (Math.abs(x) < 1) {
        setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const handleDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative overflow-hidden py-16 text-white max-w-[1400px] mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-10 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
        Certificates
      </h2>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={handleDragEnd}
        className="flex items-center active:cursor-grabbing cursor-grab"
      >
        {imgs.map((img, i) => (
          <motion.div
            key={i}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
            animate={{ scale: imgIndex === i ? 0.95 : 0.9 }}
            transition={SPRING_OPTIONS}
            className="min-w-full h-[30vh] sm:h-[80vh] rounded-xl shadow-lg"
          ></motion.div>
        ))}
      </motion.div>

      <div className="mt-6 flex justify-center gap-2">
        {imgs.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgIndex(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === imgIndex ? "bg-indigo-400" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CertificatesCarousel;
