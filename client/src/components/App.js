import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { Comedy } from "./Comedy";
import { Concerts } from "./Concerts";
import { LogIn } from "./LogIn";
import { ResetPassword } from "./ResetPassword";
import { Header } from "./Header";
import { CreateAccount } from "./CreateAccount";
import '../styles/theme.css';
import { Footer } from "./Footer";

export function App() {
  return (
    <div>

      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/comedy" element={<Comedy />} />
        <Route exact path="/concerts" element={<Concerts />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/createaccount" element={<CreateAccount />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route path='*' element={<Navigate to="/" />} />  {/* or error page */}
      </Routes>
      <Footer />
    </div>
  );
}


