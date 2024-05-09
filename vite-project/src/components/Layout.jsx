import { NavLink, Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <div className="  bg-pink-800">
                <div className="max-w-screen-lg flex justify-between mx-auto py-6 text-white font-bold ">
                    <div>
                        <NavLink activeClassName="active" className="py-3 px-5 hover:scale-110" to="/">OptiDiet</NavLink>

                    </div>
                    <div>
                        <NavLink activeClassName="active" className="py-3 px-5 hover:scale-110" to="/">Home</NavLink>
                        <NavLink activeClassName="active" className="py-3 px-5 hover:scale-110" to="/input">Get Your Optimal Diet</NavLink>

                    </div>
                    <div>
                        <NavLink activeClassName="active" className="py-3 px-5 hover:scale-110" to="/about">About Us</NavLink>

                    </div>
                </div>


            </div>
            <div className="min-h-screen max-w-screen-lg mx-auto px-2 py-3">

                <Outlet />


            </div>
            <div className="bg-gray-900 text-white py-20 justify-center flex items-center">
                <h1>Developed by @Abdul and Rishabh dewangan</h1>
            </div>
        </>
    )
}

export default Layout