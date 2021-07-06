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
      {/* <Chat />
     <Switch history={history}>
     <Route exact path ="/login"  component={Login}/>
     <Route exact path ="/signup"  component={Signup}/>

     <PrivateRoute exact path="/"  component={Acceuil}/>
     <PrivateRoute  path="/jobs"  roles='test' component={Offres}/>
     <PrivateRoute exact path="/profile"  component={Profile}/>
     <PrivateRoute exact path="/jobsSettings" roles='Human Resource' component={PostedJob}/>
     <PrivateRoute exact path="/myJobs"  component={MyJobs}/>
     <PrivateRoute exact path="/postJob" roles='Human Resource' component={PostJob}/>
     <PrivateRoute path="/company"  component={Company} />
     <PrivateRoute exact path="/emp" roles='Human Resource' component={EmployeeRH}/>
     <PrivateRoute path="/test"   component={Test} />
     <PrivateRoute path="/applicants"  roles='Human Resource' component={Applicants} />
     <Route path="/chat" component={Chat}/>
     <PrivateRoute exact path="/video"  component={AppV}/>
     <PrivateRoute exact path="/admin" roles='ADMIN' component={DashboardAut}/>
     <PrivateRoute path="/listcompany" roles='ADMIN' component={ListCompany} />
     <PrivateRoute path="/listTest" roles='ADMIN' component={ListTest} />
     <PrivateRoute path="/addcompany" roles='ADMIN' component={addCompany} />
     <PrivateRoute path="/addTest" roles='ADMIN' component={addTest} />
     <PrivateRoute exact path="/gotot"  component={GotoT}/>
     <Route path="/resumeCreator" component={resumeCreator} />

     </Switch> */}
   </div>
  );
}

export default withRouter(App);
