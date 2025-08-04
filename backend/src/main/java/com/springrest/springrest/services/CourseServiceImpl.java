package com.springrest.springrest.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseDao courseDao;

    @Override
    public List<Course> getCourses() {
        return courseDao.findAll();
    }

    @Override
    public Course getCourse(long courseId) {
        return courseDao.findById(courseId).orElse(null);
    }

    @Override
    public Course addCourse(Course course) {
        try {
            return courseDao.save(course);
        } catch (Exception e) {
            System.out.println("Error saving course: " + e.getMessage());
            return null;
        }
    }

    @Override
    public Course updateCourse(long courseId, Course course) {
        Optional<Course> existingCourseOpt = courseDao.findById(courseId);
        if (existingCourseOpt.isPresent()) {
            Course existingCourse = existingCourseOpt.get();
            existingCourse.setTitle(course.getTitle());
            existingCourse.setAuthor(course.getAuthor());
            existingCourse.setDescription(course.getDescription());
            existingCourse.setTags(course.getTags());
            existingCourse.setImageLink(course.getImageLink());
            existingCourse.setVideoLink(course.getVideoLink());
            existingCourse.setTags(course.getTags());
            return courseDao.save(existingCourse);
        } else {
            course.setId(courseId);
            return courseDao.save(course);
        }
    }

    @Override
    public Course updateProgress(long courseId, Course course) {
        Optional<Course> existingCourseOpt = courseDao.findById(courseId);
        if (existingCourseOpt.isPresent()) {
            Course existingCourse = existingCourseOpt.get();
            existingCourse.setLikes(course.getLikes());
            existingCourse.setRating(course.getRating());
            existingCourse.setComments(course.getComments());
            return courseDao.save(existingCourse);
        } else {
            course.setId(courseId);
            return courseDao.save(course);
        }
    }

    @Override
    public boolean deleteCourse(long courseId) {
        Optional<Course> courseOpt = courseDao.findById(courseId);
        if (courseOpt.isPresent()) {
            courseDao.delete(courseOpt.get());
            return true;
        } else {
            throw new RuntimeException("Course not found with ID: " + courseId);
        }
    }

    @Override
    public Course addRating(long courseId, double rating) {
        Optional<Course> existingCourseOpt = courseDao.findById(courseId);
        if (existingCourseOpt.isPresent()) {
            Course existingCourse = existingCourseOpt.get();
            existingCourse.setRating(rating);
            return courseDao.save(existingCourse);
        } else {
            throw new RuntimeException("Course not found with ID: " + courseId);
        }
    }

    @Override
    public Course addLikes(long courseId, long likes) {
        Optional<Course> existingCourseOpt = courseDao.findById(courseId);
        if (existingCourseOpt.isPresent()) {
            Course existingCourse = existingCourseOpt.get();
            existingCourse.setRating(likes);
            return courseDao.save(existingCourse);
        } else {
            throw new RuntimeException("Course not found with ID: " + courseId);
        }
    }
}
