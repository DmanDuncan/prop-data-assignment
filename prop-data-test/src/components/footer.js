import '../styles/footer.scss';
import CopyrightIcon from '../images/footer-icon.svg';
import IEASAIcon from '../images/ieasa-icon.png';
import EAABIcon from '../images/eaab-icon.png';
import FacebookICON from '../images/Facebook.svg';
import TwitterIcon from '../images/Twitter.svg';
import YouTubeIcon from '../images/YouTube.svg';
import React from 'react'

function Footer() {

  // footer browse links
  const browseItems = [
    "Home",
    "Residential For Sale [5]", 
    "Calculators",
    "Company Profile",
    "Agent Search",
    "Contact Us",
    "Website Map",
    "Links",
    "Privacy Policy"
  ]
  
  // footer residential links
  const residentialItems = [
    "Residential For Sale [54]:", 
    "Amanzimtoti [12]",
    "Athlone Park [3]",
    "Doonside [6]",  
    "Warner Beach [11]",
    "St Winifreds [4]",
    "Residential To Let [54]: Amanzimtoti [12]",
    "Athlone Park [3]",
    "Doonside [6]",
    "Warner Beach [11]",
    "St Winifreds [4]"
  ]

  return (
    <main className="footer-container">
      <div className="footer-content page-width">
        <div className="partner-logo-container">
          <img src={EAABIcon} alt="" />
          <img src={IEASAIcon} alt="" />
        </div>
        <div className="browse-list-container">
          <ul className="browse-list">
            <li>Browse: </li>
            {
              browseItems.map((item, index) => {
                return <li key={`${index}`}>
                  <a className="browse-item-link" href="/#">{item}</a>
                    <span className="seperator">|</span>
                  </li>
              })
            }
          </ul>
        </div>
        <hr />
        <div className="location-list-container">
          <ul className="location-list">
              {
                residentialItems.map((item, index) => {
                  return <li key={`${index}`}>
                    <a className="location-item-link" href="/#">{item}</a>
                      <span className="seperator">|</span>
                    </li>
                })
              }
          </ul>
        </div>
        <div className="legal-social-container">
          <div className="legal-content">
            <img src={CopyrightIcon} alt="" />
            <p>Website Powered by Prop Data <br/> Copyright © 2019 Name</p>
          </div>
          <div className="social-content">
            <img src={FacebookICON} alt="" />
            <img src={TwitterIcon} alt="" />
            <img src={YouTubeIcon} alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}
 
export default Footer