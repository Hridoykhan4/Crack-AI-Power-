import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
const root = document.getElementById("root");
import './index.css'
import Home from "./pages/Home";
import { StrictMode } from "react";
import AuthProvider from "./provider/AuthProvider";
import Create from "./pages/Create";
import App from './App'
import Creations from "./pages/Creations";
import SingleImage from "./pages/SingleImage";
// import Create from "./pages/Create";
ReactDOM.createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route index element={<Home></Home>} />
            <Route path="create" element={<Create></Create>} />
            <Route path="/creations" element={<Creations></Creations>}></Route>
            <Route
              path="/creations/:id"
              element={<SingleImage></SingleImage>}
            ></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
