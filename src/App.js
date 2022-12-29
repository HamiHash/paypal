import { Route, Routes, Navigate } from "react-router-dom";
import Application from "./components/App/Application/Application";
import MainNav from "./components/Site/MainNav/MainNav";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<MainNav />} />
      <Route path="/profile" element={<Application />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

export default App;
