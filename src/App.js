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
import Messages from "./Components/Messages";
import UserDashboard from "./Pages/UserDashboard";
import MainDashboardUser from "./Components/UserDashboardComponents/MainDashboardUser";
import UserLogin from "./Pages/UserLogin";
import Contacts from "./Components/UserDashboardComponents/Contacts";
import QueryHistory from "./Components/UserDashboardComponents/QueryHistory";
import ViewProfileUser from "./Components/UserDashboardComponents/ViewProfileUser";
import EditProfileUser from "./Components/UserDashboardComponents/EditProfileUser";
import ViewProfileAdmin from "./Components/ViewProfileAdmin";
import EditProfileAdmin from "./Components/EditProfileAdmin";

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
            <Route path="messages" element={<Messages />} />
            <Route path="view-profile-admin" element={<ViewProfileAdmin />} />
            <Route path="edit-profile-admin" element={<EditProfileAdmin />} />
          </Route>

          <Route path="user-dashboard" element={<UserDashboard />}>
            <Route path="main-dashboard-user" element={<MainDashboardUser />} />
            <Route path="query-history" element={<QueryHistory />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="view-profile-user" element={<ViewProfileUser />} />
            <Route path="edit-profile-user" element={<EditProfileUser />} />
          </Route>

          <Route path="/admin-login" element={<Login />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
