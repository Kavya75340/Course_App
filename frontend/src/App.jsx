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
                            path="/view-courses"
                            element={<AllCourses></AllCourses>}
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
