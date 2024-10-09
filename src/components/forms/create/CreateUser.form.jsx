import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import './createUser.form.css'
import { validateUser } from '../../../utils/validate'
import ButtonCircle from '../../buttons/buttonCircle/ButtonCircle'
import { saveUser } from '../../../redux/actions/actions'
import { useNavigate } from 'react-router-dom'
import ValidateCode from '../../modals/validateCode/ValidateCode.modals'
import { useState } from 'react'

const CreateUser = ()=>{
    const [modal, setmodal] = useState(true)
    const email = useSelector(state => state.user.email)
    const dispath = useDispatch()
    const navigate = useNavigate()

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
        validationSchema:validateUser,
        onSubmit: async (values)=>{
            dispath(saveUser(values))
            setmodal(!modal)
        }
    })

    return(
        <>
            {modal && <ValidateCode/>}
            <form
            onSubmit={formik.handleSubmit}
            className="create_form"
            >
                <div className="create_box_form" >
                    <h4>
                        DATOS PERSONALES
                    </h4>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        placeholder="nombre"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div className="form_user_error" >
                    {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
                    </div>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={formik.values.surname}
                        placeholder="apellido"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div className="form_user_error" >
                        {formik.touched.surname && formik.errors.surname && <p>{formik.errors.surname}</p>}
                    </div>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        placeholder="contraseña"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div className="form_user_error" >
                        {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
                    </div>
                </div>
                <div className="create_box_form" >
                    <h4>
                        DATOS DE CONTACTO
                    </h4>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        placeholder="telefono"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div className="form_user_error" >
                        {formik.touched.phone && formik.errors.phone && <p>{formik.errors.phone}</p>}
                    </div>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formik.values.address}
                        placeholder="calle"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div className="form_user_error" >
                        {formik.touched.address && formik.errors.address && <p>{formik.errors.address}</p>}
                    </div>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={formik.values.number}
                        placeholder="numero"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div className="form_user_error" >
                        {formik.touched.number && formik.errors.number && <p>{formik.errors.number}</p>}
                    </div>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formik.values.location}
                        placeholder="localidad"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div className="form_user_error" >
                        {formik.touched.location && formik.errors.location && <p>{formik.errors.location}</p>}
                    </div>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formik.values.state}
                        placeholder="provincia"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div className="form_user_error" >
                        {formik.touched.state && formik.errors.state && <p>{formik.errors.state}</p>}
                    </div>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formik.values.country}
                        placeholder="país"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div className="form_user_error" >
                        {formik.touched.country && formik.errors.country && <p>{formik.errors.country}</p>}
                    </div>
                </div>
                <ButtonCircle type='submit' />
            </form>
        </>
    )
}

export default CreateUser