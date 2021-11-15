import React from 'react';
import Bigcta from '../components/Bigcta';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import * as Icon from 'react-feather';

function CertificateVerification() {
    return (

        <div>
            <Navbar />
            <section className="slice py-5">
                <div className="container">
                    <div className="row row-grid align-items-center">
                    <div className="col-12 col-md-5 col-lg-6 order-md-2">
                        <figure className="w-100"><img alt="Certificate Verificationr" src="./assets/img/svg/certificateveri.gif" className="img-fluid mw-md-120" /></figure>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                        <h1 className="display-4 text-center text-md-left mb-3">Certificate <strong className="text-primary">Verification</strong></h1>
                        <p className="lead text-center text-md-left text-muted">
                        Evaluate academic, professional, and biodata certificates for employment, immigration, certifications, and admission purposes using our request tools.
                        </p><ul>
                        <li>First school living certificate</li>
                        <li>Waec certificate</li>
                        <li>Nysc certificate</li>
                        <li>University certificate</li>
                        <li>OND certificate</li>
                        <li>HND certificate</li>
                        <li>Professional certifications</li>
                        <li>Birth certificate</li>
                        <li>Marriage certificate</li>
                        <li>Transcripts</li>
                        </ul>
                        <p />
                        <div className="text-center text-md-left mt-5">
                        <a href="https://myiverify.com/signup" className="btn btn-primary btn-icon"><span className="btn-inner--text">Get started</span>
                            <span className="btn-inner--icon"> <Icon.ArrowRight width={16} /> </span>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <Bigcta />
            <Testimonials />
            <Footer />
        </div>
      );
}
export default CertificateVerification