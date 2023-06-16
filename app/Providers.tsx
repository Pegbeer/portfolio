'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from "next-themes";
import { useTheme } from 'next-themes';

export default function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    const [mounted,setMounted] = useState(false);

    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() =>{
        setMounted(true);
    },[])

    if(!mounted){
        return <>{children}</>
    }

    return (
        <ThemeProvider attribute="class">{children}</ThemeProvider>
    );
}