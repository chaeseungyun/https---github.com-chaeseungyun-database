import "./App.css";
import CustomerPage from "./CustomerPage";
import Main from "./Main";
import Nav from "./Nav.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNavPage from "./SideNavPage";
import NoticeList from "./NoticeList";
import NoticeViewer from "./NoticeViewer";
import NoticeCorrection from "./NoticeCorrection";
import WriteNotice from "./WriteNotice";
import TradeList from "./TradeList";
import TradeViewer from "./TradeViewer";
import TradeCorrection from "./TradeCorrection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/myPage" element={<CustomerPage />} />
          <Route path="/community" element={<SideNavPage />}>
            <Route path="notice-list" element={<NoticeList />} />
            <Route path="trade-list" element={<TradeList />} />
            <Route path="notice-view" element={<NoticeViewer />} />
            <Route path="trade-view" element={<TradeViewer />} />
            <Route path="view/correction" element={<NoticeCorrection />} />
            <Route path="trade/correction" element={<TradeCorrection />} />
            <Route path="write" element={<WriteNotice />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
