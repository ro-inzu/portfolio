import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { motion } from "framer-motion"
//https://www.npmjs.com/package/social-media-icons-react


const Thumbnail = (props) =>{
    return(

        <div className="soc-thumbnails">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: "easeOut", duration: 2 }}>
            <a href= {props.a} target ='_blank'>
              <div className="project-image">
                <img src={props.image} alt=""/>
                 <SocialMediaIconsReact backgroundColor ='white' iconColor = 'black' size = '40' icon={props.icon} url={props.a} />
              </div>
            </a>
        </motion.div>
        </div>

    )
}

export default Thumbnail;
