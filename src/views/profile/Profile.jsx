import { useSelector } from 'react-redux'
import './profile.css'

const Profile = ()=>{
    const user = useSelector(state => state.user)
    return(
        <section className='profile_container' >
            <h1>{user.name}</h1>
        </section>
    )
}

export default Profile