import { Outlet } from "react-router";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import { AuthContext } from "./provider/AuthProvider";
import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default;

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user?.email && (
        <div className="bg-primary text-base-100 py-2">
          <Marquee pauseOnHover gradient={false} speed={40}>
            <span className="mx-4">
              Welcome Mr. {user?.displayName || "User"} 🐦‍🔥 Let's unleash the
              power of PicSeek-AI
            </span>
          </Marquee>
        </div>
      )}

      <header className="bg-linear-to-t lg:bg-linear-to-l from-cyan-100">
        <nav className="md:w-11/12 mx-auto">
          <Navbar />
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default App;