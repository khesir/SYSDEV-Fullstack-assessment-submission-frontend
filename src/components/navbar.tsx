import { NavLink } from "./nav-link";
import { useLocation } from "react-router-dom";

export function Navbar () {
    const {pathname} = useLocation()
    
    return(
        <div className="w-[600px] flex items-center mt-5 justify-between bg-slate-100 p-4 rounded-md">
            <div className="flex gap-x-2 font-medium text-sm items-center">
                <NavLink 
                    href="/external"
                    name={"External API"}
                    status = {pathname === "/external" ? true : false}
                />
                <NavLink 
                    href="/constant"
                    name={"Constant Data"}
                    status = {pathname === "/constant" ? true : false}
                />
                <NavLink 
                    href="/backend"
                    name={"Backend API"}
                    status = {pathname === "/backend" ? true : false}
                />
            </div>
            <p className="font-semibold text-sm">
            Fullstack Assesment
            </p>
        </div>
    )
} 