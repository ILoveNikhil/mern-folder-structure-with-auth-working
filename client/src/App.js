import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser} from './Redux/Action/action';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import NotFound from './Components/Page/NotFound';
import Welcome from './Components/Page/Welcome';
import Profie from  './Components/Profile/Profile'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Welcome /> : <Login />} />
          <Route
            path="/signup"
            element={isAuthenticated ? <Profie /> : <Signup />}
          />

          {/* <Route
            path="/update/password"
            element={isAuthenticated ? <UpdatePassword /> : <Login />}
          /> */}

          {/* <Route
            path="/forgot/password"
            element={isAuthenticated ? <UpdatePassword /> : <ForgotPassword />}
          /> */}

          {/* <Route
            path="/password/reset/:token"
            element={isAuthenticated ? <UpdatePassword /> : <ResetPassword />}
          /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
