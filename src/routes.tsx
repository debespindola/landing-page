
import {
  Routes, 
  Route,
  BrowserRouter
} from "react-router-dom";
import App from "./App";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:lang" element={<App />} />
    </Routes>
  </BrowserRouter>
)

export default Router;
