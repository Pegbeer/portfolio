import React from 'react'

export default function Banner() {
    return (
        <div className='flex flex-col flex-wrap mx-4 lg:flex-row dark:text-lightYellow gap-6 justify-center xl:justify-between items-center lg:mx-16'>
            <p className='uppercase text-center order-1 font-medium text-5xl sm:text-6xl md:text-6xl lg:text-center xl:text-start lg:text-7xl xl:text-8xl xl:w-3/5'>Hey, I'm Carlos Mejía a Software Developer</p>
            <div className='w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 xl:w-1/4 order-2'>
                <img src='https://placehold.co/600x400.png' className='w-full h-full' />
            </div>
            <p className='font-medium text-md text-justify order-3 sm:text-xl  md:text-2xl lg:text-2xl lg:max-w-2xl xl:text-start'>I'm a Salvadorean Full-Stack Developer focused on agile software development. I am passionate about building excellent software that improves the productivity of the organization.</p>
        </div>
    );
}