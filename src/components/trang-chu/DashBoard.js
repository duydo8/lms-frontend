import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/trang-chu.css";
import NavBar from "./NavBar";
import LeftSide from "./LeftSide";

const Dashboard = () => {

    return (
        <div className="d-flex w-100 overflow-hidden">
            {/* Sidebar bên trái */}
            <LeftSide />

            {/* Container bên phải chứa NavBar và MainContent */}
            <div className="flex-grow-1 d-flex flex-column">
                <NavBar />
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
