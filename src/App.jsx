import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import FirestorePage from "./pages/FirestorePage";
import StoragePage from "./pages/StoragePage";
import FunctionsPage from "./pages/FunctionsPage";
import AuthPage from "./pages/Auth";
import "./App.css"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>⚡ Firebase Demo Learning APP</h1>
        </header>

        {/* Navigation */}
        <nav className="nav-bar">
           <NavLink 
            to="/auth" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            🔑 Auth
          </NavLink>
          <NavLink 
            to="/firestore" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            🏠 Firestore
          </NavLink>
          <NavLink 
            to="/storage" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            📦 Storage
          </NavLink>
          <NavLink 
            to="/functions" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            ⚙️ Functions
          </NavLink>
        
        </nav>

        {/* Page Routing */}
        <main className="page-container">
          <div className="page-content">
            <Routes>
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/firestore" element={<FirestorePage />} />
              <Route path="/storage" element={<StoragePage />} />
              <Route path="/functions" element={<FunctionsPage />} />
              <Route path="/" element={<FirestorePage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;