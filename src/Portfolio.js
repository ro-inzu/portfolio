import React from "react"
import Thumbnail from './Thumbnail'
import './styles.css';
import MediaQuery from 'react-responsive'


const Portfolio = (props) =>{
    return(
        <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <div className="mainContainer" >
              <div className='mainContainer-img'>
                  <img class ='roinImg' src={require('./images/roin1.png')} alt ='Img Not Found' resizeMode="contain"/>
              </div>
          </div>
          <div className="container-socials">
                <div className='socials'>
                    <Thumbnail
                        a="https://www.linkedin.com/in/rosendo-inzunza-154736ba/"
                        title="Linkedin"
                        icon = 'linkedin'
                        size = '10'
                    />
                    <Thumbnail
                        a="https://www.github.com/roinzunza"
                        title="Github"
                        icon = 'github'
                        size = '10'
                    />
                    <Thumbnail
                        a="https://www.instagram.com/roroinzu"
                        title="Instagram"
                        icon = 'instagram'
                        size = '10'
                    />
                </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <div className="mainContainer-mobile" >
              <div className='mainContainer-img-mobile'>
                  <img class ='roinImg' src={require('./images/roin1.png')} alt ='Img Not Found' resizeMode="contain"/>
              </div>
          </div>
          <div className="container-socials">
                <div className='socials'>
                    <Thumbnail
                        a="https://www.linkedin.com/in/rosendo-inzunza-154736ba/"
                        title="Linkedin"
                        icon = 'linkedin'
                        size = '10'
                    />
                    <Thumbnail
                        a="https://www.github.com/roinzunza"
                        title="Github"
                        icon = 'github'
                        size = '10'
                    />
                    <Thumbnail
                        a="https://www.instagram.com/roroinzu"
                        title="Instagram"
                        icon = 'instagram'
                        size = '10'

                    />
                </div>
          </div>
        </MediaQuery>

        </div>
    )
}

export default Portfolio;
