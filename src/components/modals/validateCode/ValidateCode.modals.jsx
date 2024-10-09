import { useSelector } from "react-redux"
import './validateCode.modals.css'
import ButtonCircle from "../../buttons/buttonCircle/ButtonCircle"
import { validateCode } from "../../../utils/validate"
import LoadIcon from "../../icons/loader/loadIcon"
import { useFormik } from "formik"
import { useState } from "react"

const ValidateCode = ()=>{
    const email = useSelector(state => state.user.email)
    const [loader, setloader] = useState(false)

    const formik = useFormik({
        initialValues:{
            code:''
        },
        validationSchema:validateCode,
        onSubmit: async (values)=>{
            
        }
    })

    return(
        <>
            <div className="code_container"/ >
            <div className="code_box" >
                <h1>valida tu código</h1>
                <p>te lo enviamos a 📮 {email}, revisa tu casilla de spam 😎</p>
                <form action="">
                    <div className="code_box_input" >
                        <input
                            type="text"
                            id="code"
                            name="code"
                            value={formik.values.code}
                            placeholder="nombre"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="code_box_load" >
                            {loader && <LoadIcon size={35} />}
                        </div>
                    </div>
                    <ButtonCircle color={'natural'} />
                </form>
                <div className="code_error" >
                    {formik.touched.code && formik.errors.code && <p>{formik.errors.code}</p>}
                </div>
            </div>
        </>
    )
}

export default ValidateCode