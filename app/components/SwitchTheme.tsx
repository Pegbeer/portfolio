'use client';

import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiBrightness4, mdiMoonWaningCrescent } from '@mdi/js';
import { useTheme } from 'next-themes';

export default function SwitchTheme() {
    const [mounted,setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() =>{
        setMounted(true);
    },[])

    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <>
            <div className="fixed bottom-8 right-8">
                <div
                    className="flex items-center gap-2 p-1 rounded-full border-solid border-gray-400 border-4 cursor-pointer">
                    {currentTheme === 'dark' ? (
                        <div onClick={() => setTheme('light')}>
                            <Icon path={mdiBrightness4} size={1} />
                        </div>
                    ) : (
                        <div onClick={() => setTheme('dark')}>
                            <Icon path={mdiMoonWaningCrescent} size={1} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}