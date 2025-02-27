import { BrowserRouter, Routes, Route } from "react-router";

import HomeLayout from "../../pages/HomeLayout";
import Entries from "../../pages/Entries";
import Dashboard from "../../pages/Dashboard";
import Trends from "../../pages/Trends";
import Insights from "../../pages/Insights";
import Profile from "../../pages/Profile";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="entries" element={<Entries />} />
          <Route path="trends" element={<Trends />} />
          <Route path="insights" element={<Insights />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
