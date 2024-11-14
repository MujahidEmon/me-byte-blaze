import wave from "../../assets/wave.svg"
import Hero from "../Hero/Hero";


const Home = () => {
    return (
        <div className="min-h-[calc(100vh-136px)] relative flex flex-col justify-center items-center">
            <Hero></Hero>
            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;