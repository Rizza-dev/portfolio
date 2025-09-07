"use client";

import React, { useRef } from "react";
import { motion, scale, useInView } from "framer-motion";
import { project } from "@/assets";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section ref={ref} id="work" className="w-full lg:mt-20 mt-10">
      <div >
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xl text-slate-500 font-light"
        >
          نمونه کارهای من
        </motion.h3>
        <motion.h4
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mt-4"
        >
          پروژه ها
        </motion.h4>
        <motion.p
          className="max-w-3xl leading-[30px] mt-4 text-slate-600 font-light text-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          هر پروژه برای من فقط یک وب‌سایت نیست، بلکه فرصتیه برای خلق تجربه‌ای
          متفاوت و خاص. با ترکیب طراحی مدرن، سرعت بالا و جزئیات لوکس، تلاش
          می‌کنم هویت برند رو زنده کنم و نتیجه‌ای ماندگار بسازم. در این بخش بخشی
          از کارهایی که تا امروز انجام دادم رو می‌بینید
        </motion.p>
        <div className="flex flex-wrap  gap-10  mt-20 w-full">
          {project.map((item) => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ image, name, link, description, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: id * 0.5, type: "spring" }}
      
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="sm:w-[360px] h-[500px] w-full p-5 rounded-2xl border-2 text-black"
      >
        <div className="w-full h-[230px] aspect-video relative">
          <Image src={image} alt={name} fill className="object-cover rounded-lg " priority={true} />
        </div>
        <h5 className="mt-4 text-lg">
          {name}
        </h5>
        <p className="leading-[30px] mt-4 font-light text-slate-700">
          {description}
        </p>
      </Tilt>
    </motion.div>
  );
};

export default WorkSection;
