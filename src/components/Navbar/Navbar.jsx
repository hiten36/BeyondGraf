import React from 'react'

const Navbar = ({ setMode, mode }) => {
    const toggleMode = () => {
        if(mode==="Light")
        {
            setMode("Dark");
        }
        else
        {
            setMode("Light");
        }
    };

    return (
        <>
            <nav className={mode==="Light" ? "navbar" : "navbar dark-navbar"}>
                <div className="nav1 flex justify-center">
                    <img src={mode==="Light" ? "/images/p3.png" : "/images/o2.png"} alt="logo" />
                </div>
                <div className="mode">
                    <button onClick={toggleMode}>{mode==="Light" ? "Dark" : "Light"} Mode</button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
