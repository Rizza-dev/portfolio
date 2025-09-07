"use client";
import React, { useRef } from "react";
import { skils } from "@/assets";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
const OverView = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  return (
    <section
      id="overview"
      className="pt-20 h-fit w-full  flex flex-col items-center justify-between pb-20 gap-20"
    >
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
          transition={{ duration: 0.5 }}
          className="text-start w-full text-5xl font-bold"
        >
          بررسی اجمالی.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
          transition={{ duration: 0.5 }}
          className="mt-4 gap-2 flex flex-col items-start w-full leading-8 max-w-screen-xl font-light text-lg text-slate-800"
        >
          <p className="w-full ">
            توسعه‌دهنده وب هستم با تمرکز روی ساخت وب‌سایت‌های مدرن و لوکس با
            {"  "}
            <span className="">Next.js و React.</span>
          </p>

          <p className="w-full ">
            تخصصم خلق تجربه‌های دیجیتالیه که فقط یک وب‌سایت ساده نیستن؛ بلکه
            ترکیبی از طراحی زیبا، سرعت بالا و تعامل جذاب هستن.
          </p>

          <p className="w-full ">
            هدفم اینه که تجربه‌ی آنلاین رو از حالت عادی فراتر ببرم و فضایی ایجاد
            کنم که حس لوکس و متفاوت بودن رو به کاربر منتقل کنه.
          </p>
        </motion.div>
      </div>

      <motion.div ref={ref} className="grid grid-cols-2 gap-4 lg:gap-8 gap-y-6 md:grid-cols-4  ">
        {skils.map((item) => (
          <Tilt key={item.id} className="shadow-lg shadow-violet-300/30">
            <motion.div
              
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.3,
                delay: item.id * 0.3,
                ease: "easeIn",
              }}
              className="p-[2px] bg-gradient-to-b from-[#6830E6] to-[#107FE0] rounded-lg"
            >
              <div className="bg-[#F6F7FF] py-4 px-10 flex items-center justify-between flex-col gap-6 rounded-lg overflow-hidden">
                <Image width={180} height={180} src={item.icon} alt="" />
                <div className="text-center text-[#232AAC]">
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="text-lg font-bold">{item.sub}</p>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </motion.div>
    </section>
  );
};

export default OverView;
