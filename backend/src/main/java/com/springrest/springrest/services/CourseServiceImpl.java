package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseDao courseDao;

    // List<Course> list;

    public CourseServiceImpl() {
        // list = new ArrayList<>();
        // list.add(new Course(144, "Java Cource", "this is for Beginers"));
        // list.add(new Course(145, "Spring Cource", "this is for Beginers"));
        // list.add(new Course(146, "Python Cource", "this is for Beginers"));
        // list.add(new Course(1496, "C++ Cource", "this is for Beginers"));
    }

    @Override
    public List<Course> getCourses() {
        return courseDao.findAll();
    }

    @Override
    public Course getCourse(long courseId) {
        // Course c = null;
        // for (Course course : list) {
        // if (course.getId() == courseId) {
        // c = course;
        // break;
        // }
        // }
        return courseDao.getOne(courseId);

    }

    @Override
    public Course addCourse(Course course) {
        // list.add(course);
        courseDao.save(course);
        return course;
    }

    // public Course updateCourse(long courseId, Course course) {
    // for (Course courses : list) {
    // if (courses.getId() == courseId) {
    // courses.setTitle(course.getTitle());
    // courses.setDescription(course.getDescription());
    // return courses;
    // }
    // }
    // courseDao.save(course);
    // return null;
    // }
    public Course updateCourse(Course course) {
        courseDao.save(course);
        return course;
    }

    @Override
    public boolean deleteCourse(long courseId) {
        Course course = courseDao.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found with ID: " + courseId));
        courseDao.delete(course);
        return true;
    }
}
