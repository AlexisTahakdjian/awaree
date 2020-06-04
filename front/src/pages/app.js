import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "./profile"
import Login from "../components/user/login"
import Register from "../components/inscription/register"
import Entreprise from "./entreprise"
import NewProject from "./newProject"
import LayoutConnection from "../components/layout/layoutConnection"
import Inscription from "./inscription";
import {Provider} from "react-redux";
import store from '../store'
import setJwtToken from "../utils/setJWTToken";
import jwt_decode from 'jwt-decode';
import {SET_CURRENT_USER} from "../actions/types";

//récupération du token dans le localStorage
const jwtToken = localStorage.jwtToken;
if(jwtToken){
  setJwtToken(jwtToken);
  const decodedJwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decodedJwtToken,
  });
  const currentTime = Date.now() / 1000;
  if(decodedJwtToken.exp < currentTime){
    //déconnexion
  }

}

const App = () => (
  <Provider store={store}>
    {jwtToken ? (<Layout>
      <Router>
        <PrivateRoute path="/app/profile" component={Profile}/>
        <Login path="/app/login"/>
        <Register path="/app/register"/>
        <PrivateRoute path="/app/entreprise" component={Entreprise}/>
        <PrivateRoute path="/app/newProject" component={NewProject}/>
      </Router>
    </Layout>) : (
      <LayoutConnection>
        <Router>
          <Login path="/app/login"/>
          <Register path="/app/register"/>
          <Inscription path="/app/inscription"/>
        </Router>
      </LayoutConnection>
    )}
  </Provider>
)

export default App
