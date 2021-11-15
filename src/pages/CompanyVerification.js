import React from 'react';
import Bigcta from '../components/Bigcta';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import * as Icon from 'react-feather';

function CompanyVerification() {
    return (

        <div>
            <Navbar />
            <section className="slice py-5">
                <div className="container">
                    <div className="row row-grid align-items-center">
                    <div className="col-12 col-md-5 col-lg-6 order-md-2">
                        <figure className="w-100"><img alt="Company Verification" src="./assets/img/svg/companyveri.gif" className="img-fluid mw-md-120" /></figure>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                        <h1 className="display-4 text-center text-md-left mb-3">Company <strong className="text-primary">Verification</strong></h1>
                        <p className="lead text-center text-md-left text-muted">
                        Build a portfolio and Increase your pre-contractual knowledge of any company registered in Nigeria that you choose to acquire, invest in, partner with or engage in a business relationship in a bid to know their background, organizational structure, capacity and competence.
                        </p><ul>
                        <li>Company registration</li>
                        <li>Shareholding and Directorship</li>
                        <li>Registered Address</li>
                        <li>Object clause</li>
                        <li>Shareholders and Directors</li>
                        <li>Annual returns compliance</li>
                        <li>Post incorporation due diligence</li>
                        <li>Share capital</li>
                        <li>Class of shares</li>
                        <li>Registered charges</li>
                        <li>Borrowing power</li>
                        <li>Company secretariat</li>
                        <li>Type of business</li>
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
export default CompanyVerification