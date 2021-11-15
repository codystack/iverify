import React from 'react';
import Bigcta from '../components/Bigcta';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import * as Icon from 'react-feather';

function PropertyVerification() {
    return (

        <div>
            <Navbar />
            <section className="slice py-5">
                <div className="container">
                    <div className="row row-grid align-items-center">
                    <div className="col-12 col-md-5 col-lg-6 order-md-2">
                        <figure className="w-100"><img alt="Property Verification" src="./assets/img/svg/propertyveri.gif" className="img-fluid mw-md-120" /></figure>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                        <h1 className="display-4 text-center text-md-left mb-3">Property <strong className="text-primary">Verification</strong></h1>
                        <p className="lead text-center text-md-left text-muted">
                        Protect your interest in property investment by conducting statutory and non-statutory due diligence on lands and buildings before purchase.
                        </p><ul>
                        <li>Land history</li>
                        <li>Root of title</li>
                        <li>Property Security</li>
                        <li>Building permit</li>
                        <li>Survey chart</li>
                        <li>Property ownership</li>
                        <li>Review of all legal documents presented</li>
                        <li>Comprehensive due diligence</li>
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
export default PropertyVerification