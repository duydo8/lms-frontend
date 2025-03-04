import React, { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../../assets/trang-chu.css";

const menuStructure = {
    "account": {
        "Quản Lý Tài Khoản": [
            { "Quản Lý Giáo Viên": "/teachers" },
            { "Quản Lý Học Viên": "/students" }
        ],
    },
    "operation": {
        "Quản Lý Môn Học": "/subjects",
        "Quản Lý Lớp Học": "/classes",
        "Quản Lý Khoá Học": null,
        "Quản Lý Buổi Học": null,
        "Quản Lý Lịch Học": null,
        "Quản Lý Điểm": null,
    },
    "system": {
        "Quản Lý Vai Trò": null,
        "Quản Lý Quyền": null,
    },
};

const LeftSide = () => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        const currentPath = location.pathname;
        Object.keys(menuStructure).forEach((menu) => {
            Object.keys(menuStructure[menu]).forEach((submenu) => {
                const submenuLink = menuStructure[menu][submenu];
                if (submenuLink === currentPath || (Array.isArray(submenuLink) && submenuLink.some(linkObj => Object.values(linkObj).includes(currentPath)))) {
                    setActiveMenu(menu);
                    setActiveSubmenu(submenu);
                    setActiveLink(currentPath);
                }
            });
        });
    }, [location.pathname]);

    return (
        <nav className="sidebar">
            <ul className="menu-list">
                <li>
                    <div className="menu-item logo-container">
                        <Link to="/" className="logo-link">
                            <img
                                className="logo-small"
                                src="https://res.cloudinary.com/demxhfvfs/image/upload/v1740730914/e8bdf3da-4410-4ee7-b112-989d5d7b75b2.png"
                                alt="logo"
                            />
                        </Link>
                    </div>
                </li>
                {Object.keys(menuStructure).map((menu) => (
                    <li key={menu}>
                        <h4
                            className={`menu-item ${activeMenu === menu ? "active-menu" : ""}`}
                            onClick={() => setActiveMenu(activeMenu === menu ? null : menu)}
                        >
                            {menu === "account" ? "Vận hành Tài Khoản" : 
                             menu === "operation" ? "Vận hành Chương Trình Học" : 
                             "Vận hành Hệ Thống"}
                            {Object.keys(menuStructure[menu]).some(
                                (submenu) => menuStructure[menu][submenu] !== null
                            ) && (
                                <span className={`arrow ${activeMenu === menu ? "rotated" : ""}`}>
                                    {activeMenu === menu ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                                </span>
                            )}
                        </h4>
                        {activeMenu === menu && (
                            <ul className="submenu">
                                {Object.keys(menuStructure[menu]).map((submenu) => {
                                    const submenuLink = menuStructure[menu][submenu];
                                    return (
                                        <li key={submenu}>
                                            {Array.isArray(submenuLink) ? (
                                                <>
                                                    <div 
                                                        className="submenu-title"
                                                        onClick={() => setActiveSubmenu(activeSubmenu === submenu ? null : submenu)}
                                                    >
                                                        {submenu}
                                                        <span className={`arrow ${activeSubmenu === submenu ? "rotated" : ""}`}>
                                                            {activeSubmenu === submenu ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                                                        </span>
                                                    </div>
                                                    {activeSubmenu === submenu && (
                                                        <ul>
                                                            {submenuLink.map((linkObj, index) => {
                                                                const [linkName, linkPath] = Object.entries(linkObj)[0];
                                                                return (
                                                                    <li key={index}>
                                                                        <Link to={linkPath} className={`submenu-title ${activeLink === linkPath ? "active-text" : ""}`} onClick={() => setActiveLink(linkPath)}>
                                                                            {linkName}
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    )}
                                                </>
                                            ) : submenuLink ? (
                                                <Link
                                                    to={submenuLink}
                                                    className={`submenu-title ${activeLink === submenuLink ? "active-text" : ""}`}
                                                    onClick={() => setActiveLink(submenuLink)}
                                                >
                                                    {submenu}
                                                </Link>
                                            ) : (
                                                <div className="submenu-title">{submenu}</div>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default LeftSide;