import { useSelector } from "react-redux"
import './validateCode.modals.css'
import ButtonCircle from "../../buttons/buttonCircle/ButtonCircle"

const ValidateCode = ()=>{
    const email = useSelector(state => state.user.email)

    return(
        <>
            <div className="code_container"/ >
            <div className="code_box" >
                <h1>valida tu código</h1>
                <p>te lo enviamos a 📮 {email}, revisa tu casilla de spam 😎</p>
                <form action="">
                    <input
                        type="text"
                        placeholder="code"
                    />
                    <ButtonCircle color={'natural'} />
                </form>
            </div>
        </>
    )
}

export default ValidateCode