import React from 'react'
import "./projectCard.css"

export default function ProjectCard({ project }) {
    return (
        <div className={`w-auto h-[280px] sm:h-[220px] md:h-[230px] lg:h-[300px] xl:h-[300px] flex flex-col justify-between ${project.card} card`}>
            <div className='flex justify-end gap-3 p-2'>
                <a href={project.github} target='_blank'><i className="fa-brands fa-github text-md sm:text-md md:text-lg lg:text-xl text-black bg"></i></a>
                <a href={project.website} target='_blank'><i className="fa-solid fa-link text-md sm:text-md md:text-lg lg:text-xl text-black bg"></i></a>
            </div>
            <div className='flex justify-center items-center'>
                <span className='text-2xl sm:text-lg md:text-lg lg:text-xl xl:text-3xl font-extrabold imp text-black bg'>{project.name}</span>
            </div>
            <div className='flex justify-around py-3 font-medium'>
                {project.skills.map((skill, i) => {
                    return <span key={i} className='imp text-black bg'>{skill}</span>
                })}
            </div>
        </div>
    )
}
