import React, { useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card1 from '../../cards/Card1';
import { useEffect } from 'react';
import Card2 from '../../cards/Card2';

const Home = ({ mode }) => {
    const [perPage, setPerPage] = useState(4);
    const [perPage1, setPerPage1] = useState(2);

    useEffect(() => {
        if (window.matchMedia("(max-width: 900px)").matches) {
            setPerPage(2);
        }
        if (window.matchMedia("(max-width: 650px)").matches) {
            setPerPage(1);
            setPerPage1(1);
        }
    }, []);

    const initFunc = () => {
        document.querySelector('.init-pop').classList.add('init-pop-active');
        const BG=document.querySelector('.bg');
        BG.style.display='none';
    };

    const func=(e)=>{
        const BG=document.querySelector('.bg');
        BG.style.left = `${e.clientX}px`;
        BG.style.top = `${e.clientY}px`;
    };

    return (
        <>
            {/* <div className="init-pop">
                <div className="init-pop1">
                    <img src="/images/q19.png" alt="" />
                </div>
                <button onClick={initFunc} className='init-btn'>START</button>
            </div> */}
            <div onMouseMove={func} class="container1 init-pop">
                <div class="hex"></div>
                <div class="bg"></div>
                <div className="init-pop1">
                    <img src="/images/o3.png" alt="" className="pop-img1" />
                    <div className="init-pop11">
                        <img src="/images/q21.png" alt="" />
                        <button onClick={initFunc} className='init-btn'>START</button>
                    </div>
                    <div className="flex justify-between items-center absolute bottom-0 w-full init-pop2">
                        <img src="/images/q6.png" alt="" />
                        <img src="/images/q5.png" alt="" />
                    </div>
                </div>
            </div>

            <div className={mode === "Light" ? 'home-main' : "home-main dark-main"}>
                <div className="home1">
                    <div className="home11 flex items-center justify-between">
                        <div className="home111">
                            <img src="/images/q2.png" alt="" />
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
                    <div className="home21 flex items-center">
                        <div className="home211 relative">
                            <img className='w-full' src={mode === 'Light' ? "/images/q10.png" : "/images/q12.png"} alt="" />
                            <img className='absolute img' src="/images/q9.png" alt="" />
                        </div>
                        <div className="home212">
                            <Splide aria-label="My Favorite Images" options={{
                                perPage: perPage1,
                                perMove: 1,
                                // autoplay: true,
                                loop: true
                            }}>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                </div>

                <div className="home4 relative">
                    <div className="home41 w-full">
                        <div className="home411 mb-14 text-start">
                            <div className="home4111 flex items-center">
                                <div className="home41111 mr-10">
                                    <h3>ABOUT</h3>
                                    <h2>BEYOND</h2>
                                </div>

                                <div className="home41112 ml-2 relative">
                                    <div className="home411120 absolute"></div>
                                    <div className="home411121">
                                        <img src="/images/p12.png" alt="" />
                                    </div>
                                </div>

                                <div className="home4112">
                                    <p>BEYOND GRAF is here to encourage self-expression with anything you wear, leaving conventional clothing behind. A fusion of streetwear and art that will tell your unique tale, and a place where talented creative minds can showcase their talents.</p>
                                </div>
                            </div>
                        </div>
                        <div className="home412 flex items-center">
                            <div className="home4121">
                                <div className="img41">
                                    <img src="/images/q16.png" alt="" />
                                </div>
                                <div className="img42 flex justify-end">
                                    <img src="/images/q1.png" alt="" />
                                </div>
                            </div>
                            <div className="home4122">
                                <p>We celebrate the diversity of street culture, attract individuals with unique, <span>eye-catching graphics</span>, and will revolutionize the fashion industry with self-expressive streetwear.</p>
                            </div>
                        </div>
                    </div>
                    <div className="home42">
                        <img className='img-01 absolute' src="/images/q11.png" alt="" />
                        <img className='img-02 absolute' src="/images/q11.png" alt="" />
                    </div>
                </div>

                <div className="home3">
                    <div className="home31">
                        <div className="home311 flex justify-between items-start">
                            <div className="home3111">
                                <p>Grab the T-shirts that express you perfectly with NFTs as a certificate of ownership right now.</p>
                                <div className="home31111 flex">
                                    <button onClick={() => {
                                        document.getElementById('sp1-left').click();
                                    }} className="left-btn">
                                        <img src="/images/p12.png" alt="" />
                                    </button>
                                    <button onClick={() => {
                                        document.getElementById('sp1-right').click();
                                    }} className="right-btn">
                                        <img src="/images/p12.png" alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className='home3112'>
                                <h3>CURATED</h3>
                                <h2 className='relative'>
                                    <span>COLLECTIONS</span>
                                    <img className='absolute' src="/images/p11.png" alt="" />
                                </h2>
                            </div>
                        </div>
                        <div className="home312">
                            <Splide aria-label="My Favorite Images" hasTrack={false} options={{
                                perPage,
                                perMove: 1,
                                // autoplay: true,
                                loop: true
                            }}>
                                <SplideTrack>
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
                                </SplideTrack>
                                <div className="splide__arrows sp1-div">
                                    <button id="sp1-left" className="btn btn2 splide__arrow--prev">
                                    </button>
                                    <button id="sp1-right" className="btn btn2  splide__arrow--next">
                                    </button>
                                </div>
                            </Splide>
                        </div>
                    </div>
                </div>

                <div className="home5">
                    <div className="home51">
                        <div className="home511">
                            <h1>ROADMAP</h1>
                        </div>
                        <div className="home512 flex justify-center">
                            <h1 className='relative'>
                                <span>2021</span>
                                <img className='absolute bottom-0' src="/images/q17.png" alt="" />
                            </h1>
                            <div className="home5121 flex">
                                <div className="home51211 flex flex-col justify-between mr-10">
                                    <div className="home512111">
                                        <h2>Q3</h2>
                                    </div>
                                    <div className="home512111 home512112">
                                        <h2>Q3</h2>
                                    </div>
                                </div>

                                <div className="home51212 flex">
                                    <div className="home512121 flex justify-between flex-col items-center">
                                        <div className="home5-dot"></div>
                                        <div className="home5-dot"></div>
                                        <div className="home5-dot"></div>
                                    </div>
                                    <div className="home512122">
                                        <div className="home5-i">
                                            <h3 className='uppercase'>beyond graf project </h3>
                                            <p>A fusion of streetwear and art that will tell your unique tale, and a place where talented creative minds can showcase their talents.</p>
                                        </div>
                                        <div className="home5-i">
                                            <h3 className='uppercase'>beyond graf project </h3>
                                            <p>A fusion of streetwear and art that will tell your unique tale, and a place where talented creative minds can showcase their talents.</p>
                                        </div>
                                        <div className="home5-i">
                                            <h3 className='uppercase'>beyond graf project </h3>
                                            <p>A fusion of streetwear and art that will tell your unique tale, and a place where talented creative minds can showcase their talents.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
