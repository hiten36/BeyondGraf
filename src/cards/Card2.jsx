import React from 'react'

const Card2 = () => {
  return (
    <>
        <div className="home2-card relative">
            <div className="home2-card1 h-full w-full absolute"></div>
            <div className="home2-card2">
                <img src="/images/q15.png" alt="" />
                <button className='flex items-center justify-center'>
                    <span className='mr-3'>View All</span>
                    <img src="/images/p12.png" alt="arrow" />
                </button>
            </div>
        </div>
    </>
  )
}

export default Card2;
