import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from './features/userSlice';
import {auth, db} from './firebase';
import logo from './assets/Linkedin-logo.png'
import './Login.css'
import { useHistory } from 'react-router';

function Login() {
  let history = useHistory();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const loginToApp = e => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          db.collection('users').doc('dOJftmcz9CPnQBQMCH6DE1qnNDC3').get()
          .then(snapshot => {
            setTimeout(()=>{
              dispatch(login({
                email: email,
                username: snapshot.data().username,
                firstName : snapshot.data().firstName,
                lastName :snapshot.data().lastName,
                position :snapshot.data().position,
                company : snapshot.data().company,        
                role : snapshot.data().role,
                address: snapshot.data().address,
                phoneNumber :snapshot.data().phoneNumber,
              }))
            },2000)
         
          }).then(
            setTimeout(()=>
            {
              history.push('/')
            },4000)
         
          )
          .catch(err => {
            console.log('Error getting documents', err);
          });
         
        })
        .catch(error => alert(error));
    };
   return (
     <div className="background">

<div style={{backgroundColor:'white'}} className="login"> 
            <img src={logo} alt=""/>
            
            <form>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Usename" type="text"/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
           <p>New to Linkedin? <a href='/signup' className="aa"> Join now</a></p>
        </div>
     </div>
      
    )
}
export default Login
