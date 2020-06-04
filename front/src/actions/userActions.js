import axios from 'axios';
import {GET_ERRORS, SET_CURRENT_USER} from './types'
import setJwtToken from "../utils/setJWTToken";
import jwt_decode from 'jwt-decode';
import {navigate} from "gatsby";

export const register = (user, history) => async (dispatch) => {
    try{
        const res = await axios.post("http://127.0.0.1:8080/api/users/register", user);
        console.log("res: ",res)
        navigate(`/app/login`)

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        })
    }
};

export const login = (LoginRequest) => async (dispatch) => {
    try {
        const res = await axios.post(
            "http://127.0.0.1:8080/api/users/login",
            LoginRequest
        );
        //Extraction du token
        const {token} = res.data;
        // Stockage du token dans le localStorage
        localStorage.setItem("jwtToken", token);
        setJwtToken(token);
        //Decode le token
        const decoded = jwt_decode(token);
        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded,
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error,
        })
    }
};
