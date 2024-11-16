import { Link } from "react-router-dom";


const EmptyState = ({message}) => {
    return (
        <div className="flex flex-col justify-center gap-3 items-center min-h-[calc(100vh-136px)]">
            <p className="text-xl font-bold">{message}!</p>
            <div className="flex gap-1">
                <Link to={'/'} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-xl shadow-xl group hover:ring-1 hover:ring-purple-500">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-xl opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white">Home</span>
                </Link>
                <Link to={'/Blogs'} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-xl shadow-xl group hover:ring-1 hover:ring-purple-500">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-xl opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white">Explore Blogs</span>
                </Link>
            </div>
        </div>
    );
};

export default EmptyState;