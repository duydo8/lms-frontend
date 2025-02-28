import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/trang-chu.css";

const LeftSide = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeLink, setActiveLink] = useState(null); // Lưu link được chọn

    const toggleMenu = (menu) => {
        setActiveMenu((prev) => (prev === menu ? null : menu));
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
                            <img class="logo-small logo-img logo-img-small" src="https://res.cloudinary.com/demxhfvfs/image/upload/v1740730914/e8bdf3da-4410-4ee7-b112-989d5d7b75b2.png" srcset="https://res.cloudinary.com/demxhfvfs/image/upload/v1740730914/e8bdf3da-4410-4ee7-b112-989d5d7b75b2.png" alt="logo-small" />
                            </Link>
                        </div>
                    </li>

                    {/* Quản Lý Tài Khoản */}
                    <li>
                        <div className={`menu-item ${activeMenu === "account" ? "active-text" : ""}`} onClick={() => toggleMenu("account")}>
                            <span className="fw-bold">Quản Lý Tài Khoản</span>
                            {activeMenu === "account" ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        <ul className={`submenu ${activeMenu === "account" ? "show" : ""}`}>
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
                    </li>

                    {/* Quản Lý Học Viên */}
                    <li>
                        <div className={`menu-item ${activeMenu === "student" ? "active-text" : ""}`} onClick={() => toggleMenu("student")}>
                            <span className="fw-bold">Quản Lý Học Viên</span>
                            {activeMenu === "student" ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        <ul className={`submenu ${activeMenu === "student" ? "show" : ""}`}>
                            <li>
                                <Link to="/" className={`submenu-item ${activeLink === "student-list" ? "active-link" : ""}`} onClick={() => handleLinkClick("student-list")}>
                                    Danh Sách Học Viên
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={`submenu-item ${activeLink === "attendance" ? "active-link" : ""}`} onClick={() => handleLinkClick("attendance")}>
                                    Điểm Danh
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* Quản Lý Bài Học */}
                    <li>
                        <div className={`menu-item ${activeMenu === "lesson" ? "active-text" : ""}`} onClick={() => toggleMenu("lesson")}>
                            <span className="fw-bold">Quản Lý Bài Học</span>
                            {activeMenu === "lesson" ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        <ul className={`submenu ${activeMenu === "lesson" ? "show" : ""}`}>
                            <li>
                                <Link to="/" className={`submenu-item ${activeLink === "lesson-list" ? "active-link" : ""}`} onClick={() => handleLinkClick("lesson-list")}>
                                    Danh Sách Bài Học
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={`submenu-item ${activeLink === "materials" ? "active-link" : ""}`} onClick={() => handleLinkClick("materials")}>
                                    Tài Liệu Học Tập
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default LeftSide;
