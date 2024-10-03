import { useFormik } from "formik"
import { useSelector } from "react-redux"
import './userCreate.css';

const UserCreate = ()=>{
    const email = useSelector(state => state.user.email)

    const formik = useFormik({
        initialValues:{
            name:'',
            lastname:'',
            email:email,
            password:'',
            address:'',
            number:'',
            location:'',
            state:'',
            country:''
        },
        onSubmit:()=>{

        }
    })

    return(
        <form
            onSubmit={formik.handleSubmit}
            id="user_form"
        >
            <div
                id="box_create_form"
            >
                <p>datos personales</p>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder="nombre"
                />
                <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    placeholder="apellido"
                />
                <input
                    id="password"
                    type="text"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="constraseña"
                />
            </div>
            <div
                id="box_create_form"
            >
                <p>direccion</p>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    placeholder="dirección"
                />
                <input
                    id="number"
                    type="number"
                    name="number"
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    placeholder="altura"
                />
                <input
                    id="location"
                    type="text"
                    name="location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    placeholder="localidad"
                />
                <input
                    id="state"
                    type="text"
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    placeholder="provincia"
                />
                <input
                    id="country"
                    type="text"
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    placeholder="país"
                />
            </div>
        </form>
    )
}

export default UserCreate