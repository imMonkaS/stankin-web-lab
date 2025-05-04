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
import Review from "../pages/Review";
import Reviews from "../pages/Reviews";
import NotFound from "../pages/NotFound";
import Search from "../pages/Search";
import Cart from "../pages/Cart";


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
                <Route path="/reviews/post" element={<Review />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/search" element={<Search />} />
                <Route path="/cart" element={<Cart />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;