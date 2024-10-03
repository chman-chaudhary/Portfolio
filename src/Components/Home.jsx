import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js';
import "./home.css"
import ProfilePhoto from "../assets/ProfilePhoto.jpg"

export default function Home() {
    const typedTextRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Developer", "Coder", "Tech Enthusiast"],
            typeSpeed: 50,
            backSpeed: 35,
            loop: true,
        };

        const typed = new Typed(typedTextRef.current, options);
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='w-[80%] h-min lg:flex justify-between items-start pt-32 pb-20 mx-auto' id='home'>
            <div className='h-min w-fit flex flex-col justify-start items-start gap-y-2'>
                <div className='flex gap-2'>
                    <div className='lg line1'></div>
                    <div className='md line2'></div>
                    <div className='xsc line3'></div>
                </div>
                <div className='xl-4 line1'></div>
                <div className='flex gap-2'>
                    <div className='md line1'></div>
                    <div className='xss line2'></div>
                    <div className='sm line3'></div>
                    <div className='lg line4'></div>
                </div>
                <div className='flex gap-2'>
                    <div className='xl-2 line1'></div>
                    <div className='md line2'></div>
                    <div className='xsc line3'></div>
                    <div className='lg line4'></div>
                </div>
                <div className='flex gap-2'>
                    <div className='md line1'></div>
                    <div className='xss line2'></div>
                    <div className='sm line3'></div>
                    <div className='xl-2 line4'></div>
                </div>
                <div className='px-8 name py-5'>
                    <h1 className='text-4xl font-semibold imp'>Chaman Chaudhary</h1>
                    <h3 className='text-2xl font-semibold imp secHead'>I'm&nbsp;<span className="heading text-2xl" ref={typedTextRef}></span></h3>
                </div>
                <div className='flex gap-2'>
                    <div className='xl-3 line1'></div>
                    <div className='xsc line2'></div>
                </div>
                <div className='flex gap-2'>
                    <div className='lg line1'></div>
                    <div className='sm line2'></div>
                    <div className='xl-2 line4'></div>
                </div>
                <div className='flex gap-2'>
                    <div className='xl-2 line1'></div>
                    <div className='xsc line2'></div>
                    <div className='lg line3'></div>
                </div>
                <div className='flex gap-2'>
                    <div className='xl-4 line1'></div>
                    <div className='xss line2'></div>
                </div>
                <div className='flex gap-2'>
                    <div className='md line1'></div>
                    <div className='xss line2'></div>
                    <div className='xl-2 line3'></div>
                    <div className='sm line4'></div>
                </div>
                <a href='https://drive.google.com/file/d/1lVJIEL1yTb9HRCwGQmiu7tzWoT5IFqg0/view?usp=sharing' target='_blank' download className='mt-28 border-[1px] border-gray-600 hover:border-gray-400 border-b-2 border-b-blue-400 hover:border-b-blue-400 h-12 w-full md:[64%] lg:w-[64%] flex justify-center text-xl items-center gap-2 imp cv'><i class="fa-solid fa-download"></i>Resume</a>
            </div>
            <div className='lg:flex justify-center items-center hidden'>
                <img src={ProfilePhoto} className='h-[300px] my-10 lg:my-0 rounded-full' />
            </div>
        </div>
    )
}
