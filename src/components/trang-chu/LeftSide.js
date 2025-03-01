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
                    <li><h4 className="menu-item">Vận hành Tài Khoản</h4></li>
                    
                    {/* Quản Lý Tài Khoản */}
                    <li>
                        <div className={`menu-item ${activeMenu === "account" ? "active-text" : ""}`} onClick={() => toggleMenu("account")}>
                            <span >Quản Lý Tài Khoản</span>
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
                            <span >Quản Lý Học Viên</span>
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
                    <li>
                        <div className={`menu-item ${activeMenu === "teacher" ? "active-text" : ""}`} onClick={() => toggleMenu("teacher")}>
                            <span >Quản Lý Giáo Viên</span>
                            {/* {activeMenu === "course" ? <FaChevronUp /> : <FaChevronDown />} */}
                        </div>
                        {/* <ul className={`submenu ${activeMenu === "lesson" ? "show" : ""}`}>
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
                        </ul> */}
                    </li>
                    <li><h4 className="menu-item">Vận hành Buổi Học</h4></li>
                    <li>
                        <div className={`menu-item ${activeMenu === "course" ? "active-text" : ""}`} onClick={() => toggleMenu("course")}>
                            <span >Quản Lý Khoá Học</span>
                            {/* {activeMenu === "course" ? <FaChevronUp /> : <FaChevronDown />} */}
                        </div>
                        {/* <ul className={`submenu ${activeMenu === "lesson" ? "show" : ""}`}>
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
                        </ul> */}
                    </li>
                    <li>
                        <div className={`menu-item ${activeMenu === "classroom" ? "active-text" : ""}`} onClick={() => toggleMenu("classroom")}>
                            <span >Quản Lý Lớp Học</span>
                            {/* {activeMenu === "course" ? <FaChevronUp /> : <FaChevronDown />} */}
                        </div>
                        {/* <ul className={`submenu ${activeMenu === "lesson" ? "show" : ""}`}>
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
                        </ul> */}
                    </li>
                    {/* Quản Lý Bài Học */}
                    <li>
                        <div className={`menu-item ${activeMenu === "lesson" ? "active-text" : ""}`} onClick={() => toggleMenu("lesson")}>
                            <span >Quản Lý Buổi Học</span>
                            {activeMenu === "lesson" ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        <ul className={`submenu ${activeMenu === "lesson" ? "show" : ""}`}>
                            <li>
                                <Link to="/lession-list" className={`submenu-item ${activeLink === "lesson-list" ? "active-link" : ""}`} onClick={() => handleLinkClick("lesson-list")}>
                                    Danh Sách Buổi Học
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/" className={`submenu-item ${activeLink === "materials" ? "active-link" : ""}`} onClick={() => handleLinkClick("materials")}>
                                    Tài Liệu Học Tập
                                </Link>
                            </li> */}
                        </ul>
                    </li>
                    <li>
                        <div className={`menu-item ${activeMenu === "lesson-schedule" ? "active-text" : ""}`} onClick={() => toggleMenu("lesson-schedule")}>
                            <span >Quản Lý lịch học</span>
                            {activeMenu === "lesson-schedule" ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        <ul className={`submenu ${activeMenu === "lesson-schedule" ? "show" : ""}`}>
                            <li>
                                <Link to="/lession-schedule" className={`submenu-item ${activeLink === "lesson-schedule" ? "active-link" : ""}`} onClick={() => handleLinkClick("lesson-schedule-list")}>
                                    Lịch học
                                </Link>
                            </li>
                            <li>
                                <Link to="/time-slot" className={`submenu-item ${activeLink === "materials" ? "active-link" : ""}`} onClick={() => handleLinkClick("materials")}>
                                    Khung giờ học
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className={`menu-item ${activeMenu === "score" ? "active-text" : ""}`} onClick={() => toggleMenu("score")}>
                            <span >Quản Lý Điểm</span>
                            {/* {activeMenu === "course" ? <FaChevronUp /> : <FaChevronDown />} */}
                        </div>
                        {/* <ul className={`submenu ${activeMenu === "lesson" ? "show" : ""}`}>
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
                        </ul> */}
                    </li>
                    <li><h4 className="menu-item">Vận hành Hệ Thống</h4></li>
                    <li>
                        <div className={`menu-item ${activeMenu === "role-permission" ? "active-text" : ""}`} onClick={() => toggleMenu("role-permission")}>
                            <span >Quản Lý Quyền Và Vai Trò</span>
                            {activeMenu === "role-permission" ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        <ul className={`submenu ${activeMenu === "role-permission" ? "show" : ""}`}>
                            <li>
                                <Link to="/" className={`submenu-item ${activeLink === "role" ? "active-link" : ""}`} onClick={() => handleLinkClick("role")}>
                                    Quản Lý Quyền
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={`submenu-item ${activeLink === "permission" ? "active-link" : ""}`} onClick={() => handleLinkClick("permission")}>
                                    Quản Lý Vai Trò
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className={`menu-item ${activeMenu === "system-authorization" ? "active-text" : ""}`} onClick={() => toggleMenu("system-authorization")}>
                            <span >Phân Quyền Hệ Thống</span>
                            {/* {activeMenu === "course" ? <FaChevronUp /> : <FaChevronDown />} */}
                        </div>
                        {/* <ul className={`submenu ${activeMenu === "lesson" ? "show" : ""}`}>
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
                        </ul> */}
                    </li>
                    <li>
                        <div className={`menu-item ${activeMenu === "report" ? "active-text" : ""}`} onClick={() => toggleMenu("report")}>
                            <span >Báo Cáo Và Thống Kê</span>
                            {/* {activeMenu === "course" ? <FaChevronUp /> : <FaChevronDown />} */}
                        </div>
                        {/* <ul className={`submenu ${activeMenu === "lesson" ? "show" : ""}`}>
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
                        </ul> */}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default LeftSide;
