import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';
//https://www.npmjs.com/package/social-media-icons-react


const Thumbnail = (props) =>{
    return(
        <div className="soc-thumbnails">
         <a href= {props.a} target ='_blank'>
           <div className="project-image">
             <img src={props.image} alt=""/>
              <SocialMediaIconsReact backgroundColor ='white' iconColor = 'black' size = '40' icon={props.icon} url={props.a} />
           </div>
         </a>
        </div>
    )
}

export default Thumbnail;
