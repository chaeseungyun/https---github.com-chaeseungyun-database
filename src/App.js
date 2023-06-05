import "./App.css";
import CustomerPage from "./CustomerPage";
import Main from "./Main";
import Nav from "./Nav.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/myPage" element={<CustomerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
