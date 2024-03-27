'use client';
import React, { useState } from 'react';

 export default function RippleButton({text}:{text:string}){
    const [ripple, setRipple] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setRipple(true);
        setTimeout(() => {
            setRipple(false);
        }, 800);
    };
    return (
        <button
            className={`px-6 py-2 bg-lightBrown text-bone dark:bg-tan dark:text-brown rounded-full font-medium hover:bg-lightBrown ${ripple ? 'ripple' : ''}`}
            onClick={handleClick}>
            {text}
        </button>
    );
};
