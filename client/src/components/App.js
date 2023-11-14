import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { LogIn } from "./LogIn";
import { ResetPassword } from "./ResetPassword";
import { Header } from "./Header";
import { CreateAccount } from "./CreateAccount";
import '../styles/theme.css';
import { Footer } from "./Footer";
import { GetTickets } from "./GetTickets";
import { SearchResult } from "./SearchResults";
import { FilteredEvents } from "../pages/FilteredEvents";

export function App() {
  return (
    <div>

      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/comedy" element={<FilteredEvents name="Stand-up Comedy" type="standup" />} />
        <Route exact path="/concerts" element={<FilteredEvents name="Musical Concerts" type="concert" />} />
        <Route exact path="/login" element={<LogIn />} />
        {/* <Route exact path="/createaccount" element={<CreateAccount />} /> */}
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/gettickets/:id" element={<GetTickets />} />
        <Route exact path="/search" element={<SearchResult />} />
        <Route path='*' element={<Navigate to="/" />} />  {/* or error page */}
      </Routes>
      <Footer />
    </div>
  );
}


