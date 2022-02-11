import React from "react";
import {UseAuth} from './auth'
import { Navigate ,useLocation} from "react-router-dom";
export const RequireAuth=({children})=>{
    const useremail=UseAuth()
const location=useLocation()
  console.log("location",location)
    if(!useremail.user){
        return <Navigate to="/Login" state={{path:location.pathname}}/>
    }
    return children
}