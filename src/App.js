import { BrowserRouter ,Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home.js';
import Product from "./pages/Product/Product.js";
import Account from "./pages/account/Accont.js";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
