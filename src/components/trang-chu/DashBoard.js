import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/trang-chu.css";
import NavBar from "./NavBar";
import LeftSide from "./LeftSide";
import Footer from "./Footer";

const Dashboard = () => {

    return (
        <div className="dashboard-container">
            {/* Sidebar bên trái */}
            <LeftSide />

            {/* Container bên phải chứa NavBar và MainContent */}
            <div className="flex-grow-1 d-flex flex-column"  style={{ backgroundColor: "f0f0f0" }}>
                <NavBar />
                <div className="main-content">
                    <Outlet />
                </div>
                <Footer />
            </div>
            
        </div>
    );
};

export default Dashboard;
