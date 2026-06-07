import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllNotifications from "./pages/AllNotifications";
import PriorityInbox from "./pages/PriorityInbox";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="navbar">
          <h1>Notification Management System</h1>

          <div className="nav-links">
            <Link to="/">All Notifications</Link>
            <Link to="/priority">Priority Inbox</Link>
          </div>
        </nav>

        <div className="page-container">
          <Routes>
            <Route path="/" element={<AllNotifications />} />

            <Route path="/priority" element={<PriorityInbox />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
