import '../styles/header.scss';
import SearchRefIcon from '../images/search-ref-icon.svg';
import MoreSearchOptionsIcon from '../images/more-search-options-icon.svg';
import SearchIcon from '../images/search-icon.svg';
import BackGrooundImageOne from '../images/headerimage1.png';
import BackGrooundImageTwo from '../images/headerimage2.jpg';
import React, { useEffect } from 'react'

function Header() {

  // handle form submission 
  useEffect(() => {
    const searchForm = document.querySelector('.header-search-form');
    
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
    })
  });

  return (
    <main className="header-container">
      <div className="background-image" style={{backgroundImage: `url(${BackGrooundImageOne})`}}></div>
      <div className="background-image background-image-two" style={{backgroundImage: `url(${BackGrooundImageTwo})`}}></div>
      <div className="header-content page-width">
        <div className="header-search-form-container">
          <form className="header-search-form">
            <div className="top-row">
              <select className='purchase-type' name="" id="">
                <option value="">Buy</option>
                <option value="">Sell</option>
              </select>
              <select className='property-type' name="" id="">
                <option value="">Residential</option>
                <option value="">Commercial</option>
              </select>
              <input className='area-search' type="text" placeholder='Type Area or Suburb Name'/>
            </div>
            <div className="bottom-row">
              <div className="bottom-row-left">
                <div className="reference-search-container">
                  <input className='reference-number-search' type="text" placeholder='Web ref. Number Search'/>
                  <img src={SearchRefIcon} alt="" />
                </div>
              </div>
              <div className="bottom-row-right">
                <div className="more-serach-options-container">
                  <input className='more-search-options' type="text" placeholder='More Search Options'/>
                  <img src={MoreSearchOptionsIcon} alt="" />
                </div>
                <button className="button" type="submit"><img src={SearchIcon} alt="" />Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Header