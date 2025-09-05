'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../Assets/Coder.json'
import animeBackGround from '../Assets/Backgroundsparkles.json'
import { ReactTyped } from 'react-typed'
import {motion} from 'framer-motion'
const HeroSection = () => {
  return (
    <section className='w-full min-h-[500px] h-screen flex items-center justify-center flex-col md:flex-row relative'>
        <Lottie className='absolute inset-0 -z-10 rotate-90 scale-150 md:scale-100' animationData={animeBackGround} loop={true} />
        <div className='w-full h-full flex items-center lg:items-start justify-center lg:justify-center flex-col gap-4'>
            <ReactTyped className='text-4xl font-bold text-center' strings={['سلام من رضا هستم!', 'توسعه دهنده نکست جی اس', 'عاشق رابط کاربری لوکس و مدرن',]} typeSpeed={100} backSpeed={70} loop />
        </div>
        <div className='w-full h-full relative max-md:mb-40'>
            <Lottie className='absolute inset-0' animationData={animationData} loop={true} />
        </div>
        <a href="#about"  className='w-[32px] h-[48px] absolute bottom-20  border border-slate-400 p-2 rounded-full flex items-center justify-end'>
            <motion.span initial={{y : 0}} animate={{y : -10}} transition={{duration : 0.7, repeat : Infinity, repeatType : 'reverse'}} className='w-[14px] h-[14px] bg-slate-700 rounded-full' />
        </a>
    </section>
  )
}

export default HeroSection