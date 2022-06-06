import React from 'react'
import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My Name is Molefe</h2>
            <div className='prompt'>
                <p>
                    A software developer with a passion for learning
                </p>
                <a href = {"https://www.linkedin.com/in/kgothatso-molefe-078a0020b/"} target="_black" > <LinkedInIcon /></a>
                <a href = {"mailto:molefe.lebo7@gmail.com"} ><EmailIcon /></a>
                <a href = {"https://github.com/laliga7"} target="_black"><GitHubIcon /></a>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>
                        ReactJS, HTML, CSS, React Native, NPM, Bootsrap, materialUI
                    </span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>
                        NodeJS, .NET, ExpressJS, MySQL, MongoDB, MS SQL
                    </span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>
                        JavaScript, Java, Python, C#, C++
                    </span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home