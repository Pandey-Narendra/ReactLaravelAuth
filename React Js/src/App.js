import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import LoginRegister from "./Components/Pages/LoginRegister";
import SendPasswordResetEmail from "./Components/Pages/Auth/SendPasswordResetEmail";
import Dashboard from "./Components/Pages/Dashboard";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path="contact" element={ <Contact /> } />
          <Route path="loginregister" element={ <LoginRegister /> } />
          <Route path="sendpasswordresetemail" element={ <SendPasswordResetEmail /> } />
          <Route path="dashboard" element={ <Dashboard/> } />
        </Route> 
      </Routes>
    </BrowserRouter>
    </>    
  );
}

export default App;
