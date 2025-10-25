import React from 'react'
import carousalimg1 from './images/carousalimg1.jpg'
import carousalimg2 from './images/carousalimg2.jpg'
import carousalimg3 from './images/carousalimg3.jpg'
import image4 from './images/image4.jpg'
import Navbar from './Navbar'
import Footer from './Footer'

function Dashboard() {
    return (
        <>
        <Navbar></Navbar>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000"
            >
                <div className="carousel-inner" >
                    <div className="carousel-item active" >
                        <img src={carousalimg1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-sm-block d-flex flex-column justify-content-center align-items-center h-75 " >
                            <h5 className="carousel-title " >Welcome to RoadHelper!</h5>
                            <button type="button" className="btn bg-gradient btn-outline-warning fw-bold" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Get Start</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousalimg2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-sm-block d-flex flex-column justify-content-center align-items-center h-75 ">
                            <h5 className="carousel-title ">Find Nearby Garages</h5>
                            <button type="button" className="btn bg-gradient btn-outline-warning fw-bold" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" >Get Start</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousalimg3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-sm-block d-flex flex-column justify-content-center align-items-center h-75">
                            <h5 className="carousel-title ">Ride Home Without Late!</h5>
                            <button type="button" className="btn bg-gradient btn-outline-warning fw-bold" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Get Start</button>
                        </div>
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="row g-0  position-relative bg-black" style={{ "paddingTop": "60px", "paddingLeft": "60px", "paddingRight": "60px" }}>
                <div className="col-md-6 mb-md-0 p-md-4">
                    <img src={image4} className="w-100" alt="..."></img>
                </div>
                <div className="col-md-6 p-4 ps-md-0">
                    <h5 className="card-title text-warning fw-bold mx-auto">Vehicle Trouble? We’ve Got You Covered!</h5>
                    <p style={{ "color": "white" }}>Find the nearest garage in seconds and get help right where you are. RoadHelper makes roadside repairs simple and fast — from flat tires to emergency towing. Wherever you travel, we connect you with trusted local mechanics to get you back on the road safely.</p>
                </div>
            </div>

            <div className="offcanvas offcanvas-start bg-dark" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel" style={{ "color": "white" }}>Ready to Take Off?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p style={{ "color": "white" }}>Join us today or sign in to explore your tools, insights, and opportunities all in one place.</p>
                    <button className="btn bg-gradient btn-outline-warning" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</button> <br />
                    <button className="btn bg-gradient btn-outline-warning" style={{ "marginTop": "10px", "width": "80px" }} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">Sign In</button>
                </div>
            </div>

            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModal2Label">Modal title 2</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            tttttttt
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Dashboard