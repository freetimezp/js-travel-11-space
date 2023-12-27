"use client";
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
    </MotionDiv>
  )
}
