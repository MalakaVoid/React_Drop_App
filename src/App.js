import { BrowserRouter ,Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home.js';
import Product from "./pages/Product/Product.js";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
