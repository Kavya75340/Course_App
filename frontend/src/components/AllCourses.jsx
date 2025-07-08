import { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Spinner } from "reactstrap";
import dummyCourses from "../data/dummyCourse";
import { Form } from "react-bootstrap";

const AllCourses = () => {
    useEffect(() => {
        document.title = "View Courses";
    }, []);

    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [courses, setCourses] = useState([]);

    const getAllCoursesFromServer = () => {
        setLoading(true);
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
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
    };

    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    const deleteCourseById = (id) => {
        setLoading(true);
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                console.log(response.data);
                toast.success("Course deleted successfully!", {
                    position: "bottom-center",
                });
                setCourses((prevCourses) =>
                    prevCourses.filter((c) => c.id !== id)
                );
                setLoading(false);
            },
            (error) => {
                console.log(error);
                setLoading(false);
                toast.error("Error deleting course");
            }
        );
    };

    // 🔍 Filter courses by title
    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>All Courses</h1>
            <Form className="d-flex mb-5" onSubmit={(e) => e.preventDefault()}>
                <Form.Control
                    type="search"
                    placeholder="Search course"
                    className="me-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form>

            <div className="d-flex gap-3 flex-wrap">
                {loading ? (
                    <div className="text-center">
                        <Spinner color="primary" />
                        <p>Loading Courses...</p>
                    </div>
                ) : filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                        <Course
                            key={index}
                            course={course}
                            deleteCourse={deleteCourseById}
                        />
                    ))
                ) : (
                    <p>No Courses Found</p>
                )}
            </div>
        </div>
    );
};

export default AllCourses;
