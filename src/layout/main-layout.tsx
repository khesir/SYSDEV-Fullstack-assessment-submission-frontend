import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

const MainLayout =() =>{

    return(
        <div className="h-screen w-full flex flex-col gap-y-10 items-center justify-center bg-slate-800">
            {/* Nav bar */}
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default MainLayout;