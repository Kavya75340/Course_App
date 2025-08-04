import { useState, useEffect } from "react";
import { ThumbsUp, Star, User, MessageCircle, Send } from "lucide-react";
import { useLocation } from "react-router-dom";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import dummyCourses from "../data/dummyCourse";
import RatingStars from "./RatingStars";

const Rating = ({ rating, onRatingChange }) => {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="d-flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    size={20}
                    className={
                        star <= (hovered || rating)
                            ? "text-warning"
                            : "text-muted"
                    }
                    fill={star <= (hovered || rating) ? "currentColor" : "none"}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => onRatingChange && onRatingChange(star)}
                    style={{ cursor: "pointer" }}
                />
            ))}
        </div>
    );
};

const useParams = (courseId) => {
    const [currentCourseId, setCurrentCourseId] = useState(courseId);
    return { id: currentCourseId, setCurrentCourseId };
};

const CourseViewPage = () => {
    const location = useLocation();
    const courseFromNav = location.state?.course;
    const { id: courseId, setCurrentCourseId } = useParams(courseFromNav.id);

    const [courses, setCourses] = useState([]); // ✅ all courses
    const [currentCourse, setCurrentCourse] = useState(null); // ✅ single course
    const [relatedCourses, setRelatedCourses] = useState([]);
    const [userReaction, setUserReaction] = useState(null);
    const [userName, setUserName] = useState("");
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState(0); // ✅ number only
    const [loading, setLoading] = useState(false);
    const [userRating, setUserRating] = useState(currentCourse?.rating || 0);

    // Fetch all courses
    useEffect(() => {
        setLoading(true);
        axios.get(`${base_url}/courses`).then(
            (response) => {
                setCourses([...dummyCourses, ...response.data]);
                setLoading(false);
                toast("Courses have been loaded", {
                    position: "bottom-center",
                });
            },
            (error) => {
                console.log(error);
                setLoading(false);
                toast.error("Something went wrong");
            }
        );
    }, []);

    // When courseId changes, set current course and related courses
    useEffect(() => {
        const foundCourse = courses.find((c) => c.id === courseId);
        if (foundCourse) {
            setCurrentCourse(foundCourse);
            setComments(foundCourse.comments || []);

            // ✅ Fetch like count
            axios
                .get(`${base_url}/courses/${foundCourse.id}/likes`)
                .then((res) => setLikes(res.data))
                .catch(() => setLikes(0));

            const related = courses
                .filter((c) => c.id !== courseId)
                .slice(0, 6);
            setRelatedCourses(related);
        }
    }, [courseId, courses]);

    const getEmbeddedUrl = (url) => {
        try {
            const parsed = new URL(url);
            if (parsed.hostname === "youtu.be") {
                return `https://www.youtube.com/embed/${parsed.pathname.slice(
                    1
                )}`;
            }
            if (
                parsed.hostname.includes("youtube.com") &&
                parsed.searchParams.has("v")
            ) {
                return `https://www.youtube.com/embed/${parsed.searchParams.get(
                    "v"
                )}`;
            }
            return url;
        } catch {
            return url;
        }
    };

    const handleRatingChange = async (ratingValue) => {
        setUserRating(ratingValue); // UI update instantly

        try {
            await axios.post(
                `${base_url}/rating/${currentCourse.id}`,
                ratingValue,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
            toast.success("Rating submitted successfully");
        } catch (error) {
            console.error(error);
            toast.error("Failed to submit rating");
        }
    };

    const handleLike = async () => {
        try {
            if (userReaction === "like") {
                await axios.delete(
                    `${base_url}/courses/${currentCourse.id}/unlike`
                );
                setUserReaction(null);
            } else {
                await axios.post(
                    `${base_url}/courses/${currentCourse.id}/like`
                );
                setUserReaction("like");
            }

            const res = await axios.get(
                `${base_url}/courses/${currentCourse.id}/likes`
            );
            setLikes(res.data); // res.data will be the like count
        } catch (error) {
            console.error(error);
            toast.error("Failed to update like");
        }
    };

    const handleAddComment = async () => {
        if (newComment.trim() && userName.trim()) {
            const comment = { userName, commentText: newComment };
            await axios.post(
                `${base_url}/courses/${currentCourse.id}/comment`,
                comment
            );
            setNewComment("");

            const response = await axios.get(
                `${base_url}/courses/${currentCourse.id}/comments`
            );
            setComments(response.data);
        } else {
            toast.warn("Please enter your name and comment");
        }
    };

    const handleCourseSelect = (id) => {
        setCurrentCourseId(id);
        setUserReaction(null);
    };

    if (loading || !currentCourse) {
        return (
            <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <div
                        className="spinner-border text-primary mb-3"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="text-muted">Loading course...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-vh-100 bg-light">
            <div className="container-fluid py-4">
                <div className="row g-3">
                    {/* Main Course Section */}
                    <div className="col-lg-8">
                        <div className="video-player rounded mb-4">
                            <iframe
                                src={getEmbeddedUrl(currentCourse.videoLink)}
                                title={currentCourse.title}
                                width="100%"
                                height="500px"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="card mb-4">
                            <div className="card-body">
                                <h2 className="card-title mb-3">
                                    {currentCourse.title}
                                </h2>
                                <div className="d-flex flex-wrap gap-2 mb-3">
                                    {(currentCourse.tags || []).map(
                                        (tag, idx) => (
                                            <span
                                                key={idx}
                                                className="badge bg-primary"
                                            >
                                                {tag}
                                            </span>
                                        )
                                    )}
                                </div>

                                <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                                    <div
                                        className="avatar-gradient rounded-circle d-flex align-items-center bg-secondary 	
--bs-secondary-bg justify-content-center me-3"
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                        }}
                                    >
                                        <User
                                            size={24}
                                            className="text-white"
                                        />
                                    </div>
                                    <div>
                                        <h6 className="mb-0">
                                            {currentCourse.author}
                                        </h6>
                                        <small className="text-muted">
                                            Course Instructor
                                        </small>
                                    </div>
                                </div>

                                {/* ✅ Like button with count */}
                                <div className="d-flex gap-2 mb-3 pb-3 border-bottom justify-content-between px-5">
                                    <button
                                        onClick={handleLike}
                                        className={`btn btn-outline-secondary d-flex align-items-center gap-2 like-btn ${
                                            userReaction === "like"
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <ThumbsUp size={16} />
                                        <span>{currentCourse.likes || 0}</span>
                                    </button>
                                    {/* Rating Section */}
                                    <div>
                                        <h6>Your Rating:</h6>
                                        <Rating
                                            rating={userRating}
                                            onRatingChange={handleRatingChange} // pass handler
                                        />
                                        <span className="ms-2 text-muted">
                                            {userRating.toFixed(1)} / 5
                                        </span>
                                    </div>
                                </div>

                                <h6>About this course</h6>
                                <p className="text-muted">
                                    {currentCourse.description}
                                </p>
                            </div>
                        </div>

                        {/* Comments */}
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center gap-2 mb-4">
                                    <MessageCircle
                                        size={20}
                                        className="text-muted"
                                    />
                                    <h5 className="mb-0">
                                        Comments ({comments.length})
                                    </h5>
                                </div>

                                {/* Add Comment */}
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        value={userName}
                                        onChange={(e) =>
                                            setUserName(e.target.value)
                                        }
                                        placeholder="Your name"
                                        className="form-control mb-2"
                                    />
                                    <textarea
                                        value={newComment}
                                        onChange={(e) =>
                                            setNewComment(e.target.value)
                                        }
                                        placeholder="Add a comment..."
                                        className="form-control mb-3"
                                        rows="3"
                                    />
                                    <button
                                        onClick={handleAddComment}
                                        disabled={
                                            !newComment.trim() ||
                                            !userName.trim()
                                        }
                                        className="btn btn-primary"
                                    >
                                        <Send size={16} /> Post
                                    </button>
                                </div>

                                {/* Comments List */}
                                {comments.map((comment) => (
                                    <div
                                        key={comment.id}
                                        className="mb-3 border-bottom pb-2"
                                    >
                                        <strong>{comment.userName}</strong>
                                        <p className="mb-0 text-muted">
                                            {comment.commentText}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Related Courses */}
                    <div className="col-lg-4">
                        {relatedCourses.map((relatedCourse) => (
                            <div
                                key={relatedCourse.id}
                                onClick={() =>
                                    handleCourseSelect(relatedCourse.id)
                                }
                                className="d-flex gap-2 p-2 rounded sidebar-item"
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    src={relatedCourse.imageLink}
                                    alt=""
                                    style={{
                                        width: "180px",
                                        height: "100px",
                                        objectFit: "cover",
                                        borderTopLeftRadius: "0.35rem",
                                        borderTopRightRadius: "0.35rem",
                                        borderBottomRightRadius: "0.35rem",
                                        borderBottomLeftRadius: "0.35rem",
                                    }}
                                />
                                <div>
                                    <h6 className="mb-1">
                                        {relatedCourse.title}
                                    </h6>
                                    <small>{relatedCourse.author}</small>
                                    <div>
                                        <RatingStars
                                            rating={relatedCourse.rating}
                                        />{" "}
                                        {relatedCourse.rating} rating |{" "}
                                        {relatedCourse.likes || 0} likes
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseViewPage;
