"use client";
import { motion } from "framer-motion";
import { SLIDE_LEFT } from "@/lib/data";

import Background from "@/components/Background";
import MotionDiv from "@/components/MotionDiv";

import mobile from '@/assets/home/background-home-mobile.jpg';
import tablet from '@/assets/home/background-home-tablet.jpg';
import desktop from '@/assets/home/background-home-desktop.jpg';

export default function Home() {
  return (
    <MotionDiv>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />

      <main className="relative z-10 min-h-[80vh] flex flex-col justify-evenly 
        items-center lg:flex-row lg:items-end lg:justify-between lg:p-32">
        <motion.div
          variants={SLIDE_LEFT}
          className="font-primary text-secondary text-center px-4 md:max-w-lg
            md:mx-auto lg:mx-0 lg:text-left"
        >
          <span className="nav-text text-lg uppercase lg:-translate-x-8 lg:text-3xl">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <h1 className="text-white my-6 uppercase font-secondary">
            Space
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Obcaecati neque doloremque possimus natus, porro asperiores
            iusto, culpa, dolorem voluptate iure ipsam eaque eius unde
            odit. Consectetur labore repudiandae nobis iure.
          </p>
        </motion.div>

        <motion.div className="bg-white w-48 h-48 rounded-full flex 
          items-center justify-center font-primary tracking-[1.25px]
          uppercase relative group md:w-60 md:h-60 lg:w-72 lg:h-72">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 
            -translate-y-1/2 w-[150%] h-[150%] bg-white/10 rounded-full 
            scale-50 group-hover:scale-100
            transition-all duration-700 ease-in-out cursor-pointer " />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 
            -translate-y-1/2 w-[50%] h-[50%] bg-black/80 rounded-full 
            scale-0 group-hover:scale-100
            transition-all duration-700 ease-in-out cursor-pointer " />
          <span className="relative z-10 text-primary text-lg md:text-3xl
            group-hover:text-white/90">
            Explore
          </span>
        </motion.div>
      </main>
    </MotionDiv>
  )
}
