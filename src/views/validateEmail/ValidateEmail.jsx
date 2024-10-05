import { useFormik } from "formik"
import Button from '../../components/buttons/customButton/Button'
import './validateEmail.css'

const ValidateEmail = ()=>{
    const formik = useFormik({
        initialValues:{
            email:''
        }
    })

    return(
        <section className="validate_section" >
            <div>
                <h2>valida tu email</h2>
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
                    <Button color={'gradient'} children={'validar'} />
                </form>
            </div>
        </section>
    )
}

export default ValidateEmail