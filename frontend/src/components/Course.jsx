import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Course = ({ course, deleteCourse }) => {
    return (
        <Card
            className="card shadow-sm"
            style={{ width: "17rem", padding: "0px" }}
        >
            <div className="d-flex m-auto h-50 p-2 align-items-center">
                <Card.Img
                    variant="top"
                    src={course.imageLink}
                    style={{
                        width: "10rem",
                        alignItems: "center",
                    }}
                />
            </div>

            <div className="card-body h-40">
                <div className="d-flex align-items-center mb-2">
                    <span className="badge bg-secondary">{course.author}</span>
                </div>
                <h3 className="h5 card-title">{course.title}</h3>
                <p className="card-text text-muted">{course.description}</p>
                <div className="d-flex justify-content-start">
                    <Button
                        variant="dark"
                        onClick={() => deleteCourse(course.id)}
                    >
                        {" "}
                        Delete{" "}
                    </Button>
                    <Button variant="outline-dark" className="ms-2">
                        Update
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default Course;
