import React from 'react'

export default function Banner() {
    return (
        <div className='flex flex-col lg:flex-row gap-6 justify-center items-center lg:mx-16'>
            <p className='uppercase text-center dark:text-lightYellow lg:text-start font-medium text-6xl lg:w-3/4 lg:text-8xl lg:order-1'>Hey, I'm Carlos Mejía a Software Developer</p>
            <div className='w-96 h-96 lg:w-96 lg:order-2'>
                <img src='https://placehold.co/600x400.png' className='w-full h-full' />
            </div>
        </div>
    );
}
