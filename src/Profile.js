import React , { useState } from 'react'
import './Profile.css';
import './Sidebar.css';
import Header from './Header';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import logo from './assets/company.png'
import './App.css';
import Modal from './uploadPdf'
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Profile() {
 const [purchasing ,setPurchasing] = useState(false);
 const [purchasing1 ,setPurchasing1] = useState(false);
 const user = useSelector(selectUser)
    
const Capitalize =(str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
const profileCards = (
<div style={{borderRadius:'10px',backgroundColor:'white' ,paddingTop:'10px',paddingBottom:'10px',border:'1px solid lightgray'}}>

<Modal  show={purchasing} modalClosed={()=>setPurchasing(false)}/>

<div className="profile__content_top" style={{marginBottom:'0px',borderRadius:'0px',border:'0px'}}>

<div style={{display:'flex'}}>
                    <div style={{flex:'0.97'}} >
                    <p style={{fontSize:"18px", lineHeight: '1.3333' ,marginLeft:'20px' ,marginTop:'20px'}}>
                    Experience
                    </p>
                    </div>
            <div onClick={()=>setPurchasing(true) }className="pencil" style={{marginTop:'13px'}}>
                <CreateTwoToneIcon className="pencil__icon" />
                </div>
                </div><p style={{fontSize:"13px" , lineHeight: '1.3333' ,margin:'20px'}}>Product Manager Hong KongFemale Entrepreneurs Worldwide June - Sept. 2020Spearheaded FEW's Affiliation Marketing Platform development projectAdvised upper management to use ''Post Affiliate Pro'' to track affiliate programs & networks.Responsible for the reporting and documentation of all development activitiesManaged a whole development team (Front End, Back End, Mobile, Designers).Drove innovation and new product development.Front End Developer Tunis, TunisiaConvergen Agency Aug. 2019 - June. 2020Worked on several Marketing Technology Saas applications: Advisely and Cartifio.Developed and maintained critical components of Sass Applications using React componentsTranslated design team's UX wireframes and mockups into responsive, interactive features using ReactJSEnsured proper documentation and reports in all stages of product life cyclesPerformed bug fixes and code reviewsDeveloped app integrations with REST and other APIs for Shopify, Facebook Ads and Google Analytics</p>
</div>
<div className="profile__content_top" style={{marginBottom:'0px',borderRadius:'0px',borderRight:'0px',borderLeft:'0px'}}>


                    <p style={{fontSize:"18px", lineHeight: '1.3333' ,marginLeft:'20px' ,marginTop:'20px'}}>
                    Education
                    </p>
             <p style={{fontSize:"13px" , lineHeight: '1.3333' ,margin:'20px'}}>Master's in Software Engineering Tunis, TunisiaEsprit School of Engineering Sep. 2018 - June 2021Bachelor of Computer Science Sousse, TunisiaHigher Institute of Applied Sciences and Technology of Sousse Sep. 2014 - June. 2018Computer Forensics / Network Security Certification Spokane, W ASpokane Falls Community College – Thomas Jefferson Scholarship Sep. 2016 - June 2017 </p>
</div>
<div className="profile__content_top" style={{marginBottom:'0px' ,border:'0px',borderRadius:'0px'}}>


                    <p style={{fontSize:"18px", lineHeight: '1.3333' ,marginLeft:'20px' ,marginTop:'20px'}}>
                    Skills
                    </p>
              <p style={{fontSize:"13px" , lineHeight: '1.3333' ,margin:'20px'}}>Coding Javascript · PHP · C# · JavaFront End ReactJS · Redux · Hooks · GraphQL · Axios · Sass · Bootstrap · HTML5 · CSS3 · UX/UI ConceptsBack End NodeJS · ExpressJS · MongoDB · Firebase · MySQL · Rest APIsWork ExperienceProduct Manager Hong KongFemale Entrepreneurs Worldwide June - Sept. 2020Spearheaded FEW's Affiliation Marketing Platform development projectAdvised upper management to use ''Post Affiliate Pro'' to track affiliate programs & networks.Responsible for the reporting and documentation of all development activitiesManaged a whole development team (Front End, Back End, Mobile, Designers).Drove innovation and new product development.Front End Developer Tunis, TunisiaConvergen Agency Aug. 2019 - June. 2020Worked on several Marketing Technology Saas applications: Advisely and Cartifio.Developed and maintained critical components of Sass Applications using React componentsTranslated design team's UX wireframes and mockups into responsive, interactive features using ReactJSEnsured proper documentation and reports in all stages of product life cyclesPerformed bug fixes and code reviewsDeveloped app integrations with REST and other APIs for Shopify, Facebook Ads and Google Analytics</p>
</div>
</div>
);
return(
<div className="profile">

<Header />
        <div className="profile__body">

            <div className="profile__content_top_left">

                <div className="profile__content_top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDBBMHxleHBsb3JlLWZlZWRBMXx8fGVufDB8fHw%3D&w=1000&q=80" alt=""/>
                <div style={{display:'flex'}}>
                <Avatar  className="profile__content_top__avatar"/>
                <div style={{flex:'0.97' }}>
                </div>

                <div className="pencil" onClick={()=>setPurchasing1(true) }>
                <CreateTwoToneIcon className="pencil__icon" />
                </div>
                </div>
                <div style={{display : 'flex' ,marginLeft:"20px"}}>
                <div style={{width:'500px'}} >
                <p style={{ fontSize: '24px',lineHeight: '1.5'}}>{Capitalize(user.firstName) +" "+ Capitalize(user.lastName)}</p>
                <p style={{fontSize:"18px" , maxWidth : '450px' , lineHeight: '1.3333' }}>{Capitalize(user.position) +" at "+ Capitalize(user.company)}</p>
                <p style={{fontSize : "16px",  lineHeight: '1.5' , marginTop : '3px'}}> {Capitalize(user.address)}</p>
                </div>
                <div  style={{display : 'flex',marginLeft:"20px"  ,height:'50px' }}>
                <img style={{ height:'30px' , width: '30px' , marginRight :'10px' }} src={logo}/>
                <p className="p_position"  > {Capitalize(user.company)} </p>
                </div>
                </div>
                </div>
                <div className="profile__content_top">
                <div style={{display:'flex'}}>
                    <div style={{flex:'0.97'}} >
                    <p style={{fontSize:"18px", lineHeight: '1.3333' ,marginLeft:'20px' ,marginTop:'20px'}}>
                    About
                    </p>
                    </div>
                <div className="pencil" style={{marginTop:'13px'}}>
                <CreateTwoToneIcon className="pencil__icon" />
                </div>
                </div>
                <p style={{fontSize:"13px" , lineHeight: '1.3333' ,margin:'20px'}}>
                 A software engineering student, passionate about Web Development, Mobile Development,Cyber Security enthusiast, fearless
                 and always eager to learn. I always keep my self up to date with the latest technologies and I enjoy working on innovative
                 projects. Tags: JavaScript, TypeScript, Angular, Android ,Redux, HTML5, CSS3, Bootstrap, JQuery, Sass, UI/UX Concepts,
                 NodeJS, MySQL, MongoDB, REST APIs, ExpressJS, GraphQL, Git
                </p>
                </div>
               {  profileCards 
              }
        </div>

            <div style={{gridArea:'aside', height:'300px',backgroundColor:'black'}}></div>
            <div style={{gridArea:'aside', height:'300px',backgroundColor:'white'}}>    </div>

        </div>
</div>
);
}
export default Profile ;


