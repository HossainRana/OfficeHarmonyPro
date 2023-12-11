import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "/src/components/ui/Loading.jsx";
import Sidebar from "/src/components/layout/Sidebar/Sidebar";
import Header from "/src/components/layout/Header/Header";
import LandingDashboard from "/src/features/dashboard/dashboard";

const LeaveApplication = lazy(() =>
  import("/src/features/leave-application/LeaveApplication")
);
const LeaveBalanceLayout = lazy(() =>
  import("/src/features/leave-balance/LeaveBalanceLayout")
);

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Sidebar>
            <Header></Header>
            <Routes>
              <Route path="/" element={<LeaveBalanceLayout />}></Route>
              <Route path="/dashboard" element={<LandingDashboard />}></Route>
              <Route path="/leaveapplication" element={<LeaveApplication />}></Route>
              <Route path="/leavebalance" element={<LeaveBalanceLayout />}></Route>
            </Routes>
          </Sidebar>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
