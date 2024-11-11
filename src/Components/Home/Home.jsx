import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Blogs from "../Routes/Blogs/Blogs";
import BookMarks from "../Routes/BookMakrks/BookMarks";


const Home = () => {
    return (
        <div className="">
            <div className="h-[68px]">
                <NavBar></NavBar>
            </div>
            
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default Home;