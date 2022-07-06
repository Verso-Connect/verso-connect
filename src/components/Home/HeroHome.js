import React, { useState } from 'react';
import heroThumb from '../../assets/images/hero-thumb-6.png';

function HeroHome() {
    const [showVideo, setVideoValue] = useState(false);
    const handleShowVideo = (e) => {
        e.preventDefault();
        setVideoValue(!showVideo);
    };
    return (
        <>
            <section className="appie-hero-area appie-hero-5-area appie-hero-3-area">
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-lg-10">
                            <div className="appie-hero-content text-center">
                                <h1 className="appie-title">
                                    Find a SERVICE that Best Fit's your needs{' '}
                                </h1>
                                <aside className="widget widget-search ">
                                    <form className="search-form" action="#" method="post">
                                        <input type="search" name="s" placeholder="Type a Category" />
                                        <button type="submit">
                                            Search
                                        </button>
                                    </form>
                                </aside>
                                <p>
                                    Jolly good excuse my french boot super my good sir cup of <br />
                                    char richard about chinwag.
                                </p>
                                <div
                                    className="thumb mt-80 wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="400ms"
                                >
                                    <img src={heroThumb} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroHome;
