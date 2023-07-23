import { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./Screens/ProfileScreen";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  const Root = () => {
    return (
      <>
        <div>
          <Outlet />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            {!user ? (
              <Route path="*" element={<LoginScreen />} />
            ) : (
              <>
                <Route index element={<HomeScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="*" element={<ProfileScreen />} />
              </>
            )}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
