import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PricingPage from "./Pages/PricingPage";
import Contact from "./Pages/ContactUs";
import AdminDashboard from "./Pages/AdminDashboard";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import MainDashboard from "./Components/MainDashboard";
import ManagePlans from "./Components/ManagePlans";
import ManageUsers from "./Components/ManageUsers";
import ManageReviews from "./Components/ManageReviews";

function App() {
  const location = useLocation;

  return (
    <div className="App">
      <Router>
        <Routes key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          <Route path="admin-dashboard" element={<AdminDashboard />}>
            <Route path="main-dashboard" element={<MainDashboard />} />
            <Route path="manage-plans" element={<ManagePlans />} />
            <Route path="manage-users" element={<ManageUsers />} />
            <Route path="manage-reviews" element={<ManageReviews />} />
          </Route>

          <Route path="/admin-login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
