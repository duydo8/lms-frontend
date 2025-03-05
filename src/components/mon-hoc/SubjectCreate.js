import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSave, FaArrowLeft } from "react-icons/fa";

const SubjectCreate = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Tên môn học không được để trống!");
      return;
    }
  
    setLoading(true);
    setError(null);
  
    try {
      const response = await axios.post("/api/subject/save", { name, description });
  
      if (response.data.code === 400) {
        setError(response.data.message); // Lấy lỗi từ backend
      } else {
        navigate("/subjects"); // Thành công, quay về danh sách
      }
    } catch (err) {
      setError("Lỗi khi gửi yêu cầu: " + err.message);
    } finally {
      setLoading(false);
    }
  };;

  return (
    <div className="container mt-4">
      {/* Tiêu đề & Nút quay lại */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-dark fw-bold">Thêm Môn Học Mới</h3>
        <button onClick={() => navigate("/subjects")} className="btn btn-secondary">
          <FaArrowLeft /> Quay lại
        </button>
      </div>

      {/* Hiển thị lỗi nếu có */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Form nhập dữ liệu */}
      <div className="card p-4 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Tên môn học</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên môn học..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Mô tả</label>
            <textarea
              className="form-control"
              placeholder="Nhập mô tả môn học..."
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success" disabled={loading}>
            <FaSave /> {loading ? "Đang lưu..." : "Lưu"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubjectCreate;
