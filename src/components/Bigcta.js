import React from 'react';
import * as Icon from 'react-feather';

function Bigcta() {
    return (

        <section className="mt-5">
            <div className="container-fluid">
                <div className="jumbotron bg-dark shadow-lg mb-0"><img src="/assets/img/svg/backgrounds/dot-map.svg" alt="dot map" className="img-fluid img-as-bg opacity-7" />
                    <div className="container">
                        <div className="row py-6">
                            <div className="text-center">
                                <h1 className="text-white mb-3"><b>Experience Freedom and Security</b></h1>
                                <p className="lead text-white lh-180 w-75 mx-auto mb-5">Join over 500+ brands and individuals who use iVerify™ for Employee Verification, Company Verification, Tenant Verification, Certificate Verificate and Property Verification to access millions of information.</p>
                                <a href="https://myiverify.com/signup" target="_blank" rel="noreferrer" className="btn btn-lg btn-warning text-dark btn-icon mb-3 mb-lg-0">
                                    <span className="btn-inner--text">Join the tribe</span>
                                    <span className="btn-inner--icon"><Icon.ArrowRight width={17} /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Bigcta