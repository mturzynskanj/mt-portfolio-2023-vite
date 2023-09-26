import React from "react"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import HomePage from "../pages/Home"
import Resume from "../pages/Resume"
import AboutThisSite from "../pages/AboutThisSite"
import AboutMe from "../pages/AboutMe"
import Portfolio from "../pages/Portfolio"
import SignIn from "../pages/SignIn"
import SignUp from '../pages/SignUp'
import ForgotPassword from "../pages/ForgotPassword"
import AddNewProject from "../pages/AddNewProject"
import Profile from '../pages/Profile'
import PrivateRoute from './PrivateRoute'
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutThisSite" element={<AboutThisSite />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path='/profile' element={<Profile />} /> */}
        <Route path="/profile" element={<PrivateRoute />} >
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/addNewProject" element={<AddNewProject />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;

/*!SECTION
<Routes>
            <Route path="/" element={<Header />} />
            <Route path="/aboutThisSite" element={<Navigation />} />
            <Route path="/aboutMe" element={<Navigation />} />
            <Route path="/resume" element={<Navigation />} />
            <Route path="/portfolio" element={<Navigation />} />
            <Route path="/signIn" element={<Navigation />} />
          </Routes>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutThisSite" element={<AboutThisSite />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/signIn" element={<SignIn />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Footer />} />
          </Routes>



           {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutThisSite" element={<AboutThisSite />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
      <Routes> 
        {/* <Route path="/" element={<Footer />} />
      </Routes> 



       {/* <Route path="/aboutThisSite" element={<Navigation />} />
        <Route path="/aboutMe" element={<Navigation />} />
        <Route path="/resume" element={<Navigation />} />
        <Route path="/portfolio" element={<Navigation />} />
        <Route path="/signIn" element={<Navigation />} /> 

*/
