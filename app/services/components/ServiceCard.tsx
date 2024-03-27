'use client';
import React from 'react'
import { ReactSVG } from 'react-svg';

export default function ServiceCard({title,text,path}:{title:string; text:string;path:string}) {
    return (
        <div className='flex w-96 h-24 p-2 bg-bone hover:bg-lightGreen dark:bg-brown hover:dark:bg-darkGreen dark:text-tan rounded dark:drop-shadow-xl shadow-lightGreen'>
            <div className="flex justify-center items-center w-1/4">
                <ReactSVG src={path} className='w-12 h-12'/>
            </div>
            <div className="w-3/4">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className='font-medium text-sm'>{text}</p>
            </div>
        </div>
    )
}
