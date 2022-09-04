import '../styles/nav.scss';
import Logo from '../images/logo.svg';
import MenuIcon from '../images/menu-square-white.png';
import React, { useEffect } from 'react'

function Nav() {

  const links = [
    {
      title: "home", url: "#"
    },
    {
      title: "property search", url: "#"
    },
    {
      title: "tools", url: "#"
    },
    {
      title: "about", url: "#"
    },
    {
      title: "contact", url: "#"
    }
  ]

  // mobile menu opening and closing
  useEffect(() => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenuItemList = document.querySelector('.nav-links-mobile');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenuItemList.classList.toggle('active');

        const content = mobileMenuButton.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
    })
  },[]); 

  return (
    <main className="nav-container">
      <div className='nav-content'>
        <div className="logo-container"> 
          <img src={Logo} alt="" />
        </div>
        <div className="nav-links-container-desktop">
          <ul className='nav-links-desktop'>
            {
              links.map(link => <li className='nav-link' key={`${link.title}-01`}>{link.title}</li>)
            }
          </ul>
        </div>
        <div className="nav-links-container-mobile">
            <img className='mobile-menu-button' src={MenuIcon} alt="" /> 
            <ul className='nav-links-mobile'>
            {
              links.map(link => <li className='nav-link-mobile' key={`${link.title}-01`}>{link.title}</li>)
            }
            </ul>
        </div>
      </div>
    </main>
  )
}

export default Nav