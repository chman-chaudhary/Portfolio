import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {

    const projects = [
        {
            name: "Job Portal",
            skills: ["React", "Node JS", "Express", "Mongodb"],
            github: "https://github.com/chman-chaudhary/Job-Portal",
            card: "card-1",
        },
        {
            name: "Globe Stay",
            skills: ["Node JS", "Express", "Mongodb", "BootStrap"],
            github: "https://github.com/chman-chaudhary/Globe-Stay",
            card: "card-2",
        },
        {
            name: "Currency Converter",
            skills: ["Html", "Css", "JavaScript"],
            github: "https://github.com/chman-chaudhary/Currency-Converter",
            card: "card-3",
        },
        {
            name: "Snake Game",
            skills: ["Html", "Css", "JavaScript"],
            github: "https://github.com/chman-chaudhary/Snake-Game",
            card: "card-4",
        },
        {
            name: "Weather App",
            skills: ["React", "JavaScript", "Tailwind"],
            github: "https://github.com/chman-chaudhary/WeatherApp",
            card: "card-5",
        },
        {
            name: "Stone Paper Scissor",
            skills: ["Html", "Css", "JavaScript"],
            github: "https://github.com/chman-chaudhary/Stone-Paper-Scissor",
            card: "card-6",
        },
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
