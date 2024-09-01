import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouters = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return (
          <div className='text-center'>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        );
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate> 
};

export default PrivateRouters;