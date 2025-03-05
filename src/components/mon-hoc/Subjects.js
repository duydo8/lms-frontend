import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaPlus, FaSearch, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Subjects = () => {
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        fetchSubjects();
    }, []);

    const fetchSubjects = async (name = "") => {
        try {
            setLoading(true);
            let url = name ? `/api/subject/findByName?name=${name}` : "/api/subject/findAll";
            const response = await axios.get(url);

            if (response.data.code === 400) {
                setError(response.data.message); // Lấy lỗi từ backend
                setSubjects([]);
            } else {
                setSubjects(response.data.data);
            }
        } catch (err) {
            setError("Lỗi khi tải dữ liệu: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete("/api/subject/deleteById", { params: { id } });
            setSubjects((prev) => prev.filter((s) => s.id !== id));
        } catch (error) {
            console.error("Error deleting subject:", error);
        }
    };

    const formatDate = (isoString) => {
        if (!isoString) return "";
        const date = new Date(isoString);
        return date.toISOString().slice(0, 19).replace("T", " ");
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchSubjects(searchName);
    };

    return (
        <div className="container mt-4">
            {/* Tiêu đề + Nút thêm mới */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark fw-bold">Quản lý Môn Học</h3>
                <Link to="/subject-create" className="btn btn-success">
                    <FaPlus /> Thêm mới
                </Link>
            </div>

            {/* Form tìm kiếm */}
            <div className="card shadow-sm p-3 mb-4 bg-light rounded">
                <form className="row g-2" onSubmit={handleSearch}>
                    <div className="col-md-10">
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Nhập tên môn học..."
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2 text-end">
                        <button type="submit" className="btn btn-dark btn-sm">
                            <FaSearch /> Tìm kiếm
                        </button>
                    </div>
                </form>
            </div>

            {/* Loading & Error */}
            {loading && <div className="alert alert-info text-center">⏳ Đang tải dữ liệu...</div>}
            {error && <div className="alert alert-danger text-center">❌ Lỗi: {error}</div>}

            {/* Bảng dữ liệu */}
            {!loading && !error && (
                <div className="table-responsive">
                    <table className="table table-borderless table-hover align-middle">
                        <thead className="table-secondary text-dark text-center">
                            <tr>
                                <th>ID</th>
                                <th>Tên môn học</th>
                                <th>Mô tả</th>
                                <th>Ngày tạo</th>
                                <th>Cập nhật</th>
                                <th colSpan="3">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {subjects.length > 0 ? (
                                subjects.map((s) => (
                                    <tr key={s.id} className="border-bottom">
                                        <td className="fw-bold">{s.id}</td>
                                        <td>{s.name}</td>
                                        <td>{s.description}</td>
                                        <td>{formatDate(s.createdAt)}</td>
                                        <td>{formatDate(s.updateAt)}</td>
                                        <td>
                                            <Link to={`/subject-info/${s.id}`} className="btn btn-outline-secondary btn-sm" title="Xem chi tiết">
                                                <FaEye />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={`/subject-edit/${s.id}`} className="btn btn-outline-primary btn-sm" title="Chỉnh sửa">
                                                <FaEdit /> Sửa
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(s.id)} className="btn btn-outline-danger btn-sm" title="Xóa">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center text-muted">Không tìm thấy môn học nào</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Subjects;
