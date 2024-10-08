import { useFormik } from "formik"
import './validateEmail.css'
import ButtonCircle from  '../../components/buttons/ButtonCircle'
import checkEmail from "../../adapters/checkEmail"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import saveEmail from '../../redux/actions/actions'
import { validateEmail } from "../../utils/validate"
import LoadIcon from "../../components/icons/loader/loadIcon"
import { useState } from "react"

const ValidateEmail = ()=>{
    const [loader, setloader] = useState(false)
    const navigate = useNavigate()
    const dispath = useDispatch()

    const formik = useFormik({
        initialValues:{
            email:''
        },
        validationSchema:validateEmail,
        onSubmit: async (values)=>{
            setloader(!loader)
            const check = await checkEmail(values)
            console.log(check)
            dispath(saveEmail(values.email))
            if(check){
                setloader(!loader)
                navigate('/create')
            }
        }
    })

    return(
        <section className="validate_section" >
            <div className="validate_tittle" >
                <h1>valida tu email</h1>
                <h2>vamos a verificar tu email para que puedas crear tu usuario o recupar tu constraseña</h2>
            </div>
            <div>
                <form className="email_form" onSubmit={formik.handleSubmit}>
                    <div className="email_box_input" >
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="email_box_loader" >
                            {loader && <LoadIcon size={'35'} />}
                        </div>
                        {
                            formik.touched.email && 
                            formik.errors.email && 
                            <p>
                                {formik.errors.email}
                            </p>
                        }
                    </div>
                    <ButtonCircle type='submit' />
                </form>
            </div>
        </section>
    )
}

export default ValidateEmail