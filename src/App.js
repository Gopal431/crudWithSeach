import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import AddNewUser from "./components/AddNewUser";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newUserAdd" element={<AddNewUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
