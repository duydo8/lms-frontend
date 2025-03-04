import React, { useState } from 'react'
import { FaEye, FaPlus, FaSearch } from 'react-icons/fa'

const Classes = () => {
    const [courses] = useState([
        { id: 154, name: "Toán lớp 2", subject: "Toán", grade: "Lớp 2", level: "Cơ Bản", stages: 1, updatedAt: "2025-02-24 04:46:42", hasSchedule: true },
        { id: 152, name: "Tiếng Anh lớp 3 mới", subject: "Tiếng Anh", grade: "Lớp 3", level: "Cơ Bản", stages: 5, updatedAt: "2025-02-20 01:54:32", hasSchedule: true },
        { id: 151, name: "Tiếng Anh lớp 5 - Offline", subject: "Tiếng Anh Offline", grade: "Lớp 5", level: "Cơ Bản", stages: 0, updatedAt: "2025-02-24 01:59:43", hasSchedule: false },
        { id: 149, name: "Toán lớp 5 - Trinh tạo", subject: "Toán", grade: "Lớp 5", level: "Cơ Bản", stages: 5, updatedAt: "2025-02-15 08:31:09", hasSchedule: true },
    ]);

    return (
        <div className="w-100">
            <main className="p-4 overflow-auto" style={{ backgroundColor: "#F5F6FA", minHeight: "100vh" }}>
                {/* Title */}
                <h4 className="nk-block-title page-title">
                    Quản lý buổi học <b style={{ color: "#E76F51" }}></b>
                </h4>

                {/* Filter Form */}
                <form className="d-flex gap-2 my-3">
                    <select className="form-select form-select-sm w-auto">
                        <option>Môn học : All</option>
                        <option>Toán</option>
                        <option>Tiếng Anh</option>
                    </select>
                    <select className="form-select form-select-sm w-auto">
                        <option>Khối lớp : All</option>
                        <option>Lớp 2</option>
                        <option>Lớp 3</option>
                        <option>Lớp 5</option>
                    </select>
                    <select className="form-select form-select-sm w-auto">
                        <option>Trình độ : All</option>
                        <option>Cơ Bản</option>
                        <option>Trung Bình</option>
                    </select>
                    <button type="submit" className="btn btn-primary">
                        <FaSearch /> Search
                    </button>
                </form>

                {/* Table */}
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
                            {courses.map((course) => (
                                <tr key={course.id}>
                                    <td>{course.id}</td>
                                    <td>{course.name}</td>
                                    <td>{course.subject}</td>
                                    <td>{course.grade}</td>
                                    <td>{course.level}</td>
                                    <td>{course.stages}</td>
                                    <td>{course.updatedAt}</td>
                                    <td>
                                        {course.hasSchedule ? (
                                            <button className="btn btn-info text-white">
                                                <FaEye /> Xem lịch dạy
                                            </button>
                                        ) : (
                                            <button className="btn btn-danger">
                                                <FaPlus /> Tạo lịch dạy
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default Classes
