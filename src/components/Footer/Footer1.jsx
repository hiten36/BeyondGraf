import React from 'react'

const Footer1 = ({mode}) => {
  return (
    <>
        <footer className={mode==="Light" ? "footer-1" : "footer-1 dark-footer"}>
            <div className="footer-11 flex justify-between">
                <div className="footer-111">
                    <img src="/images/o2.png" alt="" />
                </div>
                <div className="footer-112">
                    <h5>ABOUT US</h5>
                    <p>Privacy policy</p>
                    <p>Terms of use</p>
                    <p>Cookie policy</p>
                </div>
                <div className="footer-113">
                    <h5>SUBSCRIBE</h5>
                    <p>Subscribe to our newsletter & get BeyondGraf’s latest update!</p>
                    <div className="foot-1131 relative">
                        <input type="text" placeholder='Email Address' />
                        <button className='absolute'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-12 flex justify-between items-center">
                <div className="footer-121">
                    <p className='text-white'>© 2022 BEYONDGRAF. ALL RIGHTS RESERVED.</p>
                </div>
                <div className="footer-122 flex">
                    <img src="/images/q6.png" alt="" />
                    <img src="/images/q5.png" alt="" />
                    <img src="/images/q4.png" alt="" />
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer1;
