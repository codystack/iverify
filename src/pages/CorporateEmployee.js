import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Bigcta from '../components/Bigcta';
import Testimonials from '../components/Testimonials';
import * as Icon from 'react-feather';

function CoporateEmployee() {
    return (

        <div>
            <Navbar />
            <section className="slice py-5">
                <div className="container">
                    <div className="row row-grid align-items-center">
                    <div className="col-12 col-md-5 col-lg-6 order-md-2">
                        <figure className="w-100"><img alt="Coporate Employee" src="./assets/img/svg/corporatem.gif" className="img-fluid mw-md-120" /></figure>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                        <h1 className="display-4 text-center text-md-left mb-3">Corporate Employee <strong className="text-primary">Verification</strong></h1>
                        <p className="lead text-center text-md-left text-muted">
                        Outsource and leverage our comprehensive employee verification solutions to make good hiring decisions, set the structure, culture and values of your home or workplace and comply with the CBN tier 3 KYC requirements
                        </p><ul>
                        <li>Residential address</li>
                        <li>Previous work history</li>
                        <li>Guarantor’s residential address</li>
                        <li>Guarantor’s work address</li>
                        <li>Visuals</li>
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
export default CoporateEmployee