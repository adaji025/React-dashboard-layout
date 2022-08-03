import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./componenents/Dashboard";
import InnerContent from "./componenents/InnerContent";
import Settings from "./componenents/Settings";
import Tab1 from "./componenents/Tab1";
import Tab2 from "./componenents/Tab2";
import Tab3 from "./componenents/Tab3";
import Tabs from "./componenents/Tabs";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InnerContent />}>
          <Route path="/" element={<Navigate replace to='dashboard' />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tabs" element={<Tabs />}>
            <Route path="/tabs" element={<Navigate replace to="tab1" />} />
            <Route path="tab1" element={<Tab1 />} />
            <Route path="tab2" element={<Tab2 />} />
            <Route path="tab3" element={<Tab3 />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
