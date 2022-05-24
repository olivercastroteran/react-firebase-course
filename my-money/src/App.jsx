import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar, Spinner } from './components';
import { useAuthContext } from './hooks';
import { Home, Login, Signup } from './views';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady ? (
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </BrowserRouter>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default App;
