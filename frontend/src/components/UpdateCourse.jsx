import { useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Spinner, Label } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const UpdateCourse = () => {
    useEffect(() => {
        document.title = "Update Course";
    }, []);

    const location = useLocation();
    const id = location.state?.id;

    const [course, setCourse] = useState({
        title: "",
        author: "",
        tags: "",
        description: "",
        imageLink: "",
        videoLink: "",
        rating: 0,
        likes: [],
        comments: [],
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Load existing course data from backend
    useEffect(() => {
        if (id) {
            axios
                .get(`${base_url}/courses/${id}`)
                .then((res) => {
                    const courseData = res.data;
                    setCourse({
                        ...courseData,
                        tags: courseData.tags ? courseData.tags.join(", ") : "",
                        likes: courseData.likes || [],
                        comments: courseData.comments || [],
                    });
                })
                .catch((err) => {
                    console.error("Failed to load course:", err);
                    toast.error("Failed to load course data");
                });
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setCourse((prevCourse) => ({
            ...prevCourse,
            [id]: value,
        }));
    };

    const handleForm = (e) => {
        e.preventDefault();

        if (
            !course.title ||
            !course.author ||
            !course.description ||
            !course.imageLink ||
            !course.videoLink
        ) {
            toast.warn("Please fill out all fields");
            return;
        }

        const payload = {
            ...course,
            id, // keep ID for update
            tags: course.tags
                ? course.tags.split(",").map((tag) => tag.trim())
                : [],
            likes: course.likes || [],
            comments: course.comments || [],
        };

        updateDataToServer(id, payload);
    };

    const updateDataToServer = (id, data) => {
        setIsSubmitting(true);

        axios
            .put(`${base_url}/courses/${id}`, data)
            .then((response) => {
                toast.success("Course updated successfully");
                console.log(response.data);
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error(
                    "Update failed:",
                    error.response?.data || error.message
                );
                toast.error("Something went wrong while updating");
                setIsSubmitting(false);
            });
    };

    const clearForm = () => {
        setCourse({
            title: "",
            author: "",
            tags: "",
            description: "",
            imageLink: "",
            videoLink: "",
            rating: 0,
            likes: [],
            comments: [],
        });
    };

    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <div
                className="w-100 p-4 bg-white border rounded-4 shadow"
                style={{ maxWidth: "700px" }}
            >
                <h2 className="text-center mb-4 fw-semibold">Update Course</h2>
                <Form onSubmit={handleForm}>
                    <FormGroup className="mb-3">
                        <Label for="title" className="form-label fw-bold">
                            Title
                        </Label>
                        <Input
                            type="text"
                            id="title"
                            className="form-control"
                            placeholder="Enter course title"
                            value={course.title}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label for="author" className="form-label fw-bold">
                            Author
                        </Label>
                        <Input
                            type="text"
                            id="author"
                            className="form-control"
                            placeholder="Enter author's name"
                            value={course.author}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label for="tags" className="form-label fw-bold">
                            Tags
                        </Label>
                        <Input
                            type="text"
                            id="tags"
                            className="form-control"
                            placeholder="Enter course Tags eg. AI, Cloud, Web Development"
                            value={course.tags}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label for="description" className="form-label fw-bold">
                            Description
                        </Label>
                        <Input
                            type="textarea"
                            id="description"
                            className="form-control"
                            placeholder="Enter course description"
                            value={course.description}
                            onChange={handleInputChange}
                            style={{ height: "120px" }}
                        />
                    </FormGroup>

                    <FormGroup className="mb-4">
                        <Label for="imageLink" className="form-label fw-bold">
                            Image URL
                        </Label>
                        <Input
                            type="text"
                            id="imageLink"
                            className="form-control"
                            placeholder="Enter image URL"
                            value={course.imageLink}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup className="mb-4">
                        <Label for="videoLink" className="form-label fw-bold">
                            Video URL
                        </Label>
                        <Input
                            type="text"
                            id="videoLink"
                            className="form-control"
                            placeholder="Enter Video URL"
                            value={course.videoLink}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <div className="text-center">
                        <Button
                            type="submit"
                            variant="dark"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Spinner size="sm" /> Updating...
                                </>
                            ) : (
                                "Update Course"
                            )}
                        </Button>
                        <Button
                            type="button"
                            variant="outline-dark"
                            className="ms-3"
                            onClick={clearForm}
                        >
                            Clear
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default UpdateCourse;
