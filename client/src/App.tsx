import Navbar from "../components/navbar.tsx";
import AllProblems from "../components/allProblems.tsx";
import HomePage from "../components/HomePage.tsx";
import "./App.css";
import Problem from "../components/Problem.tsx";
import LoginPage from "../components/LoginPage.tsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "6% 94%",
        height: "100%",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/AllProblems" element={<AllProblems />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/problem/:id" element={<Problem />} />
      </Routes>
    </div>
  );
}

export default App;
