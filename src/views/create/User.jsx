import './user.css'
import CreateUser from "../../components/forms/create/CreateUser.form"

const User = ()=>{
    return(
        <section className="section_create" >
            <h1>registrarse</h1>
            <h2>ingresa los datos para crear tu cuenta</h2>
            <CreateUser/>
        </section>
    )
}

export default User