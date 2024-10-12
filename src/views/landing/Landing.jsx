import { Link } from 'react-router-dom';
import Button from '../../components/buttons/customButton/Button';
import './landing.css';

const Landing = ()=>{
    return(
        <section className='landing_section' >
            <h1>todo para tu bebe</h1>
            <h2>Hacemos envios a dominicilio atravez de mercado pago</h2>
            <div className='landing_buttons' >
                <Link to={'/login'} >
                    <Button color={'default'} children={'ingresar'} />
                </Link>
                <p>or</p>
                <Link to={'/validate'} >
                    <Button color={'gradient'} children={'registrarse'} />
                </Link>
            </div>
        </section>
    )
}

export default Landing