import React from "react";
import SideBar from "../Pages/SideBar";

const HomeLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* You can add any special header or footer here for homepage */}
            <div className="flex min-h-screen bg-amber-50">
                <header className="bg-gray-500 text-white p-4 text-center">
                    <SideBar/>
                </header>
                <main className="flex-grow">{children}</main>
            </div>
            <footer className="bg-gray-500 text-white p-4 text-center">
                Home Page Footer
            </footer>
        </div>
    );
};

export default HomeLayout;