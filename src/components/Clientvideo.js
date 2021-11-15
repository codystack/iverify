import React from 'react';
import * as Icon from 'react-feather';

function Clientvideo() {
    return (
        <section className="slice py-7 py-lg-10 d-flex align-items-center bg-cover bg-size--cover" style={{backgroundImage: 'url(./assets/img/backgrounds/img-5.jpg)'}}><span className="mask bg-gradient-dark opacity-9" />
            <div className="container">
                <div className="col">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center">
                            <h2 className="display-4 text-white">Ready to secure your business?</h2>
                            <h4 className="text-white mt-3">Hear what others have to say</h4>
                            <a href="./assets/vid/epicure.mp4" data-fancybox data-toggle="tooltip" data-placement="bottom" title="Play Video" className="btn btn-lg btn-warning text-dark btn-icon-only rounded-circle hover-scale-110 mt-4">
                                <span className="btn-inner--icon">
                                    <Icon.Play width={17}/>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-container shape-line shape-position-bottom"><svg width="2560px" height="100px" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" style={{enableBackground: 'new 0 0 2560 100'}} xmlSpace="preserve" className><polygon points="2560 0 2560 100 0 100" /></svg></div>
        </section>
    )
}
export default Clientvideo