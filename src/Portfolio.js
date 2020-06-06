import React from "react";
import Thumbnail from './Thumbnail';
import './styles.css';
import MediaQuery from 'react-responsive';


const SocialMediaIcons = () =>{
    return(
        <div className="container-socials">
            <div className = 'socials'>
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
    )
}

const Desktop = () =>{
    return(
        <div>
        <MediaQuery query="(min-device-width: 1224px)">
        <div className="mainContainer" >
          <div className='mainContainer-img'>
              <img className ='roinImg' src={require('./images/roin1.png')} alt ='Img Not Found'/>
              <div className = 'overlay'>
                  <p className = 'text'> What's up?<br/><br/>My name is Ro-in(Rosendo Inzunza).<br/><br/>I'm a Software Engineer and music producer.<br/><br/>Concentration:Python, Django, CI/CD and React.<br/><br/>You may contact me at the links below!</p>
              </div>
        </div>
        </div>
        <SocialMediaIcons/>
        </MediaQuery>
        </div>
    )
}

const Mobile = () =>{
    return(
        <div>
        <MediaQuery query="(max-device-width: 1224px)">
        <div className="mainContainer-mobile" >
              <div  className='mainContainer-img-mobile' >
                  <img classname ='img'src={require('./images/roin1.png')} alt ='Img Not Found' />
                  <div className = 'overlay'>
                      <p className = 'text'> What's up?<br/><br/>My name is Ro-in(Rosendo Inzunza).<br/><br/>I'm a Software Engineer and music producer.<br/><br/>Concentration:Python, Django, CI/CD and React.<br/><br/>You may contact me at the links below!</p>
                  </div>
            </div>
        </div>
        <SocialMediaIcons/>
        </MediaQuery>
        </div>
    )
}

const Portfolio = () =>{
    return(
        <div>
        <Desktop/>
        <Mobile/>
        </div>
    )
}

export default Portfolio;
