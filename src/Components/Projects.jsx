import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {

    const projects = [
         {
            name: "GLA Codify",
            skills: ["NEXT.js", "TypeScript", "Tailwind", "Shadcn"],
            github: "https://github.com/chman-chaudhary/GLA-Codify-Ts",
            card: "card-1",
        },
        {
            name: "Job Portal Application",
            skills: ["MERN", "Tailwind", "UI/UX"],
            github: "https://github.com/chman-chaudhary/Job-Portal",
            card: "card-2",
        },
        {
            name: "Globe Stay",
            skills: ["Node JS", "Express", "Mongodb", "BootStrap"],
            github: "https://github.com/chman-chaudhary/Globe-Stay",
            website: "https://globe-stay.onrender.com/listings",
            card: "card-3",
        },
        {
            name: "Code Converter",
            skills: ["AI", "Next.js", "Shadcn Ui"],
            github: "https://github.com/chman-chaudhary/JavaScript-to-Python",
            website: "https://convertyourcode.vercel.app",
            card: "card-4",
        },
        {
            name: "Portfolio",
            skills: ["React", "Tailwind", "JavaScript"],
            github: "https://github.com/chman-chaudhary/Portfolio",
            website: "https://portfolio-chaman-chaudhary.vercel.app/",
            card: "card-5",
        },
        {
            name: "Weather App",
            skills: ["React", "JavaScript", "Tailwind"],
            github: "https://github.com/chman-chaudhary/WeatherApp",
            website: "https://weather-app-ashy-beta.vercel.app/",
            card: "card-6",
        }
    ]

    return (
        <div className='h-min pb-10 mx-[10%] my-[8%]' id='projects'>
            <span className='heading'>Projects -</span>
            <h3 className='text-2xl font-semibold pt-2 pb-4 imp'>Stuff I've Worked On</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 h-fit'>
                {projects.map((project, i) => {
                    return <ProjectCard project={project} key={i} />
                })}
            </div>
        </div>
    )
}
