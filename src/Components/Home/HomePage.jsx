import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


const HomePage = () => {
    return (
        <div>
            <div className="h-[68px]">
                <NavBar></NavBar>
            </div>
            <div className="min-h-[calc(100vh-136px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;