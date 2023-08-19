import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./Routes";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTE_NAMES.HOME} element={<Home />} />
            {/* <Route path={ROUTE_NAMES.SHOP} element={<Shop />} />
            <Route path={ROUTE_NAMES.FAQ} element={<FAQ />} /> */}
          </Route>
      </Routes>
    </div>
  );
}

export default App;