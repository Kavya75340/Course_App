import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        document.title = "ContactMe";
    }, []);

    const contactMethods = [
        {
            icon: "📧",
            title: "Email Us",
            value: "support@courseapp.com",
            description: "Send us an email and we'll respond within 24 hours",
            link: "mailto:support@courseapp.com",
        },
        {
            icon: "📞",
            title: "Call Us",
            value: "+1-800-123-4567",
            description:
                "Speak with our support team Monday - Friday, 9AM - 6PM EST",
            link: "tel:+18001234567",
        },
        {
            icon: "💬",
            title: "Live Chat",
            value: "Available 24/7",
            description: "Get instant help through our live chat support",
            link: "#",
        },
    ];

    const socialLinks = [
        {
            name: "Twitter",
            icon: "🐦",
            url: "https://twitter.com/courseapp",
            color: "#1DA1F2",
        },
        {
            name: "LinkedIn",
            icon: "💼",
            url: "https://linkedin.com/company/courseapp",
            color: "#0077B5",
        },
        {
            name: "Instagram",
            icon: "📷",
            url: "https://instagram.com/courseapp",
            color: "#E4405F",
        },
        {
            name: "Facebook",
            icon: "📘",
            url: "https://facebook.com/courseapp",
            color: "#1877F2",
        },
    ];

    const officeLocations = [
        {
            city: "Agra",
            address: "123 Sanjay Palace, Agra 282001",
            icon: "🏢",
        },
        {
            city: "Aligarh",
            address: "456 MG Road, Aligarh 202001",
            icon: "🌉",
        },
        {
            city: "Bengaluru",
            address: "789 Education Lane, Bengaluru 560001",
            icon: "🏛",
        },
    ];

    return (
        <div className="contact-page bg-light min-vh-100">
            {/* Header Section */}
            <section className="bg-dark text-white py-5 rounded-top-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h1 className="display-4 fw-bold mb-4">
                                Contact Us
                            </h1>
                            <p className="lead mb-0">
                                Have questions about our courses or need
                                support? We're here to help! Reach out to us
                                through any of the methods below and our
                                friendly team will get back to you as soon as
                                possible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Contact Methods */}
            <section className="py-5 ">
                <div className="container rounded-4">
                    <div className="row">
                        {contactMethods.map((method, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="card border-0 shadow-sm h-100 text-center contact-card">
                                    <div className="card-body p-4">
                                        <div
                                            className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                backgroundColor: "#e3f2fd",
                                                fontSize: "2rem",
                                            }}
                                        >
                                            {method.icon}
                                        </div>
                                        <h4 className="fw-bold text-dark mb-3">
                                            {method.title}
                                        </h4>
                                        <h5 className="fw-semibold mb-3">
                                            <a
                                                href={method.link}
                                                className="text-decoration-none text-dark"
                                            >
                                                {method.value}
                                            </a>
                                        </h5>
                                        <p className="text-muted mb-0">
                                            {method.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bold text-dark mb-3">
                            Follow Us
                        </h2>
                        <p className="lead text-muted">
                            Stay connected and get the latest updates on
                            courses, tips, and learning resources
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="d-flex justify-content-center gap-4 flex-wrap">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="text-decoration-none"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            className="social-card d-flex flex-column align-items-center justify-content-center rounded-3 shadow-sm"
                                            style={{
                                                width: "120px",
                                                height: "120px",
                                                backgroundColor: "white",
                                                border: "2px solid #f8f9fa",
                                                transition: "all 0.3s ease",
                                            }}
                                        >
                                            <div
                                                className="rounded-circle d-flex align-items-center justify-content-center mb-2"
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                    backgroundColor:
                                                        social.color,
                                                    fontSize: "1.5rem",
                                                }}
                                            >
                                                {social.icon}
                                            </div>
                                            <span className="fw-semibold text-dark small">
                                                {social.name}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <section className="py-5 bg-light rounded-4">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bold text-dark mb-3">
                            Our Offices
                        </h2>
                        <p className="lead text-muted">
                            Visit us at any of our global locations
                        </p>
                    </div>

                    <div className="row">
                        {officeLocations.map((office, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body p-4 text-center">
                                        <div
                                            className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                backgroundColor: "#fff3e0",
                                                fontSize: "1.5rem",
                                            }}
                                        >
                                            {office.icon}
                                        </div>
                                        <h5 className="fw-bold text-dark mb-2">
                                            {office.city}
                                        </h5>
                                        <p className="text-muted mb-0">
                                            {office.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Hours */}
            <section className="py-5 bg-dark text-white rounded-bottom-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto text-center">
                            <h3 className="fw-bold mb-4">⏰ Business Hours</h3>
                            <div className="row text-start">
                                <div className="col-md-6">
                                    <h6 className="fw-semibold text-warning">
                                        Support Team
                                    </h6>
                                    <p className="mb-2">
                                        Monday - Friday: 9:00 AM - 6:00 PM EST
                                    </p>
                                    <p className="mb-4">
                                        Saturday: 10:00 AM - 4:00 PM EST
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="fw-semibold text-warning">
                                        Live Chat
                                    </h6>
                                    <p className="mb-2">Available 24/7</p>
                                    <p className="mb-4">
                                        Instant responses during business hours
                                    </p>
                                </div>
                            </div>
                            <div className="alert alert-light text-dark d-inline-block">
                                <strong>🚀 Pro Tip:</strong> For fastest
                                response, use live chat during business hours!
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .contact-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .contact-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
                }
                .social-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;
                    border-color: #007bff !important;
                }
                .min-vh-100 {
                    min-height: 100vh;
                }
            `}</style>
        </div>
    );
};

export default Contact;
