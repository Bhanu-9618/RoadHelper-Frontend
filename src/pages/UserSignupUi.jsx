import React from 'react'
import Navbar from '../components/Navbar'

function UserSignupUi() {
    return (
        <div className="dashboard-container">

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
                    <label for="inputName" className="form-label text-warning">User Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="@nipun1234"></input>
                </div>

                <div className="col-12">
                    <label for="inputNo" className="form-label text-warning">Phone Number</label>
                    <input type="number" className="form-control" id="inputNo"></input>
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

export default UserSignupUi