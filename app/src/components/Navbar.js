import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder"

function Navbar() {
const [expendNavbar, setExtendNavbar] = useState(false);

const locaiton = useLocation();

useEffect(() =>{
    setExtendNavbar(false);
}, [locaiton]);

  return (
    <div className="navbar" id={expendNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button 
                onClick={() =>{
                    setExtendNavbar((prev) => !prev);
            }}
            >
                <ReorderIcon />
            </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar