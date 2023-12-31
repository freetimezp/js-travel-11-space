"use client";
import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import MotionDiv from '@/components/MotionDiv';
import Background from '@/components/Background';

import mobile from '@/assets/crew/background-crew-mobile.jpg';
import tablet from '@/assets/crew/background-crew-tablet.jpg';
import desktop from '@/assets/crew/background-crew-desktop.jpg';
import PageTitle from '@/components/PageTitle';

import { members } from '@/app/crew/utils/utils';
import { usePrevious } from '@mantine/hooks';
import { SLIDE_LEFT, SLIDE_RIGHT } from '@/lib/data';
import Image from 'next/image';

function Crew() {
    const [actual, setActual] = useState(0);
    const previous = usePrevious(actual);

    const member = useMemo(() => members[actual], [actual]);
    const variant = useMemo(() => {
        if (previous === undefined) return SLIDE_RIGHT;
        if (actual > previous) return SLIDE_LEFT;
        return SLIDE_RIGHT;
    }, [actual]);

    return (
        <MotionDiv>
            <Background
                mobile={mobile.src}
                tablet={tablet.src}
                desktop={desktop.src}
            />

            <main className='relative z-10 flex flex-col-reverse p-6 md:px-24 lg:pt-12 
                lg:min-h-[80vh] lg:grid lg:grid-cols-2'>
                <div className='flex flex-col-reverse relative z-10 lg:flex-col 
                    lg:justify-between'>
                    <div className='w-fit mx-auto mb-8 md:mx-0 md:-ml-10 hidden lg:block'>
                        <PageTitle number={3} title="Meet Your Crew" />
                    </div>
                    <div className='text-secondary text-center lg:text-left'>
                        <h4 className='uppercase mb-4 text-[16px] lg:text-[32px]'>
                            {" "}
                            {member.role}{" "}
                        </h4>
                        <h3 className='uppercase text-white mb-7 text-[24px] lg:text-[56px]'>
                            {" "}
                            {member.name}{" "}
                        </h3>
                        <p className='leading-relaxed lg:text-[18px]'>
                            {" "}
                            {member.description}{" "}
                        </p>
                    </div>
                    <div className='flex gap-x-6 my-8 justify-center lg:justify-start'>
                        {members.map(({ name }, index) => (
                            <div
                                key={index}
                                className={`w-3 aspect-square rounded-full transition-all 
                                cursor-pointer opacity-40 bg-white ${member.name == name && 'active'}
                                [&.active]:opacity-100 duration-400 [&:not(.active)]:hover:opacity-100`}
                                onClick={() => setActual(index)}
                            />
                        ))}
                    </div>
                </div>
                <motion.div className='border-b border-white/50 w-full md:fixed md:bottom-0
                    md:right-0 md:w-screen md:h-[532px] lg:h-[712px]'>
                    <AnimatePresence>
                        <motion.div
                            className='block mx-auto w-auto h-[222px] md:h-full lg:mx-0
                            lg:ml-auto lg:mr-20'
                            key={member.name}
                            variants={variant}
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                className='block mx-auto w-auto h-[222px] md:h-full lg:mx-0
                                    lg:ml-auto lg:mr-20'
                            />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
                <div className='w-fit mb-[30vh] md:mb-0 mx-auto mb-8 md:mx-0 md:-ml-10 lg:hidden'>
                    <PageTitle number={3} title="Meet Your Crew" />
                </div>
            </main>
        </MotionDiv>
    );
};

export default Crew;
