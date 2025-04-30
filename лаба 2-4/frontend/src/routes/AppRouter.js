import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import Contacts from "../pages/Contacts";
import Profile from "../pages/Profile";
import Register from "../pages/Register";


const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Navbar />
            <br />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/product" element={<Product />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;