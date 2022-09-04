import '../styles/content-ads.scss';
import ImageOne from '../images/CTA1.png'
import ImageTwo from '../images/CTA2.png'
import ImageThree from '../images/CTA3.png'
import React, {useEffect} from 'react'

function ContentAds() {

  const contentAds = [
    {
      adTitle: "Mortgage Calculator",
      adImage: ImageOne,
      adDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      adTitle: "Contact Us",
      adImage: ImageTwo,
      adDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      adTitle: "Follow us on Facebook",
      adImage: ImageThree,
      adDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]

  useEffect(() => {
    const cards = document.querySelectorAll('.ad-container');

    cards.forEach(function(card) { 
      card.addEventListener("mouseenter", () => {
          card.style.transform = "translateY(-30px)";
          
          card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0px)";
          })
      });
    })
  })

  return (
    <main className="content-ads-container">
      <div className="containt-ads-content page-width">
        {
          contentAds.map(ad => {
            //   {ad.adImage}<p>test</p>
            // </div>
            return <div className="ad-container" key={`${ad.img + ad.adTitle}-01`}>
              <img src={`${ad.adImage}`} alt="" />
              <div className="ad-text-content">
                <h3>{ad.adTitle}</h3>
                <p>{ad.adDescription}</p>
              </div>
            </div>
          })
        }
      </div>
    </main>
  )
}
 
export default ContentAds 