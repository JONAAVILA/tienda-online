import CheckEmail from '../../components/forms/validate/CheckEmail.form'
import './verifyEmail.css'

const VerifyEmail = ()=>{
    return(
        <section className="validate_section" >
            <div className="validate_tittle" >
                <h1>valida tu email</h1>
                <h2>vamos a verificar tu email para que puedas crear tu usuario o recupar tu constraseña</h2>
            </div>
            <div>
                <CheckEmail/>
            </div>
        </section>
    )
}

export default VerifyEmail