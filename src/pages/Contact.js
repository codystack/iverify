import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import * as Icon from 'react-feather';

function Contact() {
    return (
        <div>
        <Navbar />
          <section className="slice py-6 pt-lg-7 pb-lg-8 bg-gradient-primary">
            <div className="container d-flex align-items-center text-center text-lg-left">
              <div className="col px-0">
                <div className="row row-grid align-items-center">
                  <div className="col-lg-6">
                    <h1 className="h1 text-white text-center text-lg-left my-4"><strong>We’re happy to help!</strong></h1>
                    <p className="lead text-white text-center text-lg-left opacity-8">Our team is happy to answer all your questions ASAP,<br />Do you have general enquiries or need support? Please hit the button below.</p>
                    <div className="mt-5 text-center text-lg-left"><a href="#sct-form-contact" data-scroll-to className="btn btn-warning text-dark btn-lg btn-icon"><span className="btn-inner--icon"><Icon.Edit2 width={17}/></span><span className="btn-inner--text">Write a message</span></a></div>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-left mt-5">
                      <div className="col-auto text-sm text-white pl-0 pr-4">Trusted by:</div>
                      <div className="client-group col">
                        <div className="row">
                          <div className="client col-3 py-3"><img alt="Access Bank" src="./assets/img/clients/svg/accessbank_white.svg" /></div>
                          <div className="client col-3 py-3"><img alt="Fidelity Bank" src="./assets/img/clients/svg/fidelitybank_white.svg" /></div>
                          <div className="client col-3 py-3"><img alt="Zenith Bank" src="./assets/img/clients/svg/zenithbank_white.svg" /></div>
                          <div className="client col-3 py-3"><img alt="White Soul" src="./assets/img/clients/svg/whitesoul_white.svg" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shape-container shape-line shape-position-bottom"><svg width="2560px" height="100px" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" style={{enableBackground: 'new 0 0 2560 100'}} xmlSpace="preserve" className><polygon points="2560 0 2560 100 0 100" /></svg></div>
          </section>
          <section className="slice slice-lg">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card text-center hover-translate-y-n10 hover-shadow-lg">
                    <div className="px-5 pb-5 pt-5">
                      <div className="py-4">
                        <div className="icon text-warning icon-sm mx-auto"><Icon.PhoneCall/></div>
                      </div>
                      <h5 className>Sales</h5>
                      <p className="mt-2 mb-0">Ready to work with us to get your organization secured?</p>
                      <div className="mt-4"><a href="mailto:sales@iverify.ng" className="link-underline-warning">sales@iverify.ng</a></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card text-center hover-translate-y-n10 hover-shadow-lg">
                    <div className="px-5 pb-5 pt-5">
                      <div className="py-4">
                        <div className="icon text-warning icon-sm mx-auto"><Icon.Settings/></div>
                      </div>
                      <h5 className>Support</h5>
                      <p className="mt-2 mb-0">Need general support or information about our services?</p>
                      <div className="mt-4"><a href="mailto:support@iverify.ng" className="link-underline-warning">support@iverify.ng</a></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card text-center hover-translate-y-n10 hover-shadow-lg">
                    <div className="px-5 pb-5 pt-5">
                      <div className="py-4">
                        <div className="icon text-warning icon-sm mx-auto"><Icon.Users/></div>
                      </div>
                      <h5 className>Careers</h5>
                      <p className="mt-2 mb-0">Have any question around joining our team? Say hello.</p>
                      <div className="mt-4"><a href="mailto:careers@iverify.ng" className="link-underline-warning">careers@iverify.ng</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="slice slice-lg">
            <div className="container">
              <div className="row row-grid justify-content-between align-items-center">
                <div className="col-lg-5">
                  <h3>The Brunswick Courts<br />7/9 Adebisi Oyenola Street Idado Estate, Lekki Epe express way Lagos, Nigeria.</h3>
                  <p className="lead my-4">Email: <a href="mailto:info@iverify.ng">info@iverify.ng</a><br />Tel: +234 809 066 6746 | +234 809 066 6745</p>
                  <p>Want to share any feedback with us, report a technical issue or just ask us a question? Fill free to contact us and we will get back to you shortly.</p>
                </div>
                <div className="col-lg-6">
                  <div id="map-custom" className="map-canvas rounded-left" data-lat="6.440411" data-lng="3.521588" data-color="#29209c" style={{height: '600px'}} />
                </div>
              </div>
            </div>
          </section>
          <section className="slice slice-lg bg-section-secondary" id="sct-form-contact">
            <div className="container position-relative zindex-100">
              <div className="row justify-content-center mb-5">
                <div className="col-lg-6 text-center">
                  <h3>Contact us</h3>
                  <p className="lh-190">If there's something we can help you with, jut let us know. We'll be more than happy to offer you our help, enter your question below for instant responses.</p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="alert alert-danger text-center" id="error-message" style={{display: 'none'}}>
                    Error sending message!
                  </div>
                  <div className="alert alert-success text-center" id="success-message" style={{display: 'none'}}>
                    Message sent successfully!
                  </div>
                  <center>
                    <div className="spinner-grow text-primary" style={{width: '3rem', height: '3rem', display: 'none'}} id="spinner" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </center>
                  <form id="contact-form" onclick="return false;">
                    <div className="form-group">
                      <input className="form-control form-control-lg" name="fullName" type="text" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <input className="form-control form-control-lg" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="email" placeholder="email@example.com" required />
                    </div>
                    <div className="form-group">
                      <input className="form-control form-control-lg" name="phoneNum" type="text" placeholder="+234-801-234-5678" required />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control form-control-lg" name="comment" data-toggle="autosize" placeholder="Tell us a few words ..." rows={3} required defaultValue={""} /></div>
                    <div className="text-center">
                      <button type="reset" className="btn-reset d-none" />
                      <button name="contact" id="contact" className="btn btn-block btn-lg btn-dark mt-4">Send your message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      );
}
export default Contact