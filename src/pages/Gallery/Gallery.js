import React from 'react'
import './Gallery.css'
import './GalleryNavBar'
import World from '../../img/Gallery/world.jpg'
import Sedona from '../../img/Gallery/sedona.jpg'
import NewMexico from '../../img/Gallery/new-mexico.jpg'
import Inception from '../../img/Gallery/inception.jpg'
import HTown from '../../img/Gallery/h-town.jpg'
import Pearl from '../../img/Gallery/pearl.jpg'
import SmokeBomb from '../../img/Gallery/smoke-bomb.jpg'
import Stairs from '../../img/Gallery/stairs.jpg'
import Hurricane from '../../img/Gallery/hurricane.jpg'
import GalleryNavBar from './GalleryNavBar'
import LoneStar from '../../img/Gallery/lonestar.jpg'
import Portland from '../../img/Gallery/portland.png'
import Stanely from '../../img/Gallery/stanely.jpg'

function Gallery() {
  return (
    <>
    <GalleryNavBar/>
    <div className="img-container">
      <div className="img-content">
        <div className="wrapper">
          <div className="box postcard">
          <img src={World}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box sedona">
          <img src={Sedona}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box new-Mexico">
          <img src={NewMexico}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box pearl">
          <img src={Pearl}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box smokeBomb">
          <img src={SmokeBomb}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box inception">
          <img src={Inception}/>
          </div>
        </div>
        <div className="wrapper htown">
          <div className="box zoom-in">
          <img src={HTown}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box stairs">
          <img src={Stairs}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box hurricane">
          <img src={Hurricane}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box portland">
          <img src={Portland}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box loneStar">
          <img src={LoneStar}/>
          </div>
        </div>
        <div className="wrapper">
          <div className="box loneStar">
          <img src={Stanely}/>
          </div>
        </div>
      </div>
    </div>
    {/* <h1 className="portfolioHOne">nightzillla</h1>
    <img src={World}/> */}
    </>
  )
}

export default Gallery