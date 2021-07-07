import { Avatar } from '@material-ui/core'
import React ,{ forwardRef ,useState}  from 'react'
import logo from './assets/company.png'
import Auxiliary from './Auxiliary'
import './offreCardRight.css'
import {url} from './BaseUrl';

import {FacebookShareButton,FacebookIcon, LinkedinShareButton, LinkedinIcon} from 'react-share'
import ShowMoreText from 'react-show-more-text';


const offreCardRight = forwardRef(
    (
        {id, title, company, addresse , description  ,salary,industry, poste , jobTime ,creator } ,ref) => {
    const Capitalize =(str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
        }

   const [creatorr,setCreator]= useState("")
  

    return (
       <Auxiliary>
           <div style={{borderBottom:'1px solid rgba(0,0,0,0.08)'}} className="offre_card">
           <div className="offre_card_header">
     <img style={{width:'120px' , height:'120px'}} src={
                    logo
                    } alt='hamma'></img>
     <div className="offre_card_info">
         <h2>{title}</h2>
         <p  >{company}</p>
         <p style={{textDecoration:'none',cursor:'auto'}} >{addresse}</p>
         <div style={{   display: 'flex' , marginTop:'2px'}}>
          
    
        <p style={{ color : '#057642', fontSize:'13px',lineHeight:'1.7' }}> Be the first applicant</p> 
         </div>  
  
       <div style={{   display: 'flex',flexWrap:'wrap' , marginTop:'10px'}}> 
  <button className="btn" > Apply now</button>
  <button   className="btn2" > Save</button>  
        </div>
       
     </div>
     <div className="pencil">
     <div style={{marginRight:'10px'}}>
     <FacebookShareButton
    url={`autohire.com/jobs/${id}`}
    quote={title +" "+ company +" " + addresse}
    hashtag="#AutoHire #Jobs">
    <FacebookIcon size={40} round={true}/>
    </FacebookShareButton>
</div>
<LinkedinShareButton
title={title}
summary={description}
source="AutoHire"
url={`autohire.com/jobs/${id}`}
>
<LinkedinIcon size={40} round={true}/>
</LinkedinShareButton>
                </div>
  
 </div>
</div>
{ creatorr ?
    <div className="offre_card_footer">
<h2 style={{ fontSize:'15px' ,fontWeight:'normal' , color:'gray' , lineHeight:'1.7'}}> Posted by</h2>
<div style={{ display:'flex',alignItems:'center'}}>
<Avatar src={`${url}images/${creator}.jpeg`} style={{height:'50px' ,width:'50px'}}> </Avatar>
<div>
<h3 style={{marginLeft:'8px',fontWeight:'600',lineHeight:'1.4'}}>{Capitalize(creatorr.firstName)}  {Capitalize(creatorr.lastName)}</h3>
<p style={{marginLeft:'8px',fontWeight:'400'}}>{Capitalize(creatorr.position) +" at "+ Capitalize(creatorr.entreprise)}</p>
</div>
</div>
</div >

:
<div></div>

}

<div className='offre_description'> 
    <h5 >Job Description</h5>
    <ShowMoreText
                lines={9}
                more='Show more'
                less='Show less'
                className='desc'
                anchorClass='my-anchor-css-class'
                expanded={false}          
            >
               {description}
            </ShowMoreText>
<div className='offre_description_details'>
<div className ='offre_box'>
    <h3> Salary</h3>
    <p> {salary}</p>
</div>
<div className ='offre_box'>
    <h3> Employement Type</h3>
    <p> {jobTime}</p>
</div>
<div className ='offre_box'>
    <h3> Industry</h3>
    <p> {industry}</p>
</div>
<div className ='offre_box'>
    <h3> Job Functions</h3>
    <p> {poste}</p>
</div>
    </div> 
</div>

       </Auxiliary>       
    )
})

export default offreCardRight