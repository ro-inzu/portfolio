import React from "react"
import Thumbnail from './Thumbnail'
import './styles.css';

const Portfolio = (props) =>{
    return(
        <div>
            <div className="mainContainer" >
                <div className='mainContainer-img'>
                    <img class ='roinImg' src={require('./images/roin1.png')} alt ='Img Not Found'/>
                </div>
            </div>
            <div className="container-socials">
                  <div className='socials'>
                      <Thumbnail
                          a="https://www.linkedin.com/in/rosendo-inzunza-154736ba/"
                          title="Linkedin"
                          icon = 'linkedin'
                      />
                      <Thumbnail
                          a="https://www.github.com/roinzunza"
                          title="Github"
                          icon = 'github'
                      />
                      <Thumbnail
                          a="https://www.instagram.com/roroinzu"
                          title="Instagram"
                          icon = 'instagram'
                      />
                  </div>
            </div>
        </div>
    )
}

export default Portfolio;
