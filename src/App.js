import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import CharacterPage from "./component/CharacterPage";
import Home from "./component/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
