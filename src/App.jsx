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
import CharacterCursor from "./components/CharacterCursor";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="" element={
          <div>
            
            <Home/>
          </div>
          
          } />
        
        <Route path="/" element={
          <div>
            <Layout />
          </div>
          

          }>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>} />

        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}


export default App;
