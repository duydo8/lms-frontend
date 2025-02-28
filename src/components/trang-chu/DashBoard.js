import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/trang-chu.css";
import NavBar from "./NavBar";
import MainConTent from "./MainConTent";
import LeftSide from "./LeftSide";

const Dashboard = () => {

    return (
        <div className="d-flex w-100 overflow-hidden">
        {/* Sidebar bên trái */}
        <LeftSide />
      
        {/* Container bên phải chứa NavBar và MainContent */}
        <div className="flex-grow-1 d-flex flex-column">
          <NavBar />
          <MainConTent />
        </div>
      </div>
    );
};

export default Dashboard;
