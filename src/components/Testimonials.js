import React from 'react';
import * as Icon from 'react-feather';

function Testimonials() {
    return (

        <section className="slice slice-lg bg-section-secondary">
            <div className="container pt-5">
                <div className="row mb-5 text-center">
                    <div className="col-lg-8 mx-auto">
                        <h5 className="h4">Trusted by over 500+ of the Nigeria’s leading companies</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card hover-shadow-lg hover-translate-y-n3">
                            <div className="card-body p-5">
                                <span className="static-rating d-block mb-4">
                                    <Icon.Star width={17} className="star voted"/>
                                    <Icon.Star width={17} className="star voted"/>
                                    <Icon.Star width={17} className="star voted"/>
                                    <Icon.Star width={17} className="star voted"/>
                                    <Icon.Star width={17} className="star voted"/>
                                </span>
                                <div className="mb-4 flex-grow-1">
                                    <h4 className="h5 lh-160 mb-0">“I was completely blown away with their services. They helped protect us from hiring a driver with track record of child molestation.”</h4>
                                </div>
                                <div className="media align-items-center">
                                    <div>
                                        <a href="#Avatar" className="avatar mr-3">
                                            <img alt="epicure" src="./assets/img/clients/png/epicure.png" />
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <span className="d-block h6 text-sm mb-0">Oyinpreye Aigbogun</span>
                                        <span className="text-sm text-muted">Epicure Insurance Brokers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card hover-shadow-lg hover-translate-y-n3">
                            <div className="card-body p-5">
                                <span className="static-rating d-block mb-4">
                                    <Icon.Star width={17} className="star voted"/>
                                    <Icon.Star width={17} className="star voted"/>
                                    <Icon.Star width={17} className="star voted"/>
                                    <Icon.Star width={17} className="star voted"/>
                                    <Icon.Star width={17} className="star voted"/>
                                </span>
                                <div className="mb-4 flex-grow-1">
                                    <h4 className="h5 lh-160 mb-0">“We've had issues with employee theft in our retail brand, when iVerify™ came onboard, we embraced pre-employement verification and theft became history.”</h4>
                                </div>
                                <div className="media align-items-center">
                                    <div>
                                        <a href="#Avatar" className="avatar mr-3">
                                            <img alt="baykins" src="./assets/img/clients/png/baykins.png" />
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <span className="d-block h6 text-sm mb-0">Tinuola Akinlonu</span>
                                        <span className="text-sm text-muted">Baykins Pharmacy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card hover-shadow-lg hover-translate-y-n3">
                            <div className="card-body p-5">
                                <span className="static-rating d-block mb-4">
                                    <Icon.Star width={17} className="star voted"/>
                                    <Icon.Star width={17} className="star voted"/>
                                    <Icon.Star width={17} className="star voted"/>
                                    <Icon.Star width={17} className="star voted"/>
                                    <Icon.Star width={17} className="star voted"/>
                                </span>
                                <div className="mb-4 flex-grow-1">
                                    <h4 className="h5 lh-160 mb-0">“Traders of Africa has benefited a lot from the services of iVerify™. From employee verification to suppliers and buyers due diligence...”</h4>
                                </div>
                                <div className="media align-items-center">
                                    <div>
                                        <a href="#Avatar" className="avatar mr-3">
                                            <img alt="tofa" src="./assets/img/clients/png/tofa.png" />
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <span className="d-block h6 text-sm mb-0">Erhun Abbe</span>
                                        <span className="text-sm text-muted">Traders of Africa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonials