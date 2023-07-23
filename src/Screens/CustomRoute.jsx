import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CustomRoute = (props) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const isAuthenticated = user;

  useEffect(() => {
    if (!user) {
      // navigate("/login");
    }
  }, [user, navigate]);

  return isAuthenticated && props.children;
};

export default CustomRoute;
