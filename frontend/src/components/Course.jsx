import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import RatingStars from "./RatingStars";
import UpdateCourse from "./UpdateCourse";
const Course = ({ course, deleteCourse }) => {
    const navigate = useNavigate();
    const handleCourseview = () => {
        navigate(`/course-detailed`, { state: { course } });
    };
    const handleCourseUpdate = (id) => {
        navigate(`/update-course`, { state: { id } });
    };
    return (
        <Card
            className="card shadow-sm"
            style={{ width: "17rem", padding: "0px" }}
        >
            <Card.Img
                variant="top"
                src={course.imageLink}
                style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.25rem",
                    borderTopRightRadius: "0.25rem",
                }}
                onClick={handleCourseview}
            />

            <div className="card-body h-40">
                <div className="d-flex align-items-center mb-2">
                    <span className="badge bg-secondary">{course.author}</span>
                </div>
                <h3 className="h5 card-title">{course.title}</h3>

                <p className="card-text text-muted d-flex gap-2 align-items-center">
                    <RatingStars rating={course.rating} />
                    <span className="fw-semibold">{course.rating} ratings</span>
                </p>
                <div className="d-flex justify-content-start">
                    <Button
                        variant="dark"
                        onClick={() => deleteCourse(course.id)}
                    >
                        {" "}
                        Delete{" "}
                    </Button>
                    <Button
                        variant="outline-dark"
                        className="ms-2"
                        onClick={() => handleCourseUpdate(course.id)}
                    >
                        Update
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default Course;
