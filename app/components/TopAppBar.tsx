'use client';

import Link from "next/link";
import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import { useTheme } from "next-themes";

export default function TopAppBar() {
    const [isOpen, setIsOpen] = useState(false);

    const { systemTheme, theme, setTheme } = useTheme();


    const toggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <nav className={`flex 
            flex-wrap 
            items-center 
            justify-between 
            gap-5
            p-6
            transition-all
            duration-500
            ease-out
            text-black
            lg:mx-14
            ${isOpen ? ' bg-darkGreen text-tan' : 'bg-transparent text-black dark:text-lightYellow'}`}>
            <Link href="/"><p className="text-lg font-bold">Portfolio</p></Link>
            <button
                className='block lg:hidden focus:outline-none'
                onClick={toggle}>
                <HamburgerIcon isActive={isOpen} darkActive={theme === 'dark'} />
            </button>
            <div
                className={`
                w-full
                flex-grow 
                lg:flex 
                lg:items-center
                lg:w-auto
                ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="lg:flex items-center justify-end flex-1 space-y-2 lg:space-y-0 lg:space-x-4 font-medium">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}