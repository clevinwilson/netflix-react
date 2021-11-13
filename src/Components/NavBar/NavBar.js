import React, { useContext } from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../store/Context'
import {FirebaseContext} from '../../store/Context'
function NavBar() {
    const {firebase} =useContext(FirebaseContext)
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    return (
        <div className='navbar'>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" onClick={() => {
                navigate('/')
            }} />
            <div className="user">
                <p className="user-name" >{user && user.displayName}</p>
            </div>
            <div className='dropdown'>

                <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
                <div class="dropdown-content">
                    {user ?
                        <p onClick={()=>{
                            firebase.auth().signOut();
                            navigate('/')
                          }}>Sign out</p>
                        :
                        <p onClick={() => {
                            navigate('/login')
                        }}>Sign in</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar
