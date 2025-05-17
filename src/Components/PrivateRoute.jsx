import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

   if(user){
    return children
   }
   return <Navigate state={location.pathname}  to='/signIn'></Navigate>
};

export default PrivetRoute;