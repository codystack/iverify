import React from 'react';

function Footer() {
    return (

        <footer className="position-relative" id="footer-main">
            <div className="footer pt-lg-7 footer-dark bg-dark">
                <div className="shape-container shape-line shape-position-top shape-orientation-inverse">
                    <svg width="2560px" height="100px" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" style={{enableBackground: 'new 0 0 2560 100'}} xmlSpace="preserve" className><polygon points="2560 0 2560 100 0 100" /></svg>
                </div>
                <div className="container pt-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h3 className="text-secondary mb-2">Redefining Identity Verification in Nigeria.</h3>
                                    <p className="lead mb-0 text-white opacity-8">We provide topnoch identity verification to fuel your brand growth.</p>
                                </div>
                                <div className="col-lg-5 text-lg-right mt-4 mt-lg-0">
                                    <a href="https://myiverify.com/signup" className="btn btn-warning text-dark btn-icon my-2"><span className="btn-inner--text">Get Started</span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="divider divider-fade divider-dark my-5" />
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0"><a href="\"><img alt="iVerify Logo" src="https://i.imgur.com/wSnqo7B.png" id="footer-logo" style={{width: '150px'}} /></a>
                            <ul className="nav mt-4">
                                <li className="nav-item"><a className="nav-link pl-0" href="https://www.linkedin.com/company/iverify-ng/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /></a></li>
                                {/*<li class=nav-item><a class=nav-link href=https://twitter.com target=_blank><i class="fab fa-twitter"></i></a></li>*/}
                                <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/iverify.ng/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://facebook.com/iverifyng-110319737124766/" target="_blank" rel="noreferrer"><i className="fab fa-facebook" /></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                            <h6 className="heading mb-3">Information</h6>
                            <ul className="list-unstyled">
                                <li><a href="faq">Quick help</a></li>
                                <li><a href="https://blog.iverify.ng/" target="_blank" rel="noreferrer">Blog</a></li>
                                {/* <li><a href="#Chat" onclick="tidioChatApi.open();">Chat with us</a></li> */}
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                            <h6 className="heading mb-3">Company</h6>
                            <ul className="list-unstyled">
                                <li><a href="about">About</a></li>
                                <li><a href="contact">Contact</a></li>
                                <li><a href="careers">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                            <h6 className="heading mb-3">Top 3 Services</h6>
                            <ul className="list-unstyled">
                                <li><a href="corporate-employee">Corporate Employee</a></li>
                                <li><a href="domestic-employee">Domestic Employee</a></li>
                                <li><a href="certificate-verification">Certificate Verification</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                            <h6 className="heading mb-3">Legal</h6>
                            <ul className="list-unstyled">
                                <li><a href="policy#item-5">Cookies</a></li>
                                <li><a href="terms">User Agreement</a></li>
                                <li><a href="policy">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="divider divider-fade divider-dark my-4" />
                    <div className="row align-items-center justify-content-md-between pb-4">
                        <div className="col-md-12 pb-3">
                            <div className="copyright text-sm font-weight-bold text-center"> ©  {(new Date().getFullYear())} <span className="font-weight-bold">iVerify™</span> All Rights Reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer