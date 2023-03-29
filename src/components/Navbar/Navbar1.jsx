import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar1 = ({mode, setMode}) => {
    const toggleMode=()=>{
        if(mode==='Light')
        {
            setMode('Dark');
        }
        else
        {
            setMode('Light');
        }
        document.querySelector('.nav-111-img1').classList.toggle('nav-img-active');
        document.querySelector('.nav-111-img2').classList.toggle('nav-img-active');
    };

    return (
        <>
            <nav className={mode==='Light' ? 'navbar-1': 'navbar-1 dark-navbar'}>
                <div className="nav-1 flex justify-between items-center">
                    <div className="nav-11 flex items-center">
                        <div className="nav-111 nav-110">
                            <img src="/images/o2.png" alt="" />
                        </div>
                        <div onClick={toggleMode} className="nav-111 nav-112 cursor-pointer flex">
                            <div className="nav-111-img1 nav-111-img nav-img-active">
                                <img className='invert-12' src="/images/q18.png" alt="" />
                            </div>
                            <div className="nav-111-img2 nav-111-img">
                                <img src="/images/q7.png" alt="" />
                            </div>
                        </div>
                        <div className="nav-111 nav-113">
                            <img src="/images/q6.png" alt="" />
                        </div>
                        <div className="nav-111 nav-114">
                            <img src="/images/q5.png" alt="" />
                        </div>
                        <div className="nav-111 nav-115">
                            <img src="/images/q4.png" alt="" />
                        </div>
                    </div>
                    <div className="nav-12 flex items-center">
                        <NavLink>Home</NavLink>
                        <NavLink>Lore</NavLink>
                        <button>Download Pitch</button>
                        <img src="/images/q3.png" alt="" />
                    </div>

                    <div className="mob-nav items-center hidden">
                        {/* <img src="/images/q3.png" alt="" /> */}
                        <svg onClick={() => {
                            document.querySelector('.mob-nav1').classList.toggle('mob-active');
                        }} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="mt-1.5 ml-3 bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                    <div className="mob-nav1">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">Lore</NavLink>
                        <button>Download Pitch</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar1;
