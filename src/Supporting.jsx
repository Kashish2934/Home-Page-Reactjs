import pic_2 from './pic_2.jpeg';
import pic_4 from './pic_4.jpeg';
import pic_6 from './pic_6.jpeg';

function Support(){
    return(
        <div className="supporting-industries">
        <div className="si-text">
            <div className="si-container">
                <div className="center">
                    <h2>Supporting Industries</h2>
                </div>
                
            </div>

            <div className="carousel2">
                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={pic_2} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={pic_4} className="d-block w-100" alt="..." /> 
                      </div>
                      <div className="carousel-item">
                        <img src={pic_6} className="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
        </div>
    </div>
    );
}

export default Support;