import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cabins from "../src/pages/Cabins";
import Account from "../src/pages/Account";
import Bookings from "../src/pages/Bookings";
import Dashboard from "../src/pages/Dashboard";
import Login from "../src/pages/Login";
import PageNotFound from "../src/pages/PageNotFound";
import Settings from "../src/pages/Settings";
import Users from "../src/pages/Users";
import AppLayout from "./ui/AppLayout";

import GlobalStyles from "../src/styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cabins" element={<Cabins />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account" element={<Account />} />
            <Route index element={<Navigate to="dashboard" />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
