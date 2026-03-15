import { useState } from "react";
import Home from "./pages/Home";
import"./App.css";
import NavBar from "./components/NavBar";
import {ToastContainer} from "react-toastify"
import Pagination from "./components/Pagination"
import Testimonial from "./pages/Testimonial";
import ReservationForm from "./components/ReservationForm";
import Footer from "./components/Footer"
function App() {
  return (
      <div>
         <Home></Home>
         <ToastContainer></ToastContainer>
         <Pagination></Pagination>
         <Testimonial></Testimonial>
         <ReservationForm></ReservationForm>
         <Footer></Footer>
      </div>
  );
}

export default App;
