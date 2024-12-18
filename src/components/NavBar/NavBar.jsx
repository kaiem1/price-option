import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";



const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" },
      ];

    return (
        <nav className="bg-yellow-200 p-5">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <RxCross1></RxCross1> : <FiMenu></FiMenu>
                }
            
            </div>

            <ul className={`md:flex duration-1000 absolute md:static bg-yellow-200 pl-6 pb-2 pt-1 ${open ? 'top-16' : '-top-32'}`}>
                {
                    routes.map(route => <Link  key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;