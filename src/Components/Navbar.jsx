import React from 'react'

export default function Navbar() {
    const bg = "bg-transparent hover:backdrop-blur-[10px] imp py-2 px-2 sm:px-4 md:px-4 lg:px-4 rounded-3xl navbar-links";
    return (
        <div className="flex items-center justify-center w-full">
            <div className="backdrop-blur-[2px] bg-[rgba(0,0,0,0.1)] flex items-start justify-center gap-1 md:gap-3 lg:gap-3 rounded-3xl z-50 imp fixed mt-20 w-min">
                <a href="#home" className={bg}>Home</a>
                <a href="#about" className={bg}>About</a>
                <a href="#projects" className={bg}>Projects</a>
                <a href="#skills" className={bg}>Skills</a>
                <a href="#contact" className={bg}>Contact</a>
            </div>
        </div>
    )
}
