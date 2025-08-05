import { Link, router } from "@inertiajs/react";

const Navbar = () =>{
    const handleLogOut = ()=>{
        router.post('/logout');
    }
    return(
        <div className="navbar bg-base-200 shadow-sm">
            <div className="dropdown lg:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><Link>Users</Link></li>
                    <li>
                    <Link>Transactions</Link>
                    <ul className="p-2">
                        <li><Link>Borrowed Books</Link></li>
                        <li><Link>Download Report</Link></li>
                    </ul>
                    </li>
                    <li><Link>Books</Link></li>
                </ul>
            </div>
        <div className="flex-1">
            <Link className="btn btn-ghost text-xl">CUAB e-Library</Link>
        </div>
        <div className="flex gap-2">
            <div className="navbar-start">
                <div className="dropdown">   
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link>Users</Link></li>
                        <li>
                        <Link>Transactions</Link>
                        <ul className="p-2">
                            <li><Link>Borrowed Books</Link></li>
                            <li><Link>Download Report</Link></li>
                        </ul>
                        </li>
                        <li><Link>Books</Link></li>
                    </ul>
                </div>
            </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><Link>Users</Link></li>
            <li>
                <details>
                <summary>Transactions</summary>
                <ul className="p-2">
                    <li><Link>Borrowed Books</Link></li>
                    <li><Link>Download Report</Link></li>
                </ul>
                </details>
            </li>
            <li><Link>Books</Link></li>
            </ul>
        </div>
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                <Link className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </Link>
                </li>
                <li><Link>Settings</Link></li>
                <li><Link as="button" onClick={handleLogOut}>Logout</Link></li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar;