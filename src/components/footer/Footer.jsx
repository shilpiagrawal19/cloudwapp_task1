import React from 'react'
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import visa from '../../Assets/visa.png';
import mastercard from '../../Assets/mastercard.png';

function Footer() {
    return (
        <div className=" container Footer">

        <div className="row">
            <div className="col-sm-12">
                <table className="table footer-box">
                    <thead>
                        <tr>
                        <th>Product</th>
                        <th>Explore More</th>
                        <th>Contact With Us</th>
                        <th>Payment Available</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Key Features</td>
                    <td>How It Works</td>
                    <td>Customer Support</td>
                    <td><img src={visa} className="cardicon"/>
                    <img src={mastercard} className="cardicon"/>
                    </td>
                    </tr>
                    <tr>
                        <td>Pricing</td>
                        <td>Download App</td>
                        <td>Download App</td>
                        <td><img src={visa} className="cardicon"/><img src={mastercard} className="cardicon"/></td>
                    </tr><tr>
                        <td>Event Ticketing</td>
                        <td>Event Promoter</td>
                        <td>Event Promoter</td>
                        <td></td>
                    </tr><tr>
                        <td>Booking</td>
                        <td>Sell Ticket</td>
                        <td><FacebookIcon className="icons"/>facebook</td>
                        <td></td>
                    </tr><tr>
                        <td>Online Pramotion</td>
                        <td>Event Organizer</td>
                        <td><TwitterIcon className="icons" />Twitter</td>                       
                    </tr><tr>
                        <td>Developer</td>
                        <td>NonProfit & Fundraiser</td>
                        <td><InstagramIcon className="icons"/>Instagram</td>                       
                         </tr>
                    </tbody>
                </table>
            </div>
        </div>
            
        <div className="row">
            <div className="copyright">
            <p className="copyright-licence">Copyright 2019 @Event.com.LLC. All right reserved.Equal Housing Oppurtunity</p>
            </div>
        </div>
        </div>
    )
}

export default Footer
