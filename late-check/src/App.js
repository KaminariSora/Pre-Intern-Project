import { Routes,  Route, Link } from "react-router-dom";
import Login from "./Login/Login";
import Profile from "./Profile/profile";
import Register from "./Register/Register";
import TestMongo from "./TestMongo/TestMongo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TestMongo />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
