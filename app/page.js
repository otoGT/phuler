import Smimgz from "@/components/Smimgz";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <main> 
      <div>
        <Navbar />
      </div>
      <div className="bg-center bg-cover h-screen w-screen" style={{
      backgroundImage: `url('/background.png')`,
      
      }}>
        <h1 className="absolute text-4xl font-semibold font-serif mt-60 ml-56 text-red-600">New Arrivals</h1>
        <h2 className="absolute text-6xl font-semibold font-serif mt-[300px] ml-56 text-black">For Mother's Day!</h2>
        <h2 className="absolute text-2xl font-semibold font-serif mt-[390px] ml-56 text-black">Exclusive Offer -10% This Week</h2>
        <button className="w-36 h-[52px] bg-red-700 mt-[470px] ml-56 rounded">SHOP NOW</button>
      </div>
      
    </main>
  );
}
