import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Comedy from "./pages/Comedy";
import Concerts from "./pages/Concerts";
import LogIn from "./pages/LogIn";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/comedy" element={<Comedy />} />
        <Route exact path="/concerts" element={<Concerts />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
