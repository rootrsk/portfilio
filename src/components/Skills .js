import React from 'react';
import reactLogo from '../images/reactLo.png'
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css.png'
import javaScriptLogo from '../images/javascript.png'
import nodeLogo from '../images/Node.png'
import socketLogo from '../images/socket.png'
import mongodbLogo from '../images/MongodbLogo.png'
import expressLogo from '../images/express.png'
const Skills = () =>{
    return (
        <div className='skills'>
            <h2>Skills</h2>
            
            {/* <h3>MERN</h3>
            
            <p>React</p>
            <p>Mongodb</p>
            <p>Node</p>
            <p>Express</p> */}

            <div className='Skill__logo__div'>
                <img src={htmlLogo} alt='html logo' />
                <img src={cssLogo} alt='css logo'/>
                <img src={javaScriptLogo} alt='javascript logo' />
                <img src={reactLogo} alt='react logo' />
                <img src={nodeLogo} alt='node logo' />
                <img src={expressLogo} alt='express logo' />
                <img src={mongodbLogo} alt='mongo logo' />
                <img src={socketLogo} alt='socket logo' />
            </div>
        </div>
    )
}

export default Skills