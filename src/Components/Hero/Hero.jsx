import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero -mt-4">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Welcome to <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">ByteBlaze</span></h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex gap-2 justify-center items-center">
                <Link to={'/Blogs'} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-xl shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-xl opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">Read Blogs</span>
                </Link>
                <Link to={'/BookMarks'} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-xl shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-xl opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">Bookmarks</span>
                </Link>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
