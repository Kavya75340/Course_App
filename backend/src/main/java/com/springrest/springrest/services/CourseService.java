package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.Course;

public interface CourseService {

    public List<Course> getCourses();

    public Course getCourse(long courseId);

    public Course addCourse(Course course);

    public Course addRating(long courseId, double rating);

    public Course addLikes(long courseId, long likes);

    public Course updateCourse(long courseId, Course course);

    public Course updateProgress(long courseId, Course course);
    // public Course updateCourse(Course course);

    public boolean deleteCourse(long courseId);

}
