import React from 'react';
import * as Icon from 'react-feather';

function Navbar() {
        return (

            <header className id="header-main">
                <nav className="navbar navbar-main navbar-expand-lg navbar-light" id="navbar-main">
                    <div className="container">
                        <a className="navbar-brand" href="\">
                            <img alt="iVerify Logo" src="https://i.imgur.com/vdpFo5m.png" id="navbar-logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse navbar-collapse-overlay" id="navbar-main-collapse">
                            <div className="position-relative">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation"><i data-feather="x" /></button>
                            </div>
                            <ul className="navbar-nav ml-lg-auto">
                                <li className="nav-item nav-item-spaced d-none d-lg-block">
                                    <a className="nav-link" href="\">Home</a>
                                </li>
                                <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover"><a className="nav-link" data-toggle="dropdown" href="#Services" aria-expanded="false">Our Services</a>
                                    <div className="dropdown-menu dropdown-menu-xl p-0">
                                        <div className="row no-gutters">
                                            <div className="col-12 col-lg-6 order-lg-2">
                                                <div className="dropdown-body dropdown-body-right bg-dropdown-secondary h-100">
                                                    <div className="list-group list-group-flush">
                                                        <div className="list-group-item border-0">
                                                            <div className="media d-flex">
                                                                <figure style={{width: '40px'}}>
                                                                    <img alt="user" src="assets/img/svg/icons/User_male.svg" className="img-fluid" style={{height: '40px'}} />
                                                                </figure>
                                                                <div className="media-body ml-3">
                                                                    <a href="tenant-verification" className="d-block h6 mb-0">Tenant Verification</a>
                                                                    <small className="text-sm text-muted mb-0">Return on investment is easier with us.</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="list-group-item border-0">
                                                            <div className="media d-flex">
                                                                <figure style={{width: '40px'}}>
                                                                    <img alt="Enterprize" src="assets/img/svg/icons/Enterprise_2.svg" className="img-fluid" style={{height: '40px'}} />
                                                                </figure>
                                                                <div className="media-body ml-3">
                                                                    <a href="company-verification" className="d-block h6 mb-0">Company Verification</a>
                                                                    <small className="text-sm text-muted mb-0">Broaden your scope of operations with us.</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="list-group-item border-0">
                                                            <div className="media d-flex align-items-center">
                                                                <figure style={{width: '40px'}}>
                                                                    <img alt="Certificate" src="assets/img/svg/icons/Certificate.svg" className="img-fluid" style={{width: '40px'}} />
                                                                </figure>
                                                                <div className="media-body ml-3">
                                                                    <a href="certificate-verification" className="d-block h6 mb-0">Certificate Verification</a>
                                                                    <small className="text-sm text-muted mb-0">I earned it, Yes, verify!</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6 order-lg-1 mt-4 mt-lg-0">
                                                <div className="dropdown-body">
                                                    <div className="list-group list-group-flush">
                                                        <div className="list-group-item border-0">
                                                            <div className="media d-flex">
                                                                <figure style={{width: '40px'}}>
                                                                    <img alt="Conference" src="assets/img/svg/icons/Conference.svg" className="img-fluid" style={{height: '40px'}} />
                                                                </figure>
                                                                <div className="media-body ml-3">
                                                                    <a href="corporate-employee" className="d-block h6 mb-0">Corporate Employee Verification</a>
                                                                    <small className="text-sm text-muted mb-0">A starting point for any organisation.</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="list-group-item border-0">
                                                            <div className="media d-flex align-items-center">
                                                                <figure style={{width: '40px'}}>
                                                                    <img alt="Bag" src="assets/img/svg/icons/Shopping_Bag.svg" className="img-fluid" style={{width: '40px'}} />
                                                                </figure>
                                                                <div className="media-body ml-3">
                                                                    <a href="domestic-employee" className="d-block h6 mb-0">Domestic Employee Verification</a>
                                                                    <small className="text-sm text-muted mb-0">Your safety &amp; assurance is our priority.</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="list-group-item border-0">
                                                            <div className="media d-flex align-items-center">
                                                                <figure style={{width: '40px'}}>
                                                                    <img alt="Enterprise" src="assets/img/svg/icons/Enterprise.svg" className="img-fluid" style={{width: '40px'}} />
                                                                </figure>
                                                                <div className="media-body ml-3">
                                                                    <a href="property-verification" className="d-block h6 mb-0">Property Verification</a>
                                                                    <small className="text-sm text-muted mb-0">Get it done,save the loss.</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover"><a className="nav-link" href="#Dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Company</a>
                                    <div className="dropdown-menu dropdown-menu-md p-0">
                                        <ul className="list-group list-group-flush px-lg-4">
                                            <li className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                                                <a href="about">
                                                    <div className="media d-flex mt-3 mb-3">
                                                        <figure style={{width: '20px'}}>
                                                            <img alt="Enterprise" src="assets/img/svg/icons/Enterprise_2.svg" className="svg-inject img-fluid" style={{height: '20px'}} />
                                                        </figure>
                                                        <div className="media-body ml-2">
                                                            <h6 className="heading mb-0">About us</h6>
                                                            <span className="text-sm text-muted mb-0">Who we are</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                                                <a href="careers">
                                                    <div className="media d-flex mt-3 mb-3">
                                                        <figure style={{width: '20px'}}>
                                                            <img alt="Briefcase" src="assets/img/svg/icons/Briefcase.svg" className="svg-inject img-fluid" style={{height: '20px'}} />
                                                        </figure>
                                                        <div className="media-body ml-2">
                                                            <h6 className="heading mb-0">Careers</h6>
                                                            <span className="text-sm text-muted mb-0">We’re building a target driven team. </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover"><a className="nav-link" href="#Dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Support</a>
                                    <div className="dropdown-menu dropdown-menu-md p-0">
                                        <ul className="list-group list-group-flush px-lg-4">
                                            <li className="dropdown dropdown-animate dropdown-submenu">
                                                <a href="faq">
                                                    <div className="media d-flex mt-3 mb-3">
                                                        <figure style={{width: '20px'}}>
                                                            <img alt="Folders" src="assets/img/svg/icons/Folders.svg" className="svg-inject img-fluid" style={{height: '20px'}} />
                                                        </figure>
                                                        <div className="media-body ml-2">
                                                            <h6 className="heading mb-0">Quick Help</h6>
                                                            <span className="text-sm text-muted mb-0">Read through solved problems.</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                                                <a href="contact">
                                                    <div className="media d-flex mt-3 mb-3">
                                                        <figure style={{width: '20px'}}>
                                                            <img alt="Email" src="assets/img/svg/icons/Compose_email.svg" className="svg-inject img-fluid" style={{height: '20px'}} />
                                                        </figure>
                                                        <div className="media-body ml-2">
                                                            <h6 className="heading mb-0">Contact us</h6>
                                                            <span className="text-sm text-muted mb-0">Fill out our contact form.</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            {/* <li className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                                                <a href="!#" onClick={'tidioChatApi.open();'}>
                                                    <div className="media d-flex mt-3 mb-3">
                                                        <figure style={{width: '20px'}}>
                                                            <img alt="Chat" src="assets/img/svg/icons/Chat.svg" className="svg-inject img-fluid" style={{height: '20px'}} />
                                                        </figure>
                                                        <div className="media-body ml-2">
                                                            <h6 className="heading mb-0">Chat with us</h6>
                                                            <span className="text-sm text-muted mb-0">Chat with our customer care agents.</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li> */}
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item nav-item-spaced d-none d-lg-block">
                                    <a className="nav-link" href="https://blog.iverify.ng" rel="noreferrer" target="_blank">Blog</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav align-items-lg-center d-none d-lg-flex ml-lg-auto">
                                <li className="nav-item"><a className="nav-link" href="https://myiverify.com/login"><span className="btn-inner--icon"><Icon.LogIn width={17}/></span> <span className="btn-inner--text" />Login</a></li>
                                <li className="nav-item"><a href="https://myiverify.com/signup" className="btn btn-sm btn-dark btn-icon ml-3">Get Started</a></li>
                            </ul>
                            <span className="pl-3 ngicon">
                                <img src="https://i.imgur.com/vSVsXS0.jpg" alt="iVerify Nigeria" className="avatar rounded-circle avatar-sm" />
                            </span>
                            <div className="d-lg-none px-4 text-center">
                                <a href="https://myiverify.com/signup" className="btn btn-block btn-sm btn-dark">Get Started</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
}

export default Navbar
