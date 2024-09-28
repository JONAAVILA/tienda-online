import { useFormik } from "formik"
import ButtonCircle from "../buttons/reactButtons/ButtonCircle"

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
            <ButtonCircle path={'/createUser'} />
        </div>
    )
}

export default ValidateEmail