import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { MovieContextProvider } from "./store/movie-store.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <MovieContextProvider>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        </Routes>
      </MovieContextProvider>
    </>
  );
}

export default App;
