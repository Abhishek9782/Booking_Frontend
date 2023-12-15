import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./hotels/Hotels";
import List from "./List/List";
import Flights from "./pages/Flights/Flights";
import Carrental from "./pages/Carrental/Carrental";
import Attraction from "./pages/Attraction/Attraction";
import AirportTaxi from "./pages/AirportTaxis/AirportTaxi";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Mybooking from "./pages/MyBooking/Mybooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home home="active" />} />
        <Route path="/user-register" element={<Register />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotels />} />
        <Route path="/flights" element={<Flights flights="active" />} />
        <Route path="/car-rental" element={<Carrental Carrental="active" />} />
        <Route path="/attraction" element={<Attraction attraction="active" />} />
        <Route path="/airport-taxis" element={<AirportTaxi airportTaxi="active" />} />



        {/*  For All Search page which path is not exist  */}
        <Route path="*" element={<h1>Page Not Found </h1>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
