import React from 'react';
 import "./footer.css";
import { Link } from 'react-router-dom';

export default function Footer() {
        return (
        <div className='mainFooter'>
            <ul className="nav" >
                <li className="nav-item">
                     <Link to='/' className="nav-link" style={{ color: "yellow" }} >Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link" style={{color:"yellow"}} >About</Link>
                </li>
                <li className="nav-item">
                        <a href='https://drive.google.com/file/d/16HDY5S2fFpnVwYM5YM28dXGvyk2hi3Db/view?usp=sharing' lassName="nav-link" style={{ color: "yellow" }}>Resume</a>
                </li>
                <li className="nav-item">
                        <a href='https://www.linkedin.com/in/ajay-jangra/' lassName="nav-link" style={{ color: "yellow" }}>Linked-In</a>
                </li>
                <li className="nav-item">
                        <a href='https://github.com/Ajay-Jangra' lassName="nav-link" style={{ color: "yellow" }}>GitHub</a>
                </li>
                     
            </ul>
            <p style={{textAlign:"center",margin:"10px",fontSize:"16px"}}>CopyRight @ All rights are reserved 2023</p>
        </div>
    );
}