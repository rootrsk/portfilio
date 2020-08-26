import React, { useState } from 'react';
import image from '../images/profile.jpg'
import myImage from '../images/img4.png'
import { useEffect } from 'react';



const Profile  =() =>{
    const introText = `Hello there, I'm Ravishankar a full-stack web developer.`
    
    const [displayText,setDisplayText] = useState('')
    useEffect(()=>{
        
        const typeWriter = async() =>{
            let text = ''
            for (let i = 0; i < introText.length; i++) {
                setTimeout(() => {
                    text = text+introText[i]
                    setDisplayText(text)
                }, 50*i);
            }
        }
        
        typeWriter()

    },[introText])



    return(
        <div className='profile'>

            <div className='profile_details'>
                <span id='intro'>{displayText} </span>
            </div>

            {/* <div className='profile_img'>
                <img src={image} className='profile-picture' alt='Dev img' />
            </div> */}
            <div className='Profile-Picture'>
                <img src={myImage} alt='imgg'/>
            </div>
            
            
        </div>
    )
}


export default Profile