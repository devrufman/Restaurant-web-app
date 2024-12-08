
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import FoodDetail from "./pages/FoodDetail";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-red-200"></h1>
      <main className="min-h-screen bg-gradient-to-b from-yellow-300 via-green-400 to-pink-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<FoodDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;