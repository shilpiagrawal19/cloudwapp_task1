import React from 'react'
import './nav.css'
function Nav() {
    return (
        <div className="Nav">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="left">Events</h4>
                        <div className="right">
                            <button className="btn">Login</button>
                            <button className="btn">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
