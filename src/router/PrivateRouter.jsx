import React, { useContext } from 'react'
import {Outlet,Navigate} from "react-router-dom"
import { LoginContext, useLoginContext } from '../context/LoginContext'

const PrivateRouter = () => {
  const {values:{user}} = useLoginContext()
  
  return (
    <div>
    { user?.name && user?.password ? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRouter;
