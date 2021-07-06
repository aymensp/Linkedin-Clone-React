import { Avatar } from '@material-ui/core'
import React ,{ forwardRef ,useEffect,createRef,useState, useRef}  from 'react'
import logo from './assets/company.png'
import Auxiliary from './Auxiliary'
import './offreCardRight.css'
import {url} from './BaseUrl';
import axios from 'axios';
import { useHistory } from 'react-router'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {FacebookShareButton,FacebookIcon, LinkedinShareButton, LinkedinIcon} from 'react-share'
import ShowMoreText from 'react-show-more-text';


const offreCardRight = forwardRef(
    (
        {id, title, company, addresse, date , description  ,salary,industry, poste , jobTime ,creator,users ,saves,link  } ,ref) => {
    const userr = localStorage.getItem('user')
    const currentUser = JSON.parse(userr); 
    const Capitalize =(str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
        }
    const [anchorEl, setAnchorEl] = React.useState(null);
    let history = useHistory()
    const [dateNow, setDate] = useState(date)
    const [candiates, setCandidates] = useState([])
    const [companyy,setCompany] =useState()
    const [creatorr,setCreator] =useState()
    const [savedJobs,setSavedJobs] = useState([])
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      //close menu
      const handleClose = () => {
        setAnchorEl(null);
      };
    useEffect(() => {
      
    axios.get(`${url}entreprise/n/${company}`)  
    .then(res=>{
       setCompany(res.data[0])
       if(companyy!==undefined){
       }    
    }) 
    axios.post(`${url}user/me/`,{
        username : creator
    })  
    .then(res=>{
      setCreator(res.data)   
     
    }) 
           
        const hamma =[];
        if(users){
            users.map((item)=>{setCandidates([...hamma,item])})
        }
       
        if(saves){
            setSavedJobs(saves)
        }  
            var timeStampDiffInSeconds = null;
            const currentTimeStampInSeconds = parseInt(new Date().getTime()/1000);
            const postedDateTimeStampInSeconds = parseInt(new Date(date).getTime()/1000);
            timeStampDiffInSeconds = currentTimeStampInSeconds-postedDateTimeStampInSeconds;
         
            if  (timeStampDiffInSeconds>=0 && timeStampDiffInSeconds<60*3) {
                setDate("A few seconds ago") ;
              }
 
              else if (timeStampDiffInSeconds>=60*3 && timeStampDiffInSeconds<60*60)
                 //between 180 seconds to 60 minutes
                 {setDate("Posted "+parseInt(timeStampDiffInSeconds/(60*3)) + "minutes ago")  ;}       

             else if  ( timeStampDiffInSeconds>=60*60 && timeStampDiffInSeconds<60*60*24)
                 //between 60 minutes to 24 hours
                 {setDate("Posted "+parseInt(timeStampDiffInSeconds/(60*60)) + "hours ago") ; }               
                 
             else if  ( timeStampDiffInSeconds>=60*60*24 && timeStampDiffInSeconds<60*60*24*7)
                 // between 24 hours to 30 days
             {    setDate( "Posted "+parseInt(timeStampDiffInSeconds/(60*60*24)) + " days ago") ;}
                
             else if  ( timeStampDiffInSeconds>=60*60*24*7 && timeStampDiffInSeconds<60*60*24*30)
             // between 24 hours to 30 days
         {    setDate( "Posted "+parseInt(timeStampDiffInSeconds/(60*60*24*7)) + " weeks ago") ;}
             else if ( timeStampDiffInSeconds>=60*60*24*30 && timeStampDiffInSeconds<60*60*24*30*365)
                 // between 30 days to 365 days
                { setDate("Posted "+parseInt(timeStampDiffInSeconds/(60*60*24*30)) + "months ago")  ;}
       }
  ,[ ])
  const Navigate =(company)=>{
    history.push({pathname:'/company',
     search:  'industry'+'='+company
     });
       }
  const Apply =( ) => {
    axios.post(`${url}offre/apply/new`, {
        idUser:currentUser._id,
        idOffre:id
           })
              .then((response) => {
                
                  setCandidates([...candiates,currentUser._id]);
            
            }, (error) => {
                console.log(error);
              });
 }
 const Save =() => {
    axios.post(`${url}offre/Save/offre`, {
        idUser:currentUser._id,
        idOffre:id
           })
              .then((response) => {
                
                console.log(response.data)
                setSavedJobs(response.data.saves)
                
            }, (error) => {
                console.log(error);
              });
 }
 const Unsave =() => {
    axios.post(`${url}offre/Unsave/offre`, {
        idUser:currentUser._id,
        idOffre:id
           })
              .then((response) => {
                
                console.log(response.data)
                setSavedJobs(response.data.saves)
               
            }, (error) => {
                console.log(error);
              });
 }

    return (
       <Auxiliary>
           <div style={{borderBottom:'1px solid rgba(0,0,0,0.08)'}} className="offre_card">
           <div className="offre_card_header">
     <img style={{width:'120px' , height:'120px'}} src={
                    logo
                    } alt='hamma'></img>
     <div className="offre_card_info">
         <h2>{title}</h2>
         <p onClick={()=>Navigate(company)} >{company}</p>
         <p style={{textDecoration:'none',cursor:'auto'}} >{addresse}</p>
         <div style={{   display: 'flex' , marginTop:'2px'}}>
          
    
        <p style={{ color : '#057642', fontSize:'13px',lineHeight:'1.7' }}> Be the first applicant</p> 
         </div>  
  
       <div style={{   display: 'flex',flexWrap:'wrap' , marginTop:'10px'}}> 
  <button onClick={ Apply} className="btn" > Apply now</button>
  <button onClick={ Save}  className="btn2" > Save</button>  
        </div>
       
     </div>
     <div className="pencil"onClick={(handleClick)}>
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
     {/* <FacebookShareButton
    url="192.168.1.3:3001/jobs"
    quote={title +" "+ company +" " + addresse}
    hashtag="#AutoHire #Jobs">
    <FacebookIcon  />
</FacebookShareButton> */}
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
{ companyy!==undefined ?
    <div className='company_details'> 
<h3>About the company</h3>
<div>
    <div style={{display:'flex',alignItems:'center'}}>
        <img style={{width:'72px',height:'72px',margin:'10px'}} src={link?
                    logo:
                    `${url}images/${company}.png`}></img>
        <h3>{company}</h3>
    </div>
</div>
          <ShowMoreText
                /* Default options */
                lines={3}
                more='Show more'
                less='Show less'
                className='desc'
                anchorClass='my-anchor-css-class'
                expanded={true}    
            >
           {companyy.about}
            </ShowMoreText>
</div>:
<div></div>
}
       </Auxiliary>       
    )
})

export default offreCardRight