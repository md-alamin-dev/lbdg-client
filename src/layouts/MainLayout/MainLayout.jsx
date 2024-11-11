import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";

const MainLayout = () => {

    return (

        <div className="">

            {/* Header */}
            <header>
                <Navbar></Navbar>
            </header>

            <main className="min-h-[calc(100vh-284px)]">
                <Outlet></Outlet>
            </main>

            {/* Footer  */}
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;