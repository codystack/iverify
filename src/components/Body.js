import React from "react";

function Body() {
    return (
        <div>
            <section className="section-half-rounded pt-6 pb-0 pt-lg-6 pb-lg-5">
                <div className="jumbotron section-inner right-0 rounded-top-left bg-gradient-primary overflow-hidden col-xl-11"></div>
                <div className="container pb-lg-5 position-relative zindex-100">
                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                        <div className="col-md-8 col-lg-5 mb-5 mb-lg-0 text-center text-lg-left">
                            <h1 className="display-5 text-white my-4">Redefining your access to information.</h1>
                            <p className="lead text-white opacity-8">Our document verification and improved identity
                                innovation allows you to verify data and access information.</p>
                            <div className="mt-5">
                                <a href="auth/signup" className="btn btn-white btn-lg btn-icon">
                                    <span className="btn-inner--text">Get started</span>
                                    <span className="btn-inner--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="feather feather-plus">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </span>
                                </a>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-center justify-content-lg-left mt-5">
                                <div className="col-auto text-sm text-white pl-0 pr-4">Trusted by:</div>
                                <div className="col client-group">
                                    <div className="row justify-content-center">
                                        <div className="client col-3 py-3">
                                            <img alt="accessbank" src="/assets/img/clients/svg/accessbank_white.svg"/>
                                        </div>
                                        <div className="client col-3 py-3">
                                            <img alt="fidelitybank"
                                                 src="/assets/img/clients/svg/fidelitybank_white.svg"/>
                                        </div>
                                        <div className="client col-3 py-3">
                                            <img alt="zenithbank" src="/assets/img/clients/svg/zenithbank_white.svg"/>
                                        </div>
                                        <div className="client col-3 py-3">
                                            <img alt="whitesoul" src="/assets/img/clients/svg/whitesoul_white.svg"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="position-lg-absolute bottom-lg-4 bottom-xl-0 right-lg-n10 mb-n5 mb-lg-0 mb-xl-n7 col-lg-10 col-xl-10 zindex-100">
                            <div className="frame frame-laptop zindex-100 ml-lg-6"><img alt="slider"
                                                                                        src="/assets/img/svg/slideimg001.svg"
                                                                                        className="img-fluid"/>
                                {/*<div class=frame-inner><img alt="Image placeholder" src=assets/img/theme/light/screen-2-1000x800.jpg class=img-fluid></div>*/}
                            </div>
                            <div className="w-25 position-absolute top-n5 left-8 left-xl-9"><img alt="dot square"
                                                                                                 src="/assets/img/svg/shapes/dots-square.svg"
                                                                                                 className="svg-inject img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-half-rounded pb-5 pb-lg-7">
                <div
                    className="jumbotron section-inner left-0 rounded-bottom-right bg-section-secondary overflow-hidden col-xl-11"></div>
                <div className="container text-center text-lg-left">
                    <div className="row mb-6 justify-content-center text-center">
                        <div className="col-lg-8 col-md-10"><span className="badge badge-primary badge-pill">What we offer</span>
                            <h3 className="mt-4">A one stop shop for your <span className="text-warning typed"
                                                                                id="type-example-1"
                                                                                data-type-this="identity, company, certificate, employee, tenant, property"></span> verification.
                            </h3>
                        </div>
                    </div>
                    <div className="row row-grid text-center">
                        <div className="col-md-4">
                            <div className="pb-4">
                                <div className="icon"><img alt="group" src="/assets/img/svg/icons/Group.svg"
                                                           className="svg-inject img-fluid"/></div>
                            </div>
                            <h5>Employee Verification</h5>
                            <p className="text-muted mb-0">Outsource and leverage our comprehensive employee
                                verification solutions to make good hiring decisions, set the structure, culture and
                                values of your home or workplace and comply with the CBN tier 3 KYC requirements.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="pb-4">
                                <div className="icon"><img alt="enterprize" src="/assets/img/svg/icons/Enterprise_2.svg"
                                                           className="svg-inject img-fluid"/></div>
                            </div>
                            <h5>Company Verification</h5>
                            <p className="text-muted mb-0">Build a portfolio and Increase your pre-contractual knowledge
                                of any company registered in Nigeria that you choose to acquire, invest in, partner with
                                or engage in a business relationship to asses their background, organizational
                                structure, capacity and competence.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="pb-4">
                                <div className="icon"><img alt="enterprise" src="/assets/img/svg/icons/Enterprise.svg"
                                                           className="svg-inject img-fluid"/></div>
                            </div>
                            <h5 className="">Tenant Verification</h5>
                            <p className="text-muted mb-0">We guarantee that our efficient property and tenant
                                verification solution ensure investors, landlords, property managers, real estate
                                brokers and agents protect their interest in property, and minimize exposure to
                                high-risk transactions.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="slice">
                <div className="container">
                    <div className="row row-grid justify-content-between align-items-center">
                        <div className="col-lg-5 order-lg-2">
                            <h5 className="h3">Identity is a Right, not a Privilege.<br/>What we stand for.</h5>
                            <p className="lead my-4">iVerify™ provides competent background check services for companies
                                and individuals in Nigeria to help automate their verification processes and improve
                                access to information.</p>
                            <p className="lead my-4"><span className="badge badge-dark">Integrity</span> We believe in
                                the integrity of the process and the product.</p>
                            <p className="lead my-4"><span className="badge badge-dark">Security</span> With us your
                                safety is guaranteed.</p>
                            <p className="lead my-4"><span className="badge badge-dark">Equality</span> Everyone has
                                equal right to verify and be verified.</p>
                            <p className="lead my-4"><span className="badge badge-dark">Credibility</span> We say and we
                                deliver.</p>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="mb-0">
                                <div><img alt="home" src="/assets/img/hmeimg.png" className="img-fluid"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Body