import Button from '../../components/buttons/customButton/Button';
import './landing.css';

const Landing = ()=>{
    return(
        <section className='landing_section' >
            <h1>todo para tu bebe</h1>
            <h2>Hacemos envios a dominicilio atravez de mercado pago</h2>
            <div className='landing_buttons' >
                <Button color={'gradient'} children={'registrarse'} />
                <p>or</p>
                <Button color={'default'} children={'ingresar'} />
            </div>
        </section>
    )
}

export default Landing