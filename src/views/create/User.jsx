import './user.css'
import { useState } from "react"
import LoadIcon from "../../components/icons/loader/loadIcon"
import CreateUser from "../../components/forms/create/CreateUser.form"

const User = ()=>{
    const [loader, setloader] = useState(false)

    return(
        <section className="section_create" >
            <div className="user_box_loader" >
                {loader && <LoadIcon size={'55'} />}
            </div>
            <h1>registrarse</h1>
            <h2>ingresa los datos para crear tu cuenta</h2>
            <CreateUser/>
        </section>
    )
}

export default User