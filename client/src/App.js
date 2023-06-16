import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Comedy from "./pages/Comedy";
import Concerts from "./pages/Concerts";
import LogIn from "./pages/LogIn";
import ResetPassword from "./pages/ResetPassword";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/comedy" element={<Comedy />} />
        <Route exact path="/concerts" element={<Concerts />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route path='*' element={<Navigate to="/" />} />  {/* or error page */}
      </Routes>
    </Router>
  );
}

export default App;
