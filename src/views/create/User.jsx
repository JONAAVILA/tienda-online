import { useFormik } from "formik"
import Button from "../../components/buttons/customButton/Button"
import './user.css'
import postUser from "../../adapters/postUser"
import { useSelector } from "react-redux"

const User = ()=>{
    const email = useSelector(state => state.user.email)

    const formik = useFormik({
        initialValues:{
            name:'',
            surname:'',
            email:email,
            password:'',
            phone:'',
            address:'',
            number:'',
            location:'',
            state:'',
            country:''
        },
        validate:'',
        onSubmit: async (values)=>{
            await postUser(values)
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
                <div className="create_box_form" >
                    <p>
                        datos personales
                    </p>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        placeholder="nombre"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={formik.values.surname}
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
                </div>
                <div className="create_box_form" >
                    <p>
                        datos de contacto
                    </p>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        placeholder="telefono"
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
                </div>
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