import { useFormik } from "formik"
import Button from "../../components/buttons/customButton/Button"
import './user.css'

const User = ()=>{
    const formik = useFormik({
        initialValues:{
            name:'',
            lastname:'',
            password:'',
            address:'',
            number:'',
            location:'',
            state:'',
            country:''
        },
        onSubmit: async (values)=>{
            
        }
    })

    return(
        <section className="section_create" >
            <h1>registrarse</h1>
            <h2>ingresa los datos para crear tu cuenta</h2>
            <form
                onSubmit={formik.handleSubmit}
                className="create_form"
            >
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    placeholder="nombre"
                    onChange={formik.handleChange}
                />
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formik.values.lastname}
                    placeholder="apellido"
                    onChange={formik.handleChange}
                />
                <input
                    type="text"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    placeholder="contraseña"
                    onChange={formik.handleChange}
                />
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formik.values.address}
                    placeholder="calle"
                    onChange={formik.handleChange}
                />
                <input
                    type="text"
                    id="number"
                    name="number"
                    value={formik.values.number}
                    placeholder="numero"
                    onChange={formik.handleChange}
                />
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={formik.values.location}
                    placeholder="localidad"
                    onChange={formik.handleChange}
                />
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={formik.values.state}
                    placeholder="provincia"
                    onChange={formik.handleChange}
                />
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formik.values.country}
                    placeholder="país"
                    onChange={formik.handleChange}
                />
                <Button
                    type='submit'
                    color={'gradient'}
                    children={'crear'}
                />
            </form>
        </section>
    )
}

export default User