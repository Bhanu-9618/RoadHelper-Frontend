import React from 'react'

function Footer() {
    return (

        <footer className="bg-black text-light pt-5 pb-4" style={{"paddingLeft" : "100px" , "paddingRight" : "100px"}}>
            <div className="container">
                <div className="row text-center text-md-start">

                    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-warning">RoadHelper</h5>
                        <p className="text-bg-white">
                            RoadHelper connects you with trusted nearby garages and mechanics for quick, reliable roadside assistance whenever you need it.
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-warning">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none d-block mb-2">About Us</a></li>
                            <li><a href="#" className="text-light text-decoration-none d-block mb-2">SignUp</a></li>
                            <li><a href="#" className="text-light text-decoration-none d-block mb-2">SignIn</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-warning">Contact</h5>
                        <p><i className="bi bi-geo-alt-fill me-2 text-warning"></i>No. 452, Main Street, Colombo 03, Sri Lanka</p>
                        <p><i className="bi bi-envelope-fill me-2 text-warning"></i>support@roadhelper.lk</p>
                        <p><i className="bi bi-telephone-fill me-2 text-warning"></i>+94 11 234 5678</p>
                        <p><i className="bi bi-telephone-fill me-2 text-warning"></i>+94 77 123 4567 (Hotline)</p>
                    </div>

                </div>

                <hr className="my-4 border-secondary" />

                <div className="row align-items-center text-center">
                    <div className="col-12">
                        <p className="mb-2">
                            © 2025 <strong className="text-warning">RoadHelper</strong>. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer