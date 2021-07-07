import React , { useRef,useState, useEffect }from "react"
import './offres.css'
import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'
import FlipMove from 'react-flip-move'
import Header from "./Header"
import OffreCardsLeft from "./offreCardsLeft"
import OffreCardRight from "./offreCardRight"
import TableContainer from "@material-ui/core/TableContainer";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import Auxiliary from "./Auxiliary"
import Skeleton from '@material-ui/lab/Skeleton';
import { db } from './firebase'
import TablePagination from "@material-ui/core/TablePagination";

function Offres() {
  const [posts, setPosts] = useState([]);
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;
  const mapWrapper= useRef();
  const div= useRef();
  const [page, setPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }; 
 useEffect(() => { 
  db.collection("jobs").onSnapshot(snapshot => (
    setPosts(snapshot.docs.map(doc => (
      {
        id: doc.id,
        data: doc.data(),
      } 
    )
    ))
  ))
    },

 [])
let tabs =  <Auxiliary>
<Tabs  >   
<TabNav>
<TableContainer >  
 <header style={{borderBottom:'1px solid rgba(0,0,0,0.08)',position:'sticky', zIndex:'1'}}>
   <div style={{ padding:' 8px 12px 8px 10px',borderLeft:'solid 2px #eb0392' , alignItems:'center' , display:'flex' ,height:'56px'}}>
    <h1 style={{fontSize:'18px',fontWeight:'400',lineHeight:'1.5'}}>Jobs based on your Profile</h1>
   </div>
 </header>    
     <div style={{display:'flex',width:'100%'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>
    <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25} />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>
    <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>
    <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}/>
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>
    <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>
    <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
     
    </div>  <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
      </div>  <div style={{display:'flex'}} >
       <div style={{margin:'8px'}} >
      <Skeleton variant="rect" width={50} height={50} />
      </div>
      <div style={{flex:'0.9'}}>
      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
      </div>
    </div>
    </TableContainer> 
</TabNav>
<TabContent >
<div style={{borderBottom:'1px solid rgba(0,0,0,0.08)'}} className="offre_card">
<div className="offre_card_header">
<Skeleton variant="rect" width={120} height={120} />
<div style={{marginBottom:'100px'}} className="offre_card_info">
      <Skeleton height={25}  />
      <Skeleton animation={false} width="60%" />
      <Skeleton animation={false} width="40%"/>
      <Skeleton animation="wave" width="40%"/>
</div>
</div>
</div>
<div className="offre_card_footer">
<h2 style={{ fontSize:'15px' ,fontWeight:'normal' , color:'gray' , lineHeight:'1.7'}}> Posted by</h2>
<div style={{ display:'flex'}}>
<Skeleton variant="rect" width={50} height={50} style={{ marginRight: 10 }} />
<Skeleton height="25px" animation={false} width="60%" />
</div>
</div >
<div className='offre_description'> 
<Skeleton animation={false} width="90%" />
<Skeleton animation={false} width="90%" />
<Skeleton animation={false} width="90%" />
<Skeleton animation={false} width="90%" />

<div className='offre_description_details'>
<div className ='offre_box'>
<Skeleton animation={false} width="60%" />
<Skeleton animation={false} width="60%" />
</div>
<div className ='offre_box'>
<Skeleton animation={false} width="60%" />
<Skeleton animation={false} width="60%" />
</div>
<div className ='offre_box'>
<Skeleton animation={false} width="60%" /><Skeleton animation={false} width="60%" />
</div>
<div className ='offre_box'>
<Skeleton animation={false} width="60%" /><Skeleton animation={false} width="60%" />
</div>
</div>
</div>
</TabContent>
</Tabs>
</Auxiliary>    


if (posts.length!=0)
{

tabs =  <Tabs selected='1'  tabName='tab1' onLeaveTab={(currentIndex, nextIndex) => { console.log("leaveTab", currentIndex, nextIndex) }}
onShowTab={(e) => { 

  const map = new mapboxgl.Map({
    container: mapWrapper.current,
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [10.179099,36.803021],
    zoom: 13
  });
  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/driving'
  })
  map.addControl(directions, 'top-left');

   
      map.on('load',  function() {
    //  directions.setDestination(  [filteredList[0].data['longitude'],filteredList[0].data['lattitude']]);
    })
 
    // can be address in form setOrigin("12, Elm Street, NY")
}}
>        
<TabNav>
<TableContainer >  
 <header style={{borderBottom:'1px solid rgba(0,0,0,0.08)',position:'sticky', zIndex:'1'}}>
   <div style={{ padding:' 8px 12px 8px 10px',borderLeft:'solid 2px #0a66c2' , alignItems:'center' , display:'flex' ,height:'56px'}}>
    <h1 style={{fontSize:'18px',fontWeight:'400',lineHeight:'1.5'}}>Jobs based on your Profile</h1>
   </div>
 </header>
   {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ id,data :{  titre, company, address ,createdAt ,users,link } }) => (
     <TabNavItem key={id}> 
      <FlipMove>
         <OffreCardsLeft
       key={id}
       title={titre}
       company={company}
       addresse ={address}
       date ={createdAt}
       users={users}
       link ={link}
       />
         </FlipMove>
       </TabNavItem>
   ))}
   <div style={{marginLeft:'30px' ,width:'410px'}}>
   <TablePagination
      rowsPerPageOptions={[5, 10, 15]}
      count={posts.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
   </div>
    </TableContainer> 
</TabNav>
<TabContent >
<div></div>
   {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ id,data :{  titre, industry,company, address ,createdAt,description ,longitude,latitude, salary , position , jobTime , type,creator }  }) => (
     <TabPanel key={id}>
       <FlipMove>
         <OffreCardRight
       key={id}
       id={id }
       title={titre}
       company={company}
       addresse ={address}
       date ={createdAt}
       description={description} 
       salary={salary}
       longitude={longitude}
       latitude={latitude}
       industry= {industry}
       poste={position}
       jobTime={jobTime}
       type ={type}
       creator={creator}
       ref={id}
       />
       </FlipMove>
       </TabPanel>
   ))}
<div ref={div} style={{margin:'10px',padding:'15px',borderRadius:'15px',backgroundColor:'white',border:'1px solid rgba(0, 0, 0, 0.08)'}}>
       <h4 style={{marginBottom:'30px',fontSize:'19px',fontWeight:'500'}}>See your commute</h4>
       <div 
        ref={mapWrapper} 
        className="mapWrapper" 
      >
          </div>
          </div>
</TabContent>
</Tabs>
}
   return (
      <div className="offres">
       <Header/>    
       {tabs}
     </div>           
    )
  }
export default Offres ;