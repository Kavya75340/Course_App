import { Button } from "react-bootstrap";
import AddCourse from "./AddCourse";
import "./Style.css"; // Assuming custom Bootstrap styles

const Home = () => {
    return (
        <div id="webcrumbs">
            <div className="min-vh-100 bg-light">
                <section className="bg-dark text-white py-5 rounded-4">
                    <div className="container-xl ">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h1 className="display-4 fw-bold">
                                    Learn Without Limits
                                </h1>
                                <p className="lead">
                                    Access thousands of courses from world-class
                                    instructors and advance your career with
                                    industry-recognized certifications.
                                </p>
                                <div className="d-flex flex-column flex-sm-row gap-3">
                                    <Button
                                        href="/add-course"
                                        variant="light"
                                        size="lg"
                                    >
                                        Add Cource
                                    </Button>

                                    <Button
                                        href="/view-courses"
                                        variant="outline-light"
                                        size="lg"
                                    >
                                        Browse Courses
                                    </Button>
                                </div>
                            </div>
                            <div className="col-lg-6 position-relative">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Students learning"
                                    keywords="students, learning, education, classroom"
                                    className="img-fluid rounded shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-white">
                    <div className="container-xl">
                        <div className="text-center mb-4">
                            <h2 className="h3 fw-bold">Featured Courses</h2>
                            <p className="lead text-muted">
                                Discover our most popular courses designed to
                                boost your skills
                            </p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div className="col">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                        alt="Web Development"
                                        keywords="web development, coding, programming"
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-2">
                                            <span className="badge bg-primary">
                                                Web Development
                                            </span>
                                        </div>
                                        <h3 className="h5 card-title">
                                            Complete React.js Course
                                        </h3>
                                        <p className="card-text text-muted">
                                            Master React.js from basics to
                                            advanced concepts with hands-on
                                            projects
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Button
                                                href="/view-courses"
                                                variant="dark"
                                                size="md"
                                            >
                                                View Course
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                        alt="Data Science"
                                        keywords="data science, analytics, charts"
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-2">
                                            <span className="badge bg-success">
                                                Data Science
                                            </span>
                                        </div>
                                        <h3 className="h5 card-title">
                                            Python for Data Science
                                        </h3>
                                        <p className="card-text text-muted">
                                            Learn Python programming and data
                                            analysis with real-world projects
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Button
                                                href="/view-courses"
                                                variant="dark"
                                                size="md"
                                            >
                                                View Course
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                        alt="Digital Marketing"
                                        keywords="digital marketing, social media, advertising"
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-2">
                                            <span className="badge bg-purple">
                                                Marketing
                                            </span>
                                        </div>
                                        <h3 className="h5 card-title">
                                            Digital Marketing Mastery
                                        </h3>
                                        <p className="card-text text-muted">
                                            Complete guide to digital marketing
                                            strategies and tools
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Button
                                                href="/view-courses"
                                                variant="dark"
                                                size="md"
                                            >
                                                View Course
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-light">
                    <div className="container-xl">
                        <div className="text-center mb-4">
                            <h2 className="h3 fw-bold">Why Choose LearnHub?</h2>
                            <p className="lead text-muted">
                                Thousands of students trust us for their
                                learning journey
                            </p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            <div className="col">
                                <div className="card h-100 shadow-sm text-center">
                                    <div className="card-body">
                                        <div
                                            className="bg-dark-subtle rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                            style={{
                                                width: "4rem",
                                                height: "4rem",
                                            }}
                                        >
                                            <span className="material-icons text-dark fs-4">
                                                school
                                            </span>
                                        </div>
                                        <h3 className="h5 card-title">
                                            Expert Instructors
                                        </h3>
                                        <p className="card-text text-muted">
                                            Learn from industry professionals
                                            with years of experience
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-sm text-center">
                                    <div className="card-body">
                                        <div
                                            className="bg-success-subtle rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                            style={{
                                                width: "4rem",
                                                height: "4rem",
                                            }}
                                        >
                                            <span className="material-icons text-success fs-4">
                                                schedule
                                            </span>
                                        </div>
                                        <h3 className="h5 card-title">
                                            Flexible Learning
                                        </h3>
                                        <p className="card-text text-muted">
                                            Study at your own pace with lifetime
                                            access to courses
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-sm text-center">
                                    <div className="card-body">
                                        <div
                                            className="bg-purple-subtle rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                            style={{
                                                width: "4rem",
                                                height: "4rem",
                                            }}
                                        >
                                            <span className="material-icons text-purple fs-4">
                                                workspace_premium
                                            </span>
                                        </div>
                                        <h3 className="h5 card-title">
                                            Certificates
                                        </h3>
                                        <p className="card-text text-muted">
                                            Earn industry-recognized
                                            certificates upon completion
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-sm text-center">
                                    <div className="card-body">
                                        <div
                                            className="bg-warning-subtle rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                            style={{
                                                width: "4rem",
                                                height: "4rem",
                                            }}
                                        >
                                            <span className="material-icons text-warning fs-4">
                                                support_agent
                                            </span>
                                        </div>
                                        <h3 className="h5 card-title">
                                            24/7 Support
                                        </h3>
                                        <p className="card-text text-muted">
                                            Get help whenever you need it with
                                            our dedicated support team
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-white">
                    <div className="container-xl">
                        <div className="text-center mb-4">
                            <h2 className="h3 fw-bold">
                                What Our Students Say
                            </h2>
                            <p className="lead text-muted">
                                Real feedback from our learning community
                            </p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div className="col">
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <img
                                                src="https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzdHVkZW50fGVufDB8fHx8MTc1MDMxMzYwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                                                alt="Student"
                                                keywords="student, profile, woman"
                                                className="rounded-circle me-3"
                                                style={{
                                                    width: "3rem",
                                                    height: "3rem",
                                                }}
                                            />
                                            <div>
                                                <h4 className="h6 card-title">
                                                    Sarah Johnson
                                                </h4>
                                            </div>
                                        </div>
                                        <p className="card-text text-muted fst-italic">
                                            "The React course was amazing! I
                                            went from zero to building full
                                            applications in just 3 months."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <img
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
                                                alt="Student"
                                                keywords="student, profile, man"
                                                className="rounded-circle me-3"
                                                style={{
                                                    width: "3rem",
                                                    height: "3rem",
                                                }}
                                            />
                                            <div>
                                                <h4 className="h6 card-title">
                                                    Mike Chen
                                                </h4>
                                            </div>
                                        </div>
                                        <p className="card-text text-muted fst-italic">
                                            "Data Science course helped me
                                            transition into a new career. The
                                            projects were incredibly practical."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <img
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
                                                alt="Student"
                                                keywords="student, profile, woman"
                                                className="rounded-circle me-3"
                                                style={{
                                                    width: "3rem",
                                                    height: "3rem",
                                                }}
                                            />
                                            <div>
                                                <h4 className="h6 card-title">
                                                    Emily Davis
                                                </h4>
                                            </div>
                                        </div>
                                        <p className="card-text text-muted fst-italic">
                                            "Marketing course gave me the skills
                                            to grow my business. Highly
                                            recommend to entrepreneurs!"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-dark text-white rounded-4">
                    <div className="container-xl text-center ">
                        <h2 className="h3 fw-bold mb-3">
                            Ready to Start Learning?
                        </h2>
                        <p className="lead mb-4">
                            Join thousands of students and advance your career
                            today
                        </p>
                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                            <Button
                                href="/view-courses"
                                variant="light"
                                size="lg"
                            >
                                Browse All Courses
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Home;
