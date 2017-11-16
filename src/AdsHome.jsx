import React from 'react'
import css from './css/AdsHome.css'
import adsimg from './img/ads-home.jpg'

const AdsHome = (props) => {
    return(
        <div>
         <h3>Super Promoção</h3>
         <figure className="ads-home">
         <img src={adsimg}/>
         </figure>
        </div>
    )
}
export default AdsHome