import React from 'react';
import Footer from '../components/Footer';
import Lightnavbar from '../components/Lightnavbar';
import * as Icon from 'react-feather';


function About() {
    return (
        <div>
            <Lightnavbar />
            <div>
                <section className="slice py-8 bg-dark bg-cover bg-size--cover" style={{backgroundImage: 'url(/assets/img/backgrounds/aboutbg.jpg)'}}><span className="mask bg-gradient-dark opacity-9" />
                <div className="container d-flex align-items-center text-center text-lg-left pt-5 pb-5 pt-lg-6">
                    <div className="col px-0">
                    <div className="row row-grid align-items-center">
                        <div className="col-lg-8 text-center text-lg-left">
                        <h1 className="text-white mb-4">Are you a corporate business or individual. We’re here for you.</h1>
                        <p className="lead text-white opacity-8">We are focused on solving and digitizing Nigeria’s biggest identity challenges, through Company, Certificate, Employee, Tenant and Property Verification for individuals and businesses.</p>
                        <div className="mt-5">
                            <a href="contact" className="btn btn-warning text-dark btn-lg btn-icon">
                            <span className="btn-inner--icon"><Icon.Edit3 width={16}/> </span>
                            <span className="btn-inner--text">Contact us</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="shape-container shape-line shape-position-bottom">
                    <svg width="2560px" height="100px" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" style={{enableBackground: 'new 0 0 2560 100'}} xmlSpace="preserve" className><polygon points="2560 0 2560 100 0 100" /></svg>
                </div>
                </section>
                <section className="slice slice-lg">
                <div className="container">
                    <div className="row mt-4">
                    <div className="col-lg-12">
                        <h2>About us</h2>
                        <p className="h5 lh-180 mb-3">“Redefining Your access to Information”</p>
                        <p className="lead lh-180">Iverify.ng is redefining the global perception of Nigerians through our verification and background checks services for a more inclusive economy.</p>
                        <p className="lead lh-180">In compliance with the Central Bank of Nigeria’s policies on KYC/AML, we enable corporate organizations and individuals to make decisions using our digital platforms to verify for equitable inclusion and access to basic amenities.</p>
                        <p><b>Our Values:</b> Accountability, Credibility, Integrity, Equity and Trust.</p>
                    </div>
                    </div>
                    <div className="row mt-4">
                    <div className="col-lg-6 pr-lg-5">
                        <div>
                        <span className="badge badge-dark">Our vision</span>
                        </div>
                        <p className="h5 lh-180 mb-3">To redefine access to information digitally for economic growth.</p>
                    </div>
                    <div className="col-lg-6 pr-lg-5">
                        <div>
                        <span className="badge badge-dark">Our Mission</span>
                        </div>
                        <p className="h5 lh-180 mb-3">To Build an Integrated Verification Solution Platform For Sustainable Digital Transformation.</p>
                    </div>
                    </div>
                </div>
                </section>
                <section className="slice slice-lg">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-5 col-6"><img src="/assets/img/theme/light/abtimg1.jpg" alt="About1" className="rounded-lg img-fluid" />
                        <div className="text-right mt-4"><img src="/assets/img/theme/light/abtimg4.jpg" alt="About2" className="rounded-lg img-fluid w-50" /></div>
                    </div>
                    <div className="col-lg-7 col-6"><img src="/assets/img/theme/light/abtimg2.jpg" alt="About3" className="rounded-lg img-fluid w-75" />
                        <div className="text-right mt-4"><img src="/assets/img/theme/light/abtimg3.jpg" alt="About4" className="rounded-lg img-fluid" /></div>
                    </div>
                    </div>
                </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
export default About