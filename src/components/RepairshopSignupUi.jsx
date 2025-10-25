import React from 'react'
import Navbar from './Navbar'

function RepairshopSignupUi() {
    return (
        <div className="dashboard-container2">

            <Navbar></Navbar>

            <form className="row g-3" style={{ "paddingLeft": "60px", "paddingRight": "60px", "marginTop": "60px" }}>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label text-warning">Email</label>
                    <input type="email" className="form-control" id="inputEmail4"></input>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label text-warning">Password</label>
                    <input type="password" className="form-control" id="inputPassword4"></input>
                </div>
                <div className="col-12">
                    <label for="inputName" className="form-label text-warning">Shop Name</label>
                    <input type="text" className="form-control" id="inputName"></input>
                </div>

                <div className="col-12">
                    <label for="inputNo" className="form-label text-warning">Contact Number</label>
                    <input type="number" className="form-control" id="inputNo"></input>
                </div>

                <div className="col-md-6">
                    <label for="inputtown" className="form-label text-warning">Town</label>
                    <input type="text" className="form-control" id="inputtown"></input>
                </div>
                <div className="col-md-6">
                    <label for="inputdistrict" className="form-label text-warning">District</label>
                    <input type="text" className="form-control" id="inputdistrict"></input>
                </div>

                <div className="col-md-3">
                    <label for="validationCustom04" className="form-label text-warning">State</label>
                    <select className="form-select" id="validationCustom04" required style={{"width" : "140px"}}>
                        <option selected disabled value="" style={{"width" : "80px"}}>Choose...</option>
                        <option >Available</option>
                        <option>Unavailable</option>
                    </select>
                </div>

                <center>
                    <div className="col-12">
                        <button type="submit" className="btn btn-outline-warning">Sign Up</button>
                    </div>
                </center>
            </form>

        </div>
    )
}

export default RepairshopSignupUi