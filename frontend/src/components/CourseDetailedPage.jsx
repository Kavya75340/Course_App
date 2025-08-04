import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Star, Play } from "lucide-react";
import { FaStarHalfAlt } from "react-icons/fa";
import RatingStars from "./RatingStars";

export default function CourseDetailedPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const course = location.state?.course;
    const handleclick = () => {
        navigate("/course-view", { state: { course } });
        console.log(course);
    };
    return (
        <div className="min-vh-100 bg-dark font-sans">
            <div className="bg-gradient text-white py-5 px-3">
                <div className="container">
                    <div className="row align-items-start gy-4">
                        <div className="col-md-7 col-lg-8">
                            <div className="d-flex gap-2 mb-3">
                                {(course.tags || []).map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="badge bg-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="display-5 fw-bold">
                                {course.title}
                            </h1>
                            <div className="d-flex align-items-center gap-3 small">
                                <div className="d-flex align-items-center">
                                    <RatingStars rating={course.rating} />
                                    <span className="ms-1 fw-medium">
                                        {course.rating}
                                    </span>
                                </div>
                            </div>
                            <p className="text-white-50 mt-2">
                                Created by {course.author}
                            </p>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="bg-white rounded shadow overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                                    alt="Course Thumbnail"
                                    className="img-fluid object-fit-cover"
                                    style={{
                                        height: "16rem",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="bg-white rounded shadow-sm p-4 mb-4">
                            <h2 className="h5 border-bottom pb-2 mb-3">
                                Course Overview
                            </h2>
                            <p>{course.description}</p>
                        </div>

                        <div className="bg-white rounded shadow-sm p-4">
                            <h2 className="h5 border-bottom pb-2 mb-3">
                                Student Comments
                            </h2>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="d-flex align-items-center">
                                    <span className="material-symbols-outlined text-warning me-1">
                                        <RatingStars rating={course.rating} />
                                    </span>
                                    <span className="fw-semibold">
                                        {course.rating} course rating
                                    </span>
                                    <span className="mx-2 text-muted">•</span>
                                    <span className="text-muted">
                                        2,845 ratings
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="sticky-top" style={{ top: "1rem" }}>
                            <div className="bg-white rounded shadow overflow-hidden">
                                <div
                                    className="position-relative bg-dark"
                                    style={{ height: "12rem" }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4"
                                        className="w-100 h-100 object-fit-cover opacity-50"
                                        alt="Course preview"
                                    />
                                    <button
                                        className="position-absolute top-50 start-50 translate-middle btn btn-light rounded-circle"
                                        style={{
                                            width: "3.5rem",
                                            height: "3.5rem",
                                        }}
                                    >
                                        <span className="material-symbols-outlined text-primary fs-3">
                                            <Play
                                                size={28}
                                                className="text-primary"
                                            />
                                        </span>
                                    </button>
                                    <div className="position-absolute bottom-0 end-0 bg-dark bg-opacity-75 text-white small px-2 py-1">
                                        Preview this course
                                    </div>
                                </div>

                                <div className="p-4">
                                    <div className="d-flex justify-content-between align-items-baseline mb-2">
                                        <div>
                                            <span className="fs-4 fw-bold">
                                                $49.99
                                            </span>
                                            <span className="text-muted text-decoration-line-through ms-2">
                                                $199.99
                                            </span>
                                        </div>
                                        <span className="badge bg-warning text-dark">
                                            75% off
                                        </span>
                                    </div>
                                    <div className="text-danger small d-flex align-items-center mb-3">
                                        <span className="material-symbols-outlined me-1 small">
                                            schedule
                                        </span>
                                        3 days left at this price!
                                    </div>
                                    <button
                                        className="btn btn-primary w-100 mb-2"
                                        onClick={handleclick}
                                    >
                                        Enroll Now
                                    </button>
                                    <p className="text-center text-muted small mb-3">
                                        30-Day Money-Back Guarantee
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
