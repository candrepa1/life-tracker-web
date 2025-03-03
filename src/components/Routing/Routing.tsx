import { BrowserRouter, Routes, Route } from "react-router";

import HomeLayout from "../../pages/HomeLayout";
import Entries from "../../pages/Entries";
import Dashboard from "../../pages/Dashboard";
import Trends from "../../pages/Trends";
import Insights from "../../pages/Insights";
import Login from "../../pages/Login";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<HomeLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="entries" element={<Entries />} />
          <Route path="trends" element={<Trends />} />
          <Route path="insights" element={<Insights />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
