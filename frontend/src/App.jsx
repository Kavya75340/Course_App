import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllCourses from "./components/AllCourses.jsx";
import AddCourse from "./components/AddCourse.jsx";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import CourseViewPage from "./components/CourseView.jsx";
import CourseDetailedPage from "./components/CourseDetailedPage.jsx";
import UpdateCourse from "./components/UpdateCourse.jsx";
// import CourseViewPage from "./components/CourseViewBootstrapCombined.jsx";

function App() {
    return (
        <>
            <Router>
                <ToastContainer />
                <Header />
                <div className="w-100 p-5">
                    <Routes>
                        <Route path="/" element={<Home />} exact />
                        <Route
                            path="/add-course"
                            element={<AddCourse></AddCourse>}
                            exact
                        />
                        <Route
                            path="/update-course"
                            element={<UpdateCourse />}
                            exact
                        />
                        <Route
                            path="/view-courses"
                            element={<AllCourses />}
                            exact
                        />
                        <Route
                            path="/course-view"
                            element={<CourseViewPage />}
                            exact
                        ></Route>
                        <Route
                            path="/course-detailed"
                            element={<CourseDetailedPage />}
                            exact
                        />
                        <Route path="/about" element={<About></About>} exact />
                        <Route
                            path="/contact"
                            element={<Contact></Contact>}
                            exact
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
