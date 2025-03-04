import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/trang-chu.css";

const LeftSide = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [activeLink, setActiveLink] = useState(null);

    const toggleMenu = (menu) => {
        setActiveMenu((prev) => (prev === menu ? null : menu));
        if (activeSubmenu) setActiveSubmenu(null);
    };

    const toggleSubmenu = (submenu) => {
        setActiveSubmenu((prev) => (prev === submenu ? null : submenu));
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div>
            <nav className="bg-light vh-100 border-end" style={{ width: "300px" }}>
                <ul className="list-unstyled">
                    <li>
                        <div className="menu-item">
                            <Link to="/" className="d-block py-2 left-side-text-color fw-bold no-underline" style={{ backgroundColor: "white" }}>
                                <img className="logo-small logo-img logo-img-small" src="https://res.cloudinary.com/demxhfvfs/image/upload/v1740730914/e8bdf3da-4410-4ee7-b112-989d5d7b75b2.png" alt="logo-small" />
                            </Link>
                        </div>
                    </li>
                    
                    <li>
                        <h4 className="menu-item" onClick={() => toggleMenu("account")}>Vận hành Tài Khoản {activeMenu === "account" ? <FaChevronUp /> : <FaChevronDown />}</h4>
                        {activeMenu === "account" && (
                            <ul className="list-unstyled">
                                <li>
                                    <div className={`menu-item ${activeSubmenu === "account" ? "active-text" : ""}`} onClick={() => toggleSubmenu("account")}>Quản Lý Tài Khoản {activeSubmenu === "account" ? <FaChevronUp /> : <FaChevronDown />}</div>
                                    {activeSubmenu === "account" && (
                                        <ul className="submenu show">
                                            <li>
                                                <Link to="/" className={`submenu-item ${activeLink === "user" ? "active-link" : ""}`} onClick={() => handleLinkClick("user")}>
                                                    Quản Lý Người Dùng
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className={`submenu-item ${activeLink === "role" ? "active-link" : ""}`} onClick={() => handleLinkClick("role")}>
                                                    Quản Lý Quyền
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>
                    
                    <li>
                        <h4 className="menu-item" onClick={() => toggleMenu("operation")}>Vận hành Hệ Thống {activeMenu === "operation" ? <FaChevronUp /> : <FaChevronDown />}</h4>
                        {activeMenu === "operation" && (
                            <ul className="list-unstyled">
                                <li>
                                    <div className={`menu-item ${activeSubmenu === "system" ? "active-text" : ""}`} onClick={() => toggleSubmenu("system")}>Quản Lý Hệ Thống {activeSubmenu === "system" ? <FaChevronUp /> : <FaChevronDown />}</div>
                                    {activeSubmenu === "system" && (
                                        <ul className="submenu show">
                                            <li>
                                                <Link to="/" className={`submenu-item ${activeLink === "settings" ? "active-link" : ""}`} onClick={() => handleLinkClick("settings")}>
                                                    Cài Đặt Hệ Thống
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className={`submenu-item ${activeLink === "logs" ? "active-link" : ""}`} onClick={() => handleLinkClick("logs")}>
                                                    Nhật Ký Hoạt Động
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default LeftSide;
