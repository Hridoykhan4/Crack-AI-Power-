import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                      
                        <li>
                            <NavLink to="/generate">Generate Images</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;