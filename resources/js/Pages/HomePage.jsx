import HomeLayout from "../Layouts/HomeLayout"

const HomePage = () => {
    return(
        <HomeLayout>
            <div className="p-6 text-center">
                <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
                <p>This page has a special layout.</p>
            </div>
        </HomeLayout>
    )
}

export default HomePage;