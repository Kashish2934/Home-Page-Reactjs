import pic_1 from './pic_1.jpeg';
import pic_2 from './pic_2.jpeg';
import pic_3 from './pic_3.jpeg';

function NavBar(){
    return(
        <div className="main-container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand nav-text" href="#">Xpense Trackr</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link nav-text" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-text" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-text" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-text" href="#">Purchase</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-text" href="#">Contact Us</a>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <button className="btn btn-primary" id="log-in">Log in</button>
                        <button className="btn btn-secondary" id="sign-up">Sign Up</button>
                    </form>

                </div>
            </div>
        </nav>

        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active c-item">
                    <img src={pic_2} className="d-block w-100 c-img" alt="..." />

                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="animate__animated animate__lightSpeedInRight "> Xpense Trackr </h5>
                        <p className="animate__animated animate__lightSpeedInLeft">Expense Managment Made Effortless</p>
                        <p><a href="#" className="animate__animated animate__rubberBand"> More Info </a></p>
                    </div>

                </div>
                <div className="carousel-item c-item">
                    <img src={pic_1} className="d-block w-100 c-img" alt="..." />

                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="animate__animated animate__lightSpeedInRight "> Xpense Trackr </h5>
                        <p className="animate__animated animate__lightSpeedInLeft">Expense Managment Made Effortless</p>
                        <p><a href="#" className="animate__animated animate__rubberBand"> More Info </a></p>
                    </div>

                </div>
                <div className="carousel-item c-item">
                    <img src={pic_3} className="d-block w-100 c-img" alt="..." />

                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="animate__animated animate__lightSpeedInRight "> Xpense Trackr </h5>
                        <p className="animate__animated animate__lightSpeedInLeft">Expense Managment Made Effortless</p>
                        <p><a href="#" className="animate__animated animate__rubberBand"> More Info </a></p>
                    </div>

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    );
}

export default NavBar;