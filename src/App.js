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
import Test from "./Components/Test";
import Login from "./Pages/Login";

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
            <Route path="test" element={<Test />} />
          </Route>

          <Route path="/admin-login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
