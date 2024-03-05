'use client'
import { useState, useEffect } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";



const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <button className="p-2" onClick={toggleDarkMode}>
            {!isDarkMode ? <MdOutlineDarkMode fontSize={26} /> : <MdDarkMode fontSize={26} />}
        </button>
    );
};

export default DarkModeToggle;
