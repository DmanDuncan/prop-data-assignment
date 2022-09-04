import '../styles/feature-property.scss';
import LeftArrow from '../images/arrow-left.svg';
import RightArrow from '../images/arrow-right.svg';
import FeatureIamge from '../images/property1.png';
import AgentImage from '../images/agent-placeholder.png';
import BedIcon from '../images/bed-icon.svg';
import BathIcon from '../images/bath-icon.svg';
import ParkingIcon from '../images/parking-icon.svg';

import React, { useEffect } from 'react'

function FeatureProperty() {

  const featuredproperties = [
    {
      price: "1,100,000",
      summary: "$ Bedroom house for sale in Stellenbosch",
      parking: 4,
      bathrooms: 4,
      bedrooms: 4,
      description: "This stylish single-level Cowies Hill home showcases high-quality finishes, an easy indoor/outdoor...",
      agent: "Michelle Ruffelo",
      img: FeatureIamge,
      agentimage: AgentImage,
      label: "SOLE MANDATE"
    },
    {
      price: "2,300,000",
      summary: "3 Bedroom apartment for sale in Pinetown",
      parking: 1,
      bathrooms: 2,
      bedrooms: 3,
      description: "This stylish single-level Cowies Hill home showcases high-quality finishes, an easy indoor/outdoor...",
      agent: "Michelle Ruffelo",
      img: FeatureIamge,
      agentimage: AgentImage,
      label: ""
    },
    {
      price: "1,780,000",
      summary: "2 Bedroom townhouse for sale in Paarl",
      parking: 4,
      bathrooms: 4,
      bedrooms: 4,
      description: "This stylish single-level Cowies Hill home showcases high-quality finishes, an easy indoor/outdoor...",
      agent: "Michelle Ruffelo",
      img: FeatureIamge,
      agentimage: AgentImage,
      label: "PRICE REDUCED"
    }
  ]

  useEffect(() => {
    const nextSlideArrow = document.querySelector('.slide-right');
    const previousSlideArrow = document.querySelector('.slide-left');
    const slides = document.querySelectorAll('.slide');

    // starting slide 
    let currentSlide = 1;

    // last slide
    const lastSlide = slides.length - 1;

    // navigate right
    const nextSlide = () => {
      if(currentSlide < lastSlide) {
        currentSlide++;
        navigateSlide(currentSlide);
      } 
    hideArrows();
    }

    // navigate left
    const previousSlide = () => {
      if(currentSlide > 0) {
        currentSlide--;
        navigateSlide(currentSlide);
      } 
      hideArrows();
    }

    const hideArrows = () => {
      // hide left arrow
      if(currentSlide === 0) {
        previousSlideArrow.style.display = 'none';
      } else {
        previousSlideArrow.style.display = 'block';
      } 
      
      // hide right arrow
      if(currentSlide === lastSlide) {
        nextSlideArrow.style.display = 'none';
      } else {
        nextSlideArrow.style.display = 'block';
      } 
    }
    hideArrows();

    // navigate through slides
    const navigateSlide = (currentSlide) => {
      slides.forEach(
        (slide, index) => (slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`) 
        );
    }; 
    navigateSlide(currentSlide);

    previousSlideArrow.addEventListener("click", previousSlide);
    nextSlideArrow.addEventListener("click", nextSlide);

  });

  return (
    <main className='featured-property-container'>
      <h1>Featured Properties</h1>
      <div className="featured-property-content page-width">
        <div className="slide-container">
          {
          featuredproperties.map((property, index) => {
            return <div className="slide" key={index}>
              {property.label &&
                <div className="label-container">
                  {property.label}
                </div>
              }
              <div className="image-container">
                <img className="feature-property-image" src={`${property.img}`} alt="" />
              </div>
              <div className="property-information">
                <h3>{property.price}</h3>
                <p>{property.summary}</p>
                <div className="property-specs">
                  <div className="spec-container bed-spec-container">
                    <img src={BedIcon} alt="" />
                    <p>{property.bedrooms}</p>
                  </div>
                  <div className="spec-container bath-spec-container">
                    <img src={BathIcon} alt="" />
                    <p>{property.bathrooms}</p>
                  </div>
                  <div className="spec-container parking-spec-container">
                    <img src={ParkingIcon} alt="" />
                    <p>{property.parking}</p>
                  </div>
                </div>
                <p className='property-decription'>{property.description}</p>
                <div className="agent-container">
                  <img src={property.agentimage} alt="" />
                  <div className="agent-details">
                    <p className="agent-name">{property.agent}</p>
                    <p className="view-contact">View contact number</p>
                  </div>
                </div>
              </div>
            </div>
          })
          }
        </div>
        <button className='slide-button slide-left'>
          <img src={LeftArrow} alt="" />
        </button>
        <button className='slide-button slide-right'>
          <img src={RightArrow} alt="" />
        </button>
      </div>
    </main>
  )
}
 
export default FeatureProperty 