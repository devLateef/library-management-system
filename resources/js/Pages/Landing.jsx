import { Link } from "@inertiajs/react";
import Login from "./Login";

const Landing = () => {
    return(
        <>
            <div
            className="hero min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/library-background.jpg')" }}
            >
            <div className="flex flex-col md:flex-row w-full bg-black/40 min-h-screen">
                {/* Left side (Welcome message) */}
                <div className="flex items-center justify-center w-full md:w-1/2 p-10">
                <div className="hero-content text-left bg-white/30 backdrop-blur-md rounded-lg p-8 shadow-lg max-w-lg w-full">
                    <div>
                    <h1 className="text-5xl font-bold text-white">Swipe less, read more.!</h1>
                    <p className="py-6 text-white">
                    CUAB e-Library: Your next adventure begins in our digital library.
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                        <Link href="/register">
                        <button className="btn btn-primary">Get Started</button>
                        </Link>
                        {/* <Link href="/login">
                        <button className="btn btn-neutral">Log in</button>
                        </Link> */}
                    </div>
                    </div>
                </div>
                </div>

                {/* Right side (Login Component) */}
                <div className="flex items-center justify-center w-full md:w-1/2 p-10">
                <div className="bg-white/30 rounded-lg p-8 shadow-lg w-full max-w-md">
                    <Login />
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Landing;