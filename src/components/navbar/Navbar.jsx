import ShoppingCar from "../icons/shoppingCar"
import './navbar.css'

const Navbar = ()=>{
    return(
        <section className="navbar_section" >
            <div className="nav_profile" >
                <a href=""/>
            </div>
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