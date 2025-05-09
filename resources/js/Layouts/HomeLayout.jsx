import React from "react";

const HomeLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* You can add any special header or footer here for homepage */}
            <header className="bg-blue-500 text-white p-4 text-center">
                Home Page Header
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="bg-blue-500 text-white p-4 text-center">
                Home Page Footer
            </footer>
        </div>
    );
};

export default HomeLayout;