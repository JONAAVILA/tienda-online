import { useFormik } from 'formik';
import './login.form.css';
import Button from '../../buttons/customButton/Button';
import { validateLogin } from '../../../utils/validate';
import postLogin from '../../../adapters/postLogin.js';
import LoadIcon from '../../icons/loader/LoadIcon.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../../modals/alerts/Alert.modal.jsx'
import ValidateCode from '../../modals/validateCode/ValidateCode.modals.jsx';
import sendCode from '../../../adapters/sendCode.js';

const LoginForm = ()=>{
    const navigate = useNavigate()
    const [loader, setloader] = useState(false)
    const [alert, setalert] = useState('')
    const [modal, setmodal] = useState(false)

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:validateLogin,
        onSubmit: async (values)=>{
            setloader(!loader)
            const res = await postLogin(values)
            if(res === true){
                setloader(!loader)
                navigate('/home')
                return
            }
            if(res === 'validate user'){
                await sendCode()
                setmodal(!modal)
            }
            setloader(false)
            setalert('Clave o correo incorrecto')
        }
    })
    return(
        <div>
            <div className='login_loader' >
                {loader && <LoadIcon/>}
                {alert && <Alert children={alert} />}
                {modal && <ValidateCode validate={true} email={formik.values.email} password={formik.values.password} />}
            </div>
            <form
                onSubmit={formik.handleSubmit}
                className='login_form'
            >
                <div>
                    <input
                        type="text"
                        id='email'
                        name='email'
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="email"
                    />
                    <div className='box_login_errors' >
                        {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                    </div>
                    <input
                        type="text"
                        id='password'
                        name='password'
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="password"
                    />
                    <div className='box_login_errors' >
                        {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
                    </div>
                </div>
                <Button color={'gradient'} children={'ingresar'} />
            </form>
        </div>
    )
}

export default LoginForm