import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

import Loading from './Loading';

const RequireAdmin = ({children}) => {
    const [user, userLoading, error] = useAuthState(auth);
    const [isAdmin, loading] = useAdmin(user);
    let location = useLocation();

    //loading use na korle abr login oagge e firiye dibe
    if (loading || userLoading) {
        return <Loading></Loading>
    }
    if (!isAdmin) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default RequireAdmin;