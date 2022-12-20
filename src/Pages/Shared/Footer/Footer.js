import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from "../../../images/logo2.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="" style={{ backgroundColor: 'lightslategrey', width: "100%" }}>
            <div className="container">
                {/* <!--Grid row--> */}
                <div className="row ">
                    {/* <!--Grid column--> */}
                    <div className="col-lg-6 col-md-12 mt-5  ">

                        <img style={{ width: '200px' }} src={logo2} alt="" />
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-5 footer-text">

                        <ul className="list-unstyled mb-0 ">
                            <li>
                                <Link to="" className="text-white text-decoration-none">About Online Food</Link>
                            </li>
                            <li>
                                <Link to="" className="text-white text-decoration-none">Read Our Blog</Link>
                            </li>
                            <li>
                                <Link to="" className="text-white text-decoration-none">Sign up to deliver</Link>
                            </li>
                            <li>
                                <Link to="" className="text-white text-decoration-none">Add Your Restutant</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-5 footer-text">

                        <ul className="list-unstyled mb-0  ">
                            <li>
                                <Link to="" className="text-white text-decoration-none">Get help</Link>
                            </li>
                            <li>
                                <Link to="" className="text-white text-decoration-none">Read FAQs</Link>
                            </li>
                            <li>
                                <Link to="" className="text-white text-decoration-none">View all cities</Link>
                            </li>
                            <li>
                                <Link to="" className="text-white text-decoration-none">Resturants near me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container mt-5 end-part'> 
                <div className=" row">
                    <div className="col ">
                       <Link to='/' className='text-decoration-none' style={{color:'lightgray'}}>Copywright © 2022 under SEnioR</Link>
                    </div>
                    <div className="col col-lg-1">
                    <Link to='/' className='text-decoration-none' style={{color:'lightgray'}}>Privacy & Policy</Link>
                    </div>
                    <div className="col col-lg-2">
                    <Link to='/' className='text-decoration-none' style={{color:'lightgray'}}>Terms Of Use</Link>
                    </div>
                    <div className="col col-lg-3">
                    <Link to='/' className='text-decoration-none' style={{color:'lightgray'}}>Pricing</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;