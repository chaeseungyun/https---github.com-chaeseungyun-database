import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import './SideNavPage.css';

export default function SideNavPage() {
  return (
    <div className="sidenavpage-container">
      <SideNav />
      <Outlet />
    </div>
  )
}