import { Link } from "@inertiajs/react";

const Landing = () => {
    return(
        <>
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">It's Good to See You Again</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <div className="flex items-center justify-center gap-4 py-4">
                    <Link href="/register">
                        <button className="btn btn-primary">Get Started</button>
                    </Link>
                    <Link href="/login">
                        <button className="btn btn-neutral">Log in</button>
                    </Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Landing;