import { useState } from "react";
import Home from "./pages/Home";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
         
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

export default App;
