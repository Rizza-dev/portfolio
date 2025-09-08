"use client";
import React from "react";
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <section
      id="about"
      className="h-screen pt-20 w-full relative flex flex-col justify-center items-center"
    >
      <div className="relative w-full h-full flex items-center justify-between flex-col lg:flex-row">
        <div className="w-full h-full flex items-start justify-center">
          <div className="w-96 h-[430px] lg:w-[600px] lg:h-[600px] overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center  animate-blob"
              style={{ backgroundImage: "url('/rizza.png')" }}
            />
            <style jsx>{`
              .animate-blob {
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                animation: blob 6s infinite ease-in-out;
              }
              @keyframes blob {
                0%,
                100% {
                  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                }
                50% {
                  border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                }
              }
            `}</style>
          </div>
        </div>
        <div className="w-2/3 h-full mt-8 text-center max-w-screen-sm relative">
          <motion.h2
            initial={{ y: 0 }}
            animate={{ y: -10 }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-2xl lg:text-4xl font-bold "
          >
            {" "}
            این منم!! <br />{" "}
            <span className="text-lg lg:text-xl font-light leading-[30px]">
              توسعه‌دهنده وب با تمرکز روی طراحی سایت‌های مدرن و لوکس. همیشه
              دنبال این بودم که تجربه‌ی آنلاین، فراتر از یک صفحه‌ی ساده باشه و
              حس خاصی منتقل کنه
            </span>
          </motion.h2>
        </div>
      </div>
      <a
        href="#overview"
        className="w-[32px] h-[48px] absolute bottom-4 border border-slate-400 p-2 rounded-full flex items-center justify-end"
      >
        <motion.span
          initial={{ y: -10 , opacity:1 }}
          animate={{ y: 10 , opacity:0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-[14px] h-[14px] bg-slate-700 rounded-full"
        />
      </a>
    </section>
  );
};

export default AboutSection;
