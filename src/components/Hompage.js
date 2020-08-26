import React from 'react';
import Profile from './Profile'
import Project from './Projects'
import AboutMe from './AboutMe'
import Skills from './Skills ';
import Footer from './Footer';
class Hompage extends React.Component{
    render(){
        return(
            <div style={{color:"black"}}>
                <Profile />
                
                <AboutMe />
                <Skills />
                <Project />
                <Footer />
        
            </div>
        )
    }
}

export default Hompage