import "./App.css";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Settings from "./pages/Settings.jsx";

function App() {
  return (
    <>
      <div>
        <main className="main-content">
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Routes>
          </AuthProvider>
        </main>
      </div>
    </>
  );
}

export default App;
