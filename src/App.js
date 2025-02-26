import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth/Login';
import Sidebar from './common/Sidebar';
import Header from './common/Header';
import Dashboard from './Appdashboard/Admin/Dashboard';
import Trainerdashboard from './Appdashboard/Trainer/TrainerDashboard';

const ProtectedLayout = ({ children }) => {
  return (
    <div className="app-container">
      <div className="content-container">
        <Sidebar />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes with Sidebar */}
        <Route
          path="/admindashboard"
          element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          }
        />

<Route
          path="/trainerdashboard"
          element={
            <ProtectedLayout>
              <Trainerdashboard />
            </ProtectedLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

