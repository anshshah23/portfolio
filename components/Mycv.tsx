import React from 'react'
import { FaFileDownload } from 'react-icons/fa'
import '@/components/styles/style.css'
import { Button } from './ui/MovingBorders'
import { FaEye } from 'react-icons/fa6'

const Mycv = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "https://drive.google.com/uc?export=download&id=14SVSVwtZ-jmlT8jr49MBGB3c-YKKjTV3";
        link.download = "Ansh_Shah_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleView = () => {
        window.open("https://drive.google.com/file/d/14SVSVwtZ-jmlT8jr49MBGB3c-YKKjTV3/view?usp=sharing", "_blank");
    };

    return (
        <>
            <div className=''>
                {/* <h1 className="heading">
                    My <span className="text-purple">CV</span>
                </h1> */}
                {/* <p className="text-center sm:text-left text-xl sm:text-3xl pt-8">
                    Hi, my name is <b className="text-purple">Ansh Shah</b> and I am from Mumbai, India. I&apos;m a <b className="text-purple">Frontend Web Developer</b> and a Third-Year
                    student pursuing <b className="text-purple">BTech in Computer Engineering</b>.
                    <br />
                    <br />
                    I love to create projects with beautiful designs and apply my own touch to them. You can check out some of my work in the projects
                    section. Proficient in diverse technologies, seeking opportunities to innovate and contribute effectively to projects.
                    <br />
                    <br />
                    I am <b className="text-purple">open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are at the bottom.
                    <br />
                    <br />
                    Apart from coding, I love to read novels, paint, design, and do photography in my free time.
                </p> */}
                <div className="flex flex-col sm:flex-row justify-evenly items-center mx-10">
                    <button
                        onClick={handleDownload}
                        className="about-button relative flex items-center justify-center font-bold py-2 px-4 rounded transition duration-250 ease-in-out overflow-hidden"
                    >
                        Download CV <FaFileDownload className="ml-2" />
                        <span className="absolute inset-0 bg-black opacity-0 transition-opacity duration-250"></span>
                    </button>
                    <button
                        onClick={handleView}
                        className="about-button relative flex items-center justify-center font-bold py-2 px-4 rounded transition duration-250 ease-in-out overflow-hidden"
                    >
                        View CV <FaEye className="ml-2" />
                        <span className="absolute inset-0 bg-black opacity-0 transition-opacity duration-250"></span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Mycv