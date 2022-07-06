import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-4.png';

function FooterHomeThree({ className }) {
    return (
        <>
            <section className={`appie-footer-area appie-footer-3-area ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget footer-about-widget-3">
                                <div className="logo">
                                    <a href="#">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                                <p>
                                    Verso Connect is a web application that connects clients to their prospective services.
                                </p>
                                <a href="/contact">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation footer-navigation-3">
                                <h4 className="title">Company</h4>
                                <ul>
                                    <li>
                                        <Link to="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/categories">Categories</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation footer-navigation-3">
                                <h4 className="title">Categories</h4>
                                <ul>
                                    <li>
                                        <Link to="/about-us">Graphics & Design</Link>
                                    </li>
                                    <li>
                                        <Link to="/Service">Digital Marketing</Link>
                                    </li>
                                    <li>
                                        <a href="#">Writing</a>
                                    </li>
                                    <li>
                                        <a href="#">Video & Animation</a>
                                    </li>
                                    <li>
                                        <a href="#">Music & Audio</a>
                                    </li>
                                    <li>
                                        <Link to="/news">Business</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Programming</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                                <h4 className="title">Get In Touch</h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-envelope" /> versoconnect@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-phone" /> +(233) 268 990 676
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-map-marker-alt" /> Kodua Nyanor Link ,Golf City ,Tema ,Ghana
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="
                footer-copyright
                d-flex
                align-items-center
                justify-content-between
                pt-35
              "
                            >
                                <div className="copyright-text">
                                    <p>Copyright © 2022 iditgh. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeThree;
