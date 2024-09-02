import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Cancellations from "./pages/Cancellations";
import Profile from "./pages/Profile";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/cancellations" element={<Cancellations/>}/>
      <Route path="/log-in" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  </BrowserRouter>
}
