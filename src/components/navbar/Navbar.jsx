import { Link } from "react-router-dom"
import ShoppingCar from "../icons/ShoppingCar"
import './navbar.css'

const Navbar = ()=>{
    return(
        <section className="navbar_section" >
            <Link to={'/profile'} >
                <div className="nav_profile" />
            </Link>
            <div className="nav_box_pages" >
                <a href="">nosotros</a>
                <a href="">contacto</a>
                <a href="">productos</a>
            </div>
            <div>
                <ShoppingCar/>
            </div>
        </section>
    )
}

export default Navbar