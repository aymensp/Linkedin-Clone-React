import React ,{ forwardRef }  from 'react'
import logo from './assets/company.png'
import './offresCardLeft.css'

const OffreCardsLeft = forwardRef(({ title, company, addresse },ref) => {

    return (

        <div  className="offre">

           <div className="offre__header">
                <img style={{width:'50px' , height:'50px'}} src={logo } alt="company"></img>
                <div className="offre__info">
                    <h3>{title}</h3>
                    <p >{company}</p>
                    <p >{addresse}</p>
                    <div style={{   display: 'flex' , marginTop:'2px'}}>

                      
                        <p style={{ color : '#057642' , fontSize:'13px' }}> Be the first applicant</p>

                    </div>
                </div>
            </div>
        </div>
    )

})


export default OffreCardsLeft