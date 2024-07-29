import React from 'react'

export default function Contact() {

    function openGmailCompose() {
        const email = "chaudharychaman1506@gmail.com";
        const subject = "Hello!";
        const body = "I wanted to reach out to you regarding...";
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailURL, '_blank');
    }


    const socials = [
        {
            name: "GitHub",
            icon: "fa-brands fa-github text-xl imp",
            link: "https://github.com/chman-chaudhary",
        },
        {
            name: "LinkedIn",
            icon: "fa-brands fa-linkedin-in text-xl imp",
            link: "https://www.linkedin.com/in/chman-chaudhary/"
        },
        {
            name: "Twitter",
            icon: "fa-brands fa-x-twitter text-xl imp",
            link: "https://twitter.com/chman_chaudhary"
        },
    ]

    return (
        <div className='w-[80vw] mx-auto' id='contact'>

            <div className='mb-20'>
                <span className='heading'>On The Web -</span>
                <h3 className='text-2xl font-semibold pt-2 imp' >More of my works</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 h-fit mt-5'>
                    {socials.map((social, i) => {
                        return <a href={social.link} target='_blank' className='border-[1px] border-gray-600 hover:border-gray-400 border-b-2 border-b-blue-400 hover:border-b-blue-400 flex justify-between items-center px-5 h-[50px]' key={i}>
                            <i className={social.icon}></i>
                            <span className='font-medium imp'>{social.name}</span>
                        </a>
                    })}
                </div>
            </div >

            <div className='mb-40'>
                <span className='heading'>Contact -</span>
                <h3 className='text-2xl font-semibold pt-2 imp' >Look Who's Here</h3>
                <p className='leading-7 text-md text-justify' >The fastest to get in touch with me is to send me a message on <a href='https://www.linkedin.com/in/chman-chaudhary/' target='_blank' className='text-blue-400'>LinkedIn</a> or a DM on <a href='https://twitter.com/chman_chaudhary' target='_blank' className='text-blue-400'>Twitter</a>.</p >
                <p className='leading-7 text-md text-justify' >Whether you have a question or just want to say "Hi", I'll try my best to get back to you.</p >
                <div onClick={openGmailCompose} className=' mt-4 border-[1px] border-gray-600 hover:border-gray-400 border-b-2 border-b-blue-400 hover:border-b-blue-400 h-12 w-full md:[32%] lg:w-[32%] flex justify-center items-center gap-2 text-xl hover:text-white mail'><i className="fa-solid fa-envelope text-2xl mails"></i>Mail</div>
            </div >

            <div className='my-24'>
                <span className='text-sm'>&copy; 2024 Chaman Chaudhary</span>
            </div>
        </div>
    )
}
