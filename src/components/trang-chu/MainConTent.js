import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaEye, FaPlus } from "react-icons/fa";
import "../../assets/trang-chu.css";

const MainConTent = () => {
    return (
        <div className="w-100">
            <main className="p-4 overflow-auto" style={{ backgroundColor: "#F5F6FA", minHeight: "100vh" }}>
                <h4 className="nk-block-title page-title">
                    Welcome to LMS <b style={{ color: "#E76F51" }}></b>
                </h4>

                <form className="d-flex gap-2 my-3">
                    <select className="form-select form-select-sm w-auto">
                        <option>Môn học : All</option>
                        <option>Môn học : All</option>
                        <option>Môn học : All</option>
                    </select>
                    <select className="form-select form-select-sm w-auto">
                        <option>Khối lớp : All</option>
                        <option>Môn học : All</option>
                        <option>Môn học : Trung Binh</option>
                    </select>
                    <select className="form-select form-select-sm w-auto">
                        <option>Trình độ : All</option>
                    </select>
                    <button className="btn btn-primary"><FaSearch /> Search</button>
                </form>

                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Course ID</th>
                                <th>Course</th>
                                <th>Subject</th>
                                <th>Grade</th>
                                <th>Level</th>
                                <th>Stages</th>
                                <th>Updated At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>154</td>
                                <td>Toán lớp 2</td>
                                <td>Toán</td>
                                <td>Lớp 2</td>
                                <td>Cơ Bản</td>
                                <td>1</td>
                                <td>2025-02-24 04:46:42</td>
                                <td><button className="btn btn-info text-white"><FaEye /> Xem lịch dạy</button></td>
                            </tr>
                            <tr>
                                <td>152</td>
                                <td>Tiếng Anh lớp 3 mới</td>
                                <td>Tiếng Anh</td>
                                <td>Lớp 3</td>
                                <td>Cơ Bản</td>
                                <td>5</td>
                                <td>2025-02-20 01:54:32</td>
                                <td><button className="btn btn-info text-white"><FaEye /> Xem lịch dạy</button></td>
                            </tr>
                            <tr>
                                <td>151</td>
                                <td>Tiếng Anh lớp 5 - Offline</td>
                                <td>Tiếng Anh Offline</td>
                                <td>Lớp 5</td>
                                <td>Cơ Bản</td>
                                <td>0</td>
                                <td>2025-02-24 01:59:43</td>
                                <td><button className="btn btn-danger"><FaPlus /> Tạo lịch dạy</button></td>
                            </tr>
                            <tr>
                                <td>149</td>
                                <td>Toán lớp 5 - Trinh tạo</td>
                                <td>Toán</td>
                                <td>Lớp 5</td>
                                <td>Cơ Bản</td>
                                <td>5</td>
                                <td>2025-02-15 08:31:09</td>
                                <td><button className="btn btn-info text-white"><FaEye /> Xem lịch dạy</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default MainConTent
