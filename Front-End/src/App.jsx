import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Transition from "./components/Transition";
import BackgroundDot from "./components/BackgroundDot";
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="relative w-screen h-screen">
        <BackgroundDot />
        <Transition>
          <Routes>
            <Route 
              path="/" 
              element={isAuthenticated ? <LandingPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={<Login setIsAuthenticated={setIsAuthenticated} />} 
            />
            <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
          </Routes>
        </Transition>
      </div>
    </BrowserRouter>
  );
}

export default App;
