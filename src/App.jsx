import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NameForm from "./components/NameForm/NameForm";
import { UserForm } from "./components/UserForm/UserForm";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nameForm" element={<NameForm />} />
        <Route path="/userForm" element={<UserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
