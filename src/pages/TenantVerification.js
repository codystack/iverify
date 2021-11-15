import React from 'react';
import Bigcta from '../components/Bigcta';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import * as Icon from 'react-feather';

function TenantVerification() {
    return (

        <div>
            <Navbar />
            <section className="slice py-5">
                <div className="container">
                    <div className="row row-grid align-items-center">
                    <div className="col-12 col-md-5 col-lg-6 order-md-2">
                        <figure className="w-100"><img alt="Tenant Verification" src="./assets/img/svg/tenantveri.gif" className="img-fluid mw-md-120" /></figure>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                        <h1 className="display-4 text-center text-md-left mb-3">Tenant <strong className="text-primary">Verification</strong></h1>
                        <p className="lead text-center text-md-left text-muted">
                        We guarantee that our efficient services and Tenant verification solution ensure Landlords, property managers, real estate brokers and agents protect their rental income and minimize exposure to high-risk tenants.
                        </p><ul>
                        <li>Rental history</li>
                        <li>Previous residential address</li>
                        <li>Proof of work (for tenant and spouse if applicable)</li>
                        <li>Landlord’s recommendation</li>
                        <li>Guarantor’s consent</li>
                        <li>Guarantor’s work address</li>
                        <li>Guarantor’s residential address</li>
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
export default TenantVerification