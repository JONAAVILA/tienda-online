import { useFormik } from "formik"
import ButtonCircle from "./ButtonCircle"

const ValidateEmail = ()=>{
    const formik = useFormik({
        initialValues:{
            email:''
        },
        onSubmit:()=>{

        }
    })

    return(
        <div
            style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                marginTop:'15px'
            }}
        >
            <form onSubmit={formik.handleSubmit} >
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </form>
            <ButtonCircle/>
        </div>
    )
}

export default ValidateEmail