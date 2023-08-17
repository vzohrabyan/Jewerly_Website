import "./Footer.scss"
/*Images*/
import instagram from "../../images/instagram.svg"
import youTube from "../../images/youTube.svg"
import twitter from "../../images/twitter.svg"
import facebook from "../../images/facebook.svg"
import linkedIn from "../../images/linkedIn.svg"

const Footer = () => {
  return (
    <footer>
      <div className="websiteInfo">
        <div className="info">
          <ul>
            <li><b>CUSTOMER SERVICES</b></li>
            <li>Contact Us</li>
            <li>Track your Order</li>
            <li>Shipping & Returns</li>
            <li>Frequently Asked Questions</li>
            <li>Schedule an appointment</li>
          </ul>
          <ul>
            <li><b>ABOUT US</b></li>
            <li>Origins</li>
            <li>Our Purpose</li>
            <li>Careers</li>
            <li>Sustainability</li>
            <li>Giving Back</li>
          </ul>
          <ul>
            <li><b>MATERIAL CARE</b></li>
            <li>Jewelry Repair</li>
            <li>Ring Sizing</li>
            <li>Metal Allergy Resources</li>
            <li>Styling Tips</li>
          </ul>
          <ul>
            <li><b>MAIN LOCATIONS</b></li>
            <li>Chicago, IL</li>
            <li>San Francisco, CA</li>
            <li>New York, NY</li>
            <li>Seattle, WA</li>
          </ul>
        </div>
        <div className="websites">
          <h2>You can be one step ahead.</h2>
          <span>Sign up to hear about our updates on the dot.</span>
          <input type="text" placeholder='Your email address'/>
          <div className="icons">
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
            <img src={facebook} alt="Facebook" />
            <img src={youTube} alt="YouTube" />
            <img src={linkedIn} alt="LinkedIn" />
          </div>
        </div>
      </div>
      <div className="llc">
        <h4>©   APOLLONIAN, LLC</h4>
        <ul>
          <li>PRIVACY POLICY</li>
          <li>TERMS OF USE</li>
          <li>SITEMAP</li>
          <li>DO NOT SELL MY INFORMATION</li>
          <li>COOKIES</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer