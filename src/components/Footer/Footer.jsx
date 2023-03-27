import React from 'react'

const Footer = ({mode}) => {
  return (
    <>
        <footer className={mode==="Light" ? "footer" : "footer dark-footer"}>
            <div className="footer1 flex justify-center">
                <img src={mode==="Light" ? "/images/p3.png" : "/images/o2.png"} alt="logo" />
            </div>
        </footer>
    </>
  )
}

export default Footer;
