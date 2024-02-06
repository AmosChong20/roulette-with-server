import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Prize({ prize }) {
    const [openWindow, setOpenWindow] = useState(false);

    useEffect(() => {
        if (prize)
            setOpenWindow(true);
    }, [prize]);

    return (
        openWindow ?
            <div className="absolute top-48 z-10 py-5 text-center max-w-md w-1/2 h-1/3 flex flex-col gap-2 justify-center rounded overflow-hidden shadow-lg font-lover bg-[url('../public/lover.jpeg')]">
            <div className="font-bold text-3xl mb-5">Congratulations! You have won</div>
            <div className="font-bold text-7xl mb-2">{prize}</div>
            <svg onClick={() => setOpenWindow(false)} className="absolute top-2 right-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
         </div>
         : null
    );
};
