import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App'
const root = document.getElementById("root");
import './index.css'
import Home from "./pages/Home";
import GenerateImage from "./pages/GenerateImage";
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>} >
        <Route index element={<Home></Home>}></Route>
        <Route path="generate" element={<GenerateImage></GenerateImage>} >
        </Route>
      </Route>
    </Routes>

  </BrowserRouter>,
);
