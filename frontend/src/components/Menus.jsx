import { BsHouse, BsGrid, BsPeople } from "react-icons/bs";
import { FaBookBookmark } from "react-icons/fa6";
import { SiBookstack } from "react-icons/si";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Menus = () => {
  const linkClass = ({ isActive }) =>
    "nav-link d-flex align-items-center " +
    (isActive ? "active" : "link-body-emphasis");

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary border-end fixed-top"
      style={{ width: "280px", height: "100vh", marginTop: "67px" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" className={linkClass}>
            <BsHouse className="me-2" size={16} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-course" className={linkClass}>
            <FaBookBookmark className="me-2" size={16} />
            Add Course
          </NavLink>
        </li>
        <li>
          <NavLink to="/view-courses" className={linkClass}>
            <SiBookstack className="me-2" size={16} />
            View Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClass}>
            <BsGrid className="me-2" size={16} />
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClass}>
            <BsPeople className="me-2" size={16} />
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menus;
