import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/trang-chu.css";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 border">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="dropdown ms-auto">
                    <button className="btn btn-light dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaUserCircle size={24} />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                        <li><Link className="dropdown-item" href="/">Hồ sơ</Link></li>
                        <li><Link className="dropdown-item" href="/">Đăng xuất</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;

