import { useFormik } from "formik"

const CreateUser = ()=>{
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
                placeholder="nombre"
            />
        </form>
    )
}

export default CreateUser