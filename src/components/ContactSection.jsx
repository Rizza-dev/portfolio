"use client";
import Lottie from "lottie-react";
import React, { useRef } from "react";
import animateData from "../Assets/tech.json";
import { motion, useInView } from "framer-motion";
const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px", once: true });
  return (
    <section id="contact" className=" mt-10 relative">
      <div className="flex w-full h-full items-center justify-center flex-col lg:flex-row">
        <motion.div
          ref={ref}
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" relative"
        >
          <Lottie animationData={animateData} />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:w-2/3 w-full h-full flex items-center justify-center"
        >
          <form className="w-full max-w-96 h-fit px-4 py-6 border bg-cyan-950 rounded-2xl text-white">
            <p className="text-4xl mb-8">تماس.</p>
            <label className="mt-10" htmlFor="name">
              نام شما
            </label>
            <input
              className="block mt-2 mb-6 w-full py-2 px-4 bg-transparent border-slate-500 border rounded-lg outline-none"
              type="text"
              name="name"
              id="name"
              placeholder="نام"
            />
            <label className="mt-10" htmlFor="email">
              ایمیل
            </label>
            <input
              className="block mt-2 mb-6 w-full py-2 px-4 bg-transparent border-slate-500 border rounded-lg outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="ایمیل"
            />
            <label className="mt-10" htmlFor="desc">
              توضیحات
            </label>
            <textarea
              className="block mt-2 w-full py-2 px-4 bg-transparent border-slate-500 border rounded-lg outline-none"
              type="text"
              name="desc"
              id="desc"
              placeholder="توضیحات"
            />

            <button className="bg-slate-200 text-slate-900 mt-6 px-8 mb-4 py-2 rounded-md font-medium">
              ارسال
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
