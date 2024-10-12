import './login.css'

const Login = ()=>{
    return(
        <div className='login_container' >
            <div>
                <h1>bienvenido</h1>
                <h2>es bueno verte por aqui otra vez</h2>
                <form action="">
                    <input
                        type="text"
                        placeholder="email"
                    />
                    <input
                        type="text"
                        placeholder="contraseña"
                    />
                </form>
            </div>
        </div>
    )
}

export default Login