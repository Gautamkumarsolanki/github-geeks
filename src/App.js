import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Alert from "./component/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./component/User";
import GithubState from "./GithubState";
import Home from "./component/Home";
import Error from "./component/Error";
function App() {
  return (
    <GithubState>
      <BrowserRouter>
        <Fragment>
          <Navbar title="Github Finder" />
          <div className="container">
            <Alert />
          </div>
          <Routes>
            <Route path="/" element={<Home/>} errorElement={<Error/>}/>
            <Route path="user/:loginId" element={<User />} />
            <Route path='*' element={<Error/>}/>
          </Routes>
        </Fragment>
      </BrowserRouter>
    </GithubState>  
  );
}
export default App;
