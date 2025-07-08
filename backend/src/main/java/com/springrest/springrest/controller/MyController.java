package com.springrest.springrest.controller;

import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Course;
import com.springrest.springrest.services.CourseService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MyController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/home")
    public String home() {
        return "this is my home page";
    }

    // Get the Course
    @GetMapping("/courses")
    public List<Course> getCourses() {
        return this.courseService.getCourses();
    }

    @GetMapping("/courses/{courseId}")
    public Course getCourse(@PathVariable String courseId) {
        return this.courseService.getCourse(Long.parseLong(courseId));
    }

    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course) {

        return this.courseService.addCourse(course);
    }

    // @PutMapping("/courses/{coursesId}")
    // public Course updateCourse(@PathVariable String coursesId, @RequestBody
    // Course course) {

    // return this.courseService.updateCourse(Long.parseLong(coursesId), course);
    // }
    @PutMapping("/courses")
    public Course updateCourse(@RequestBody Course course) {

        return this.courseService.updateCourse(course);
    }

    @DeleteMapping("/courses/{coursesId}")
    public boolean deleteCourse(@PathVariable String coursesId) {
        return this.courseService.deleteCourse(Long.parseLong(coursesId));
    }

}
