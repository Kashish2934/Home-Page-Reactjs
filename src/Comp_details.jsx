import pic_6 from './pic_6.jpeg';

function Comp_details(){
    return(
        <div className="company-details container-fluid">

        <div className="row">
            <div className="col-lg-6">
                <div className="cd-img">
                    <img src={pic_6} className="d-block w-100 h-100 cd-img-2" alt="..." />
                </div>
            </div>

            <div className="col-lg-6">
                <div className="cd-text">
                    <h3>Managing and Tracking expense for growing businesses </h3>
                    <p>Welcome to Xpense Track, where we revolutionize the way businesses manage and
                        track employee expenses. Our cutting-edge expense management platform offers a
                        seamless and efficient solution for businesses of all sizes to effortlessly monitor and control
                        employee expenditures.</p>
                    <div className="container">
                        <div className="center">
                            <button className="btn btn-primary" id="read-more">Read more</button>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    </div>
    
    );
}

export default Comp_details;