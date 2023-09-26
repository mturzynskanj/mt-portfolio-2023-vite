import React from 'react'
import {useState, useEffect} from 'react'
import {getAuth} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function ProjectEntry() {
    const [user, setUser] = useState(null)
    const auth = getAuth()
    const navigate = useNavigate()


    useEffect(() => {
        setUser(auth.currentUser)
    },[])

    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }

    return(
        <section className="page">
           {user ? <h1>{user.displayName}</h1> : 'Not Logged IN'}
           <button type='button' onClick={onLogout}>Log Out</button>
        </section>
    )
}


export default ProjectEntry