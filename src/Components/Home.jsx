import React from 'react'
import "./home.css"

export default function Home() {
    return (
        <div className='h-min w-[80vw] flex flex-col justify-start items-start gap-y-2  mx-auto pt-32 pb-20' id='home'>
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
            <div className='px-5 name py-5'>
                <h1 className='text-4xl font-semibold imp'>Chaman Chaudhary</h1>
                <h3 className='text-2xl font-semibold imp'>Full Stack Developer</h3>
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
            <a href='https://drive.google.com/file/d/1e6gl7O_nKF66htmMyPqF2rk1XZHEMjN6/view?usp=drivesdk' download className='mt-28 border-[1px] border-gray-600 hover:border-gray-400 border-b-2 border-b-blue-400 hover:border-b-blue-400 h-12 w-full md:[32%] lg:w-[32%] flex justify-center items-center gap-2 text-xl hover:text-white cv'><i class="fa-solid fa-download"></i>Download CV</a>
        </div>
    )
}
