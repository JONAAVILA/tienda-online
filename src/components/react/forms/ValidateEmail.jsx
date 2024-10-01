import { useFormik } from "formik"
import ButtonCircle from "../buttons/ButtonCircle"
import checkEmail from "../../../adapters/checkEmail"

const ValidateEmail = ()=>{
    const formik = useFormik({
        initialValues:{
            email:''
        },
        onSubmit:async (values)=>{
            console.log(values.email)
            const email = values.email
            const res = await checkEmail(email)
            console.log(res)
        }
    })  

    console.log('formik', formik.values)

    return(
        <div>
            <form 
                onSubmit={formik.handleSubmit} 
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                }}
            >
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            <ButtonCircle type="submit" />
            </form>
        </div>
    )
}

export default ValidateEmail