import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const texts = [
    "Kolay iade",
    "Yeni Üyeliklerde %10 İndirim Fırsatları",
    "Yepyeni Markalarımız sizlerle",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Metinleri değiştirmek için zamanlayıcı
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500); // Her 3 saniyede bir metin değişir

    return () => clearTimeout(timeout);
  }, [index, texts.length]);

  return (
    <div className="w-full bg-[#FCF7F2]  h-10 flex items-center justify-center  tracking-wider font-bold pl-20 text-sm md1000:text-xs md1000:pt-2 min760:h-8 min500:pl-1">
      <div
        style={{
          position: "relative",
          height: "20px",
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span key={texts[index]}>{texts[index]}</motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Banner;
