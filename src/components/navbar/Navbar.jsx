import ShoppingCar from "../icons/ShoppingCar"
import './navbar.css'

const Navbar = ()=>{
    return(
        <section className="navbar_section" >
            <a className="nav_profile" href="/"/>
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