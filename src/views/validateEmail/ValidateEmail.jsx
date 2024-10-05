import { useFormik } from "formik"
import './validateEmail.css'
import ButtonCircle from  '../../components/buttons/ButtonCircle'
import checkEmail from "../../adapters/checkEmail"
import { useNavigate } from "react-router-dom"

const ValidateEmail = ()=>{
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            email:''
        },
        onSubmit: async (values)=>{
            const check = await checkEmail(values)
            console.log(check)
            if(check === false) navigate('/')
        }
    })

    return(
        <section className="validate_section" >
            <div className="validate_tittle" >
                <h1>valida tu email</h1>
                <h2>vamos a verificar tu email para que puedas crear tu usuario o recupar tu constraseña</h2>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                    />
                    <ButtonCircle type='submit' />
                </form>
            </div>
        </section>
    )
}

export default ValidateEmail