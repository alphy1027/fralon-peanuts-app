import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div>
            <h1 className="">MainLayout</h1>
            <header className="text-red-600 font-semibold">Header</header>
            <main className="">
                <Outlet />
            </main>
            <footer className="text-red-600 font-semibold">Footer</footer>
        </div>
    )
}

export default MainLayout