import { usePage } from "@inertiajs/react";
import Header from "../Pages/Header"

const Layout = ({children})=>{
    const { url } = usePage(); // Get the current URL path

    // Check if the current page is the login page
    const isLoginPage = url === "/login";

    return (
        <>
            {!isLoginPage && <Header />} {/* Only show header if not on login page */}
            <main>{children}</main>
        </>
    );
}

export default Layout;