import React , { useState, useEffect } from 'react'
import './List.css'
import FlipMove from 'react-flip-move'
import logo from './assets/company.png'
import { useHistory } from 'react-router';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { db } from './firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function List(props) {
    const [jobs, setJobs] = useState([])
    const user = localStorage.getItem('user')
    const currentUser = useSelector(selectUser)
    let history = useHistory()  
    useEffect(() => {
      db.collection("jobs").where('creator','==',currentUser.username) .onSnapshot(snapshot => (
        setJobs(snapshot.docs.map(doc => (
          {
            id: doc.id,
            data: doc.data(),
          }
        )))
      ))
    }, [])
       
return(
   
   <div className='list'>
     
  {jobs.length!==0 ?
  <div style={{width:'300px'}}>
  {jobs.map(({ id,data :{  titre, company, address ,createdAt  } })  => (
        <div key={id}> 
         <FlipMove>
         <div >
<div className="offre__header" 
>
<img style={{width:'50px' , height:'50px',paddingTop:'10px'}} src={logo}></img>
<div style={{borderBottom:'1px solid rgb(219, 214, 214) ', width:'100%',padding:'10px'}} className="offre__info">
   <h4 style={{color:'black' , lineHeight:'1.5'}}>{titre}</h4>
   <p style={{color:'black'}}>{company}</p>
   <p >{address}</p>
   <div style={{   display: 'flex' , marginTop:'2px'}}>
   <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'13px' }} > <BsFillPersonLinesFill/> &nbsp; Candidates </p>

   </div>
</div>
</div>
</div>
       </FlipMove>
          </div>
      ))}
  </div>
:
<div style={{width:'300px'}} >
<h3>Apply for new jobs</h3>
<button onClick={()=>{history.push('/jobs')}}>click Here!</button>
</div>
       }
      
    </div>

)
}

export default List