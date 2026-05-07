import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import Marquee from "react-fast-marquee";
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && user?.email && (
        <Marquee


        
          pauseOnHover={true}
          gradient={true}
          className="bg-primary text-base-100"
        >
          Welcome Mr. {user?.displayName} 🐦‍🔥. Lets unleash the power of
          PicSeek-AI
        </Marquee>
      )}
      <header className="bg-linear-to-t lg:bg-linear-to-l from-cyan-100 ">
        <nav className="md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>
      <Outlet></Outlet>
   
    </>
  );
};

export default App;