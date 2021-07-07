import React, { useEffect } from 'react';
import { withRouter ,Redirect,Switch,Route, Router, useHistory,} from 'react-router-dom';
import Acceuil from './Acceuil';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import Offres from './offres';
import PostedJob from './PostedJob';
import PostJob from './PostJob';
import MyJobs from './MyJobs';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Signup from './Signup';


 function App() {
  const user = useSelector(selectUser);
  let history = useHistory()
  const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {
   
        if (!user) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
           // check if route is restricted by role
        if (roles && user.role !=roles) {
            // role not authorised so redirect to home page
            return <Redirect to={{ pathname: '/'}} />
        }
    // authorised so return component
        return <Component {...props} />
    }} />
  )
 return (
    <div >

     
      <Switch>
        <PrivateRoute exact path="/"  component={Acceuil} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path ="/login"  component={Login}/>
        <Route exact path ="/signup"  component={Signup}/>

     <PrivateRoute  path="/jobs"  roles='Job Seeker' component={Offres}/>
     <PrivateRoute exact path="/jobsSettings" roles='Human Resource' component={PostedJob}/>
     <PrivateRoute exact path="/postJob" roles='Human Resource' component={PostJob}/>
  
      </Switch>
  
   </div>
  );
}

export default withRouter(App);
