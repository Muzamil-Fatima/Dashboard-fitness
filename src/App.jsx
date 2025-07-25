import { Route, Routes } from "react-router-dom";
import SideBar from "./Component/SideBar";
import OverView from "./Pages/Dashboard/OverView";
import Appointment from "./Pages/Appointment/Appointment";
import Classes from "./Pages/Classes/Classes";
import Services from "./Pages/Services/Services";
import Client from "./Pages/Dashboard/Clients";
import Setting from "./Pages/Setting/Settings";
import Profile from "./Pages/Setting/ProfileDetails";
import Team from "./Pages/Setting/Team";
// import SideIcon from "./Component/SideIcon";
// import Login from "./Pages/Login/Login"

export default function App() {
  return (
    <div className="flex bg-[var(--color-dark)] h-screen text-[var(--color-white)]">
      <SideBar />
      <div className="h-screen w-px bg-gray-500 opacity-40"></div>
      <div className="flex-1 ml-8">
        <Routes>
          <Route path="overview" element={<OverView />} />
          <Route path="client" element={<Client />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="classes" element={<Classes />} />
          <Route path="services" element={<Services />} />
          <Route path="setting" element={<Setting />} />
          <Route path="setting/profile-details" element={<Profile />} />
          <Route path="setting/team-details" element={<Team />} />
          {/* <Route path="login" element={<Login />} /> */}
        </Routes>
        {/* <div>
          <SideIcon />
        </div> */}
      </div>
    </div>
  );
}
