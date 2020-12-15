import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Account from "./instructors/Account";
import Courses from "./instructors/Courses";
import Lesson from "./instructors/Lesson";

export default function Instructors() {
  return (
    <Router>
      <div>
        <div className="sidenav">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="/account" className="linkStyle" href="#about">
                Account
              </Link>
            </li>
            <li>
              <Link to="/mycourse" className="linkStyle" href="#clients">
                My Courses
              </Link>
            </li>
            <li>
              <Link to="/lesson" className="linkStyle" href="#contact">
                Lesson
              </Link>
            </li>
            <li>
              <Link to="/logout" className="linkStyle" href="#services">
                LogOut
              </Link>
            </li>
          </ul>
        </div>
        <div className="main">
          <Route path="/account">
            <div>
              <Account></Account>
            </div>
          </Route>
          <Route path="/Logout">
            <div>
              <p>LogOut</p>
            </div>
          </Route>
          <Route path="/mycourse">
            <div>
              <Courses></Courses>
            </div>
          </Route>
          <Route path="/lesson">
            <div>
              <Lesson></Lesson>
            </div>
          </Route>
        </div>
      </div>
    </Router>
  );
}