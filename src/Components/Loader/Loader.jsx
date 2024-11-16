import { HashLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-136px)]">
            <HashLoader  color='#d1a5b0'></HashLoader>
        </div>
    );
};

export default Loader;