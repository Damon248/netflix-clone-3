import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleLogOut = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  const plans = [
    {
      plan: "Premium",
      qlty: "4k + HDR",
      buttonName: "Subscribe",
    },
    {
      plan: "Basic",
      qlty: "720p",
      buttonName: "Subscribe",
    },
    {
      plan: "Standard",
      qlty: "1080p",
      buttonName: "Subscribe",
    },
  ];

  return (
    <div className="profieScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user?.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <div className="planScreen__plans">
                {plans.map((plan, index) => (
                  <div key={index} className="plan__wrapper">
                    <div className="plan__lhs">
                      <h5 className="plan__name">{plan.plan}</h5>
                      <h6 className="plan__qlty">{plan.qlty}</h6>
                    </div>
                    <div className="plan__rhs">
                      <button>{plan.buttonName}</button>
                    </div>
                  </div>
                ))}

                {/* <h5>Basic</h5>
                <h6>720p</h6>
                <button>Subscribe</button>
                <h5>Standard</h5>
                <h6>1080p</h6>
                <button>Subscribe</button> */}
              </div>
              <button
                onClick={() => handleLogOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
