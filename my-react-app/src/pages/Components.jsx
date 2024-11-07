import React from 'react'
import Mypage from './MyPage'


const About = (props) => {
    return (
        <>
            <Mypage heading1="Welcome to About Page" heading2="Contact To know more about us" 
             para='Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.' btntxt='Get started'  showInput={true}/>
           
        </>
    )
}

export default About