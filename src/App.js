import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import HomePage from "./Components/HomePage";
import Error404 from "./Components/Error404";

import NavBar from "./Components/Navbar/NavBar";
import Login from "./Components/LoginPage/Login";
import OwnerPage from "./Components/OwnerPage";
import { useState, useEffect } from "react";
import { authCheck } from "./Components/API";

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    authCheck(setAuth);
  }, []);

  return (
    <div className="App">
      {auth ? (
        <BrowserRouter>
          <Routes history={History}>
            <Route exact path="/ownerpage" element={<OwnerPage />}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <NavBar auth={auth} setAuth={setAuth} />
          <Routes history={History}>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Error404 />}></Route>
              <Route
                path="/login"
                element={<Login setAuth={setAuth} />}
              ></Route>
            
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
