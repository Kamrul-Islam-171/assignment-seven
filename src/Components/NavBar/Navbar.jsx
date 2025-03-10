
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        // <div className="container mx-auto mt-10">
        //     <div className="navbar bg-base-100 ">
        //         <div className="navbar-start">
        //             <div className="dropdown">
        //                 <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                 </div>
        //                 <ul tabIndex={0} className="menu menu-sm text-[#150B2BB3] dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                     <li><a>Home</a></li>
        //                     <li><a>Recipes</a></li>
        //                     <li><a>About</a></li>
        //                     <li><a>Search</a></li>

        //                 </ul>
        //             </div>
        //             <a className="btn btn-ghost text-xl lg:text-3xl font-bold">Recipe Calories</a>
        //         </div>
        //         <div className="navbar-center hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1 text-[#150B2BB3]">
        //                 <li><a>Home</a></li>
        //                 <li><a>Recipes</a></li>
        //                 <li><a>About</a></li>
        //                 <li><a>Search</a></li>
        //             </ul>
        //         </div>
        //         <div className="navbar-end space-x-5">
        //             <label className="input input-bordered flex items-center gap-2 rounded-full border-none outline-none bg-[#150B2B0D]">
        //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        //                 <input type="text" className="grow" placeholder="Search" />
        //             </label>
        //             <button className="rounded-full w-[50px] h-[50px] text-3xl bg-[#0BE58A] flex justify-center items-center text-gray-900"><FaRegUserCircle /></button>
        //         </div>
        //     </div>
        // </div>
        <div className="container mx-auto mt-10">
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm text-[#150B2BB3] dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl lg:text-3xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#150B2BB3]">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-5">
                    <label className="input input-bordered flex items-center w-[150px] lg:w-[300px] gap-2 rounded-full border-none outline-none bg-[#150B2B0D]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="" placeholder="Search" />
                    </label>
                    <button className="rounded-full w-[50px] h-[50px] text-2xl lg:text-3xl bg-[#0BE58A] flex justify-center items-center text-gray-900"><FaRegUserCircle /></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;