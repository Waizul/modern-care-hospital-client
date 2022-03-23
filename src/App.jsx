import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menubar from "./components/Menubar";
import { useState } from "react";
import Footer from "./components/Footer";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Login";
import ServicesList from "./pages/ServicesList";
import DoctorsList from "./pages/DoctorsList";
import Pathology from "./pages/Pathology";
import Register from "./pages/Register";
import UserRoute from "./pages/dashboard/user/UserRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import UserDashboard from "./pages/dashboard/user/UserDashboard";
import UserAppoitments from "./pages/dashboard/user/UserAppoitments";
import UserReview from "./pages/dashboard/user/UserReview";
import DashboardHome from "./pages/dashboard/DashboardHome";
import AdminRoute from "./pages/dashboard/admin/AdminRoute";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import AppointmentsList from "./pages/dashboard/admin/AppointmentsList";
import ReviewsList from "./pages/dashboard/admin/ReviewsList";
import MakeAdmin from "./pages/dashboard/admin/MakeAdmin";
import DiscountsList from "./pages/dashboard/admin/DiscountsList";
import Appointment from "./pages/Appointment";
import ScrollToTop from "./components/ScrollToTop";

const NavContainer = styled.div`
  position: relative;
`;

function App() {
  const [open, setOpen] = useState(false);

  return (
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop/>
        <NavContainer>
          <Navbar open={open} setOpen={setOpen} />
          <Menubar open={open} setOpen={setOpen} />
        </NavContainer>
        <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<UserRoute><Appointment/></UserRoute>} />
          <Route
            path="/services"
            element={
              <UserRoute>
                <ServicesList />
              </UserRoute>
            }
            />
          {/* <Route path="/services/:serviceId" element={<SingleService />} /> */}
          <Route path="/doctors" element={<DoctorsList />} />
          <Route path="/pathology" element={<Pathology />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         
          <Route
            path="/dashboard"
            element={
              <UserRoute>
                <Dashboard />
              </UserRoute>
            }>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/user" element={<UserDashboard />}>
              <Route
                path="/dashboard/user/appointments"
                element={<UserAppoitments />}
                />
              <Route path="/dashboard/user/review" element={<UserReview />} />
            </Route>
            <Route
              path="/dashboard/admin"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }>
              <Route
                path="/dashboard/admin/AppointmentsList"
                element={<AppointmentsList />}
                />
              <Route
                path="/dashboard/admin/reviewsList"
                element={<ReviewsList />}
                />
              <Route
                path="/dashboard/admin/makeAdmin"
                element={<MakeAdmin />}
                />
              <Route
                path="/dashboard/admin/discountsList"
                element={<DiscountsList />}
                />
            </Route>
          </Route>
        </Routes>
                </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
