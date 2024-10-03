import { useFormik } from "formik"
import { useSelector } from "react-redux"

const CreateUser = ()=>{
    const email = useSelector(state => state.user)

    const formik = useFormik({
        initialValues:{
            email:'',
        },
        onSubmit:()=>{

        }
    })

    return(
        <form>
            <input
                type="text"
                value={formik.value.email}
                placeholder="nombre"
            />
        </form>
    )
}

export default CreateUser