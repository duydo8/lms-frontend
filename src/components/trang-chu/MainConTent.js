import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MainConTent = () => {
    const cards = [
        { title: "Danh sách lớp", description: "Quản lý danh sách lớp", link: "/class-list" },
        { title: "Danh sách khoá học", description: "Quản lý danh sách khoá học" },
        { title: "Danh sách buổi học", description: "Quản lý danh sách buổi học" },
        { title: "Danh sách lịch học", description: "Quản lý danh sách lịch học" },
        { title: "Danh sách học viên", description: "Quản lý danh sách học viên" },
        { title: "Danh sách điểm", description: "Quản lý danh sách điểm" }
    ];
    return (
        <div className="d-flex flex-column bg-light">
            <div className="container py-5 flex-grow-1">
                <h1 className="fw-bold text-dark mb-4">
                    Welcome to <span className="text-warning">Eduzio Class</span>
                </h1>
                <div className="row g-4">
                    {cards.map((card, index) => (
                        <div key={index} className="col-md-6 col-lg-3">
                            <div className="card shadow-sm border-0 h-100">
                                <div className="card-body">
                                    <p className="text-muted small">Screen</p>
                                    <h5 className="card-title fw-bold">{card.title}</h5>
                                    <p className="card-text text-muted">{card.description}</p>
                                    <button className="btn btn-primary w-100 d-flex justify-content-between align-items-center">
                                        View <span>→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            

        </div>
    );
};

export default MainConTent;
