import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App'
const root = document.getElementById("root");
import './index.css'
import Home from "./pages/Home";
import GenerateImage from "./pages/GenerateImage";
import { StrictMode } from "react";
import AuthProvider from "./provider/AuthProvider";
// import Create from "./pages/Create";
ReactDOM.createRoot(root).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>} >
          <Route index element={<Home></Home>} />
          {/* <Route path="create" element={<Create></Create>} /> */}
          <Route path="generate" element={<GenerateImage></GenerateImage>} />
        </Route>
      </Routes>

    </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
