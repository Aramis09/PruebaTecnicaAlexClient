import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/signUp/signUp";
import Login from "./pages/login/login";
import CreateOperation from "./pages/createOperation/createOperation";
import Home from "./pages/home/home";
import Navbar from "./components/navbar/navbar";
import EditOperation from "./pages/editOperation/editOperation";
//!El navbar deberia ir como layout 3:04 am
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-operation" element={<CreateOperation />} />
        <Route path="/edit/:idOperation" element={<EditOperation />} />
      </Routes>
    </>
  );
}

export default App;
