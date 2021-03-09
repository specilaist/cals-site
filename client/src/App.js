import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/Mainpage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/mybooks" component={AdminPage} />
    </Router>
  );
}

export default App;
