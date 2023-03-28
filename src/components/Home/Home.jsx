import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card1 from '../../cards/Card1';
import { useEffect } from 'react';
import Card2 from '../../cards/Card2';

const Home = ({ mode }) => {
    const [perPage, setPerPage] = useState(4);

    useEffect(() => {
        if (window.matchMedia("(max-width: 900px)").matches) {
            setPerPage(2);
        }
        if (window.matchMedia("(max-width: 650px)").matches) {
            setPerPage(1);
        }
    }, []);

    return (
        <>
            <div className={mode === "Light" ? 'home-main' : "home-main dark-main"}>
                <div className="home1 pb-5">
                    <div className="home11 flex items-center justify-between">
                        <div className="home111">
                            <img src={mode === "Light" ? "/images/p10.png" : "/images/o1.png"} alt="" />
                        </div>
                        <div className="home112">
                            <p>Our brand was created by a group of friends that share a passion for streetwear and its culture for the people who value quality, sustainability, and individuality.</p>
                        </div>
                        <div className="home113">
                            <img src="/images/p9.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="home2">
                    <div className="home21">
                        <div className="home211 w-full">
                            <img className='w-full' src={mode === 'Light' ? "/images/p1.png" : "/images/o3.png"} alt="" />
                        </div>
                        <div className="home212 relative flex justify-center items-center">
                            <div className="home2121">
                                <img src="/images/p4.png" alt="" className="img1" />
                                <img src="/images/p7.png" alt="" className="img2" />
                            </div>
                            <div className="home2122">
                                <img src="/images/p6.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="home3">
                    <div className="home31">
                        <div className="home311 mb-6">
                            <h1 className='mb-0'>
                                <span className="grey">GRAB</span>
                                <span className="cus mx-2 relative">
                                    <img src="/images/p5.png" alt="" />
                                    GRAB
                                </span>
                                <span className="grey">GRAB</span>
                            </h1>
                            <p>Grab the T-shirts that express you perfectly with NFTs as a certificate of ownership right now.</p>
                        </div>
                        <div className="home312">
                            <Splide aria-label="My Favorite Images" options={{
                                perPage,
                                perMove: 1,
                                // autoplay: true,
                                loop: true
                            }}>
                                <SplideSlide>
                                    <Card1 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card1 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card1 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card1 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card1 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card1 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card1 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card1 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card1 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card1 />
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                </div>

                <div className="home4">
                    <div className="home41 w-full">
                        <div className="home411 mb-14 text-start">
                            <div className="home4111 mb-3 flex items-center">
                                <div className="home41111 mr-10">
                                    <h3>ABOUT</h3>
                                    <h2 className='relative'>
                                        BEYOND
                                        <img className='absolute' src="/images/p11.png" alt="" />
                                    </h2>
                                </div>
                                <div className="home41112 ml-2 relative">
                                    <div className="home411120 absolute"></div>
                                    <div className="home411121">
                                        <img src="/images/p12.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="home4112">
                                <p>BEYOND GRAF is here to encourage self-expression with anything you wear, leaving conventional clothing behind. A fusion of streetwear and art that will tell your unique tale, and a place where talented creative minds can showcase their talents.</p>
                            </div>
                        </div>
                        <div className="home412 text-end">
                            <div className="home4120 relative w-fit">
                                <div className="home4121 absolute">
                                    <img className='img11' src="/images/p5.png" alt="" />
                                    <img className='img21' src="/images/p13.png" alt="" />
                                </div>
                                <p>We celebrate the diversity of street culture, attract individuals with unique, eye-catching graphics, and will revolutionize the fashion industry with self-expressive streetwear.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;


/* 



*/