import React from 'react'
import graphics from '../assets/images/icons8-graphic-design-64.png'
import web from '../assets/images/icons8-web-development-64.png'
import dm from '../assets/images/icons8-social-media-64.png'
import seo from '../assets/images/icons8-seo-64.png'
import email from '../assets/images/icons8-email-marketing-64.png'

export const DataContext = React.createContext()


const GlobalData = (props) => {
   
    
    const data= [
        {
          id:1,
          pic:graphics,
          name:"Graphics Design"  ,
          des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eveniet autem harum deserunt velit necessitatibus delectus culpa quibusdam dolore nostrum?."
        },
        {
            id:2,
            pic:web,
            name:"Website Development"  ,
            des: "Web development can range from developing the simplest static website for most complex web-based internet applications."  
        },
        {
            id:3,
            pic:seo,
            name:"Search Engine Optimization"  ,
            des: "We help you improve your Google ranking and increase your organic (non-paid) website traffic. SEO is more than just incorporating keywords and we can help to optimize all elements."  
        }
       ,
        {
            id:4,
            pic:dm,
            name:"Social Media Managemat & Merketing"  ,
            des: "We help you with social media management, advertising and strategic content creation to help you grow your audience and reach new prospects."  
        }
       ,
        {
            id:5,
            pic:email,
            name:"Email Merketing"  ,
            des: "We help you with social media management, advertising and strategic content creation to help you grow your audience and reach new prospects."  
        }
       ,
        {
            id:5,
            pic:email,
            name:"Email Merketing"  ,
            des: "We help you with social media management, advertising and strategic content creation to help you grow your audience and reach new prospects."  
        }
    ]
    return (
        <div>
            <DataContext.Provider value={{data}}>
                {props.children}
            </DataContext.Provider>
        </div>
    )
}

export default GlobalData
