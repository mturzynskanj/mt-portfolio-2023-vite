import {Navigate, Outlet} from 'react-router-dom'
import { useAuthStatus } from '../customHooks/useAuthStatus'
import CircularProgress from '@mui/material/CircularProgress'


const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = useAuthStatus()

    if(checkingStatus) {
        return   <CircularProgress color="success" />
    }

    return  loggedIn ? <Outlet /> :  <Navigate to='/signIn' />
}

export default PrivateRoute