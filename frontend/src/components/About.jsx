import { useEffect } from "react";
import { Button } from "react-bootstrap";

const About = () => {
    useEffect(() => {
        document.title = "About";
    }, []);

    const stats = [
        { number: "10,000+", label: "Students Enrolled" },
        { number: "500+", label: "Courses Available" },
        { number: "50+", label: "Expert Instructors" },
        { number: "95%", label: "Success Rate" },
    ];

    const features = [
        {
            icon: "🎓",
            title: "Expert-Led Courses",
            description:
                "Learn from industry professionals with years of real-world experience in their respective fields.",
        },
        {
            icon: "🚀",
            title: "Hands-On Projects",
            description:
                "Apply your knowledge through practical projects that build your portfolio and showcase your skills.",
        },
        {
            icon: "⚡",
            title: "Flexible Learning",
            description:
                "Study at your own pace with 24/7 access to course materials and lifetime updates.",
        },
        {
            icon: "🏆",
            title: "Industry Recognition",
            description:
                "Earn certificates that are recognized by top employers and enhance your career prospects.",
        },
    ];

    const team = [
        {
            name: "Sarah Johnson",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
            description:
                "Former Google engineer with 15+ years in tech education.",
        },
        {
            name: "Michael Chen",
            role: "Head of Curriculum",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            description:
                "PhD in Computer Science, published author of 3 programming books.",
        },
        {
            name: "Emily Rodriguez",
            role: "Student Success Manager",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
            description:
                "Dedicated to ensuring every student achieves their learning goals.",
        },
    ];

    return (
        <div className="about-page mb-5">
            {/* Hero Section */}
            <section className="bg-dark text-white py-5 border rounded-top-3 px-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold mb-4">
                                About CourseHub
                            </h1>
                            <p className="lead mb-4">
                                Empowering learners worldwide with cutting-edge
                                courses, expert instruction, and hands-on
                                experience. Join thousands of students who have
                                transformed their careers through our
                                comprehensive learning platform.
                            </p>
                            <Button
                                href="/add-course"
                                variant="light"
                                size="lg"
                            >
                                Start Your Journey
                            </Button>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="img-fluid rounded shadow d-flex align-items-center justify-content-center text-white"
                                style={{
                                    height: "400px",
                                    background:
                                        "linear-gradient(135deg, #FFFFFF 0%, #000000 100%)",
                                    fontSize: "1.2rem",
                                }}
                            >
                                <img
                                    src="/picture2.webp"
                                    className="w-auto"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-5 bg-light rounded-bottom-3">
                <div className="container">
                    <div className="row text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="h2 fw-bold text-dark">
                                    {stat.number}
                                </div>
                                <p className="text-muted">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="display-5 fw-bold mb-4">
                                Our Mission
                            </h2>
                            <p className="lead text-muted mb-5">
                                We believe that quality education should be
                                accessible to everyone, everywhere. Our mission
                                is to democratize learning by providing
                                world-class courses that bridge the gap between
                                academic knowledge and industry requirements.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <h3 className="h4 fw-bold text-dark mb-3">
                                        Our Vision
                                    </h3>
                                    <p className="text-muted">
                                        To become the worlds leading platform
                                        for practical, industry-relevant
                                        education that empowers individuals to
                                        achieve their career aspirations and
                                        drive innovation in their fields.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <h3 className="h4 fw-bold text-dark mb-3">
                                        Our Values
                                    </h3>
                                    <ul className="text-muted mb-0">
                                        <li>
                                            Excellence in education and student
                                            experience
                                        </li>
                                        <li>
                                            Innovation in learning methodologies
                                        </li>
                                        <li>
                                            Inclusivity and accessibility for
                                            all learners
                                        </li>
                                        <li>
                                            Integrity in our partnerships and
                                            practices
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-5 bg-light rounded-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <h2 className="display-5 fw-bold">
                                Why Choose Us?
                            </h2>
                            <p className="lead text-muted">
                                Discover what makes our platform the preferred
                                choice for ambitious learners worldwide.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        {features.map((feature, index) => (
                            <div key={index} className="col-lg-6 col-md-6 mb-4">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <span className="fs-1 me-3">
                                                {feature.icon}
                                            </span>
                                            <h4 className="fw-bold mb-0">
                                                {feature.title}
                                            </h4>
                                        </div>
                                        <p className="text-muted mb-0">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <h2 className="display-5 fw-bold">Meet Our Team</h2>
                            <p className="lead text-muted">
                                The passionate educators and innovators behind
                                your learning journey.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        {team.map((member, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="card border-0 shadow-sm text-center">
                                    <div className="card-body p-4">
                                        <div
                                            className="rounded-circle mb-3 d-flex align-items-center justify-content-center text-white fw-bold"
                                            style={{
                                                width: "120px",
                                                height: "120px",
                                                background:
                                                    index === 0
                                                        ? "#e91e63"
                                                        : index === 1
                                                        ? "#2196f3"
                                                        : "#4caf50",
                                                fontSize: "2rem",
                                                margin: "0 auto",
                                            }}
                                        >
                                            {member.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </div>
                                        <h5 className="fw-bold">
                                            {member.name}
                                        </h5>
                                        <p className="text-dark fw-semibold">
                                            {member.role}
                                        </p>
                                        <p className="text-muted small">
                                            {member.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5 bg-dark text-white rounded-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="display-5 fw-bold mb-4">
                                Ready to Start Learning?
                            </h2>
                            <p className="lead mb-4">
                                Join thousands of successful students who have
                                transformed their careers with our comprehensive
                                courses and expert guidance.
                            </p>
                            <div className="d-grid d-md-flex justify-content-md-center gap-3">
                                <Button
                                    href="/view-courses"
                                    variant="light"
                                    size="lg"
                                >
                                    Browse Courses
                                </Button>
                                <Button
                                    href="/contact"
                                    variant="outline-light"
                                    size="lg"
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
