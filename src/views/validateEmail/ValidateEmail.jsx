import { useFormik } from "formik"
import './validateEmail.css'
import ButtonCircle from  '../../components/buttons/ButtonCircle'

const ValidateEmail = ()=>{
    const formik = useFormik({
        initialValues:{
            email:''
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
                    <ButtonCircle/>
                </form>
            </div>
        </section>
    )
}

export default ValidateEmail