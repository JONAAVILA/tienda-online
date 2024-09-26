import { useFormik } from "formik"

const ValidateEmail = ()=>{
    const formik = useFormik({
        initialValues:{
            email:''
        },
        onSubmit:()=>{

        }
    })

    return(
        <form onSubmit={formik.handleSubmit} >
            <input
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
        </form>
    )
}

export default ValidateEmail