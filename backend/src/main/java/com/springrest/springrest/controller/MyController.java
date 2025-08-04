package com.springrest.springrest.controller;

import org.springframework.web.bind.annotation.*;

import com.springrest.springrest.dao.CourseCommentDao;
import com.springrest.springrest.entities.Course;
import com.springrest.springrest.entities.CourseComment;
import com.springrest.springrest.services.CourseService;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MyController {

    @Autowired
    private CourseService courseService;

    @Autowired
    private CourseCommentDao commentDao;

    // ---------------- Home ----------------
    @GetMapping("/home")
    public String home() {
        return "This is my home page";
    }

    // ---------------- Course APIs ----------------
    @GetMapping("/courses")
    public List<Course> getCourses() {
        return courseService.getCourses();
    }

    @GetMapping("/courses/{courseId}")
    public ResponseEntity<?> getCourse(@PathVariable Long courseId) {
        Course course = courseService.getCourse(courseId);
        if (course == null) {
            return ResponseEntity.status(404).body("Course not found");
        }
        return ResponseEntity.ok(course);
    }

    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course) {
        return courseService.addCourse(course);
    }

    @PutMapping("/courses/{courseId}")
    public ResponseEntity<?> updateCourse(@PathVariable Long courseId, @RequestBody Course updatedCourse) {
        Course course = courseService.getCourse(courseId);
        if (course == null) {
            return ResponseEntity.status(404).body("Course not found");
        }
        updatedCourse.setId(courseId);
        return ResponseEntity.ok(courseService.updateCourse(courseId, updatedCourse));
    }

    @PutMapping("/progress/{courseId}")
    public ResponseEntity<?> updateProgress(@PathVariable Long courseId, @RequestBody Course updatedCourse) {
        Course course = courseService.getCourse(courseId);
        if (course == null) {
            return ResponseEntity.status(404).body("Course not found");
        }
        updatedCourse.setId(courseId);
        return ResponseEntity.ok(courseService.updateProgress(courseId, updatedCourse));
    }

    @DeleteMapping("/courses/{courseId}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long courseId) {
        boolean deleted = courseService.deleteCourse(courseId);
        if (!deleted) {
            return ResponseEntity.status(404).body("Course not found");
        }
        return ResponseEntity.ok("Course deleted successfully");
    }

    @PostMapping("/rating/{courseId}")
    public ResponseEntity<?> addRating(@PathVariable Long courseId, @RequestBody double rating) {
        Course course = courseService.getCourse(courseId);
        if (course == null) {
            return ResponseEntity.status(404).body("Course not found");
        }
        return ResponseEntity.ok(courseService.addRating(courseId, rating));
    }

    // ✅ Like a course
    @PostMapping("/courses/{courseId}/like")
    public ResponseEntity<?> likeCourse(@PathVariable Long courseId) {
        Course course = courseService.getCourse(courseId);
        if (course == null) {
            return ResponseEntity.status(404).body("Course not found");
        }
        course.setLikes(course.getLikes() + 1);
        courseService.addCourse(course);
        return ResponseEntity.ok(course.getLikes());
    }

    // ✅ Unlike a course
    @DeleteMapping("/courses/{courseId}/unlike")
    public ResponseEntity<?> unlikeCourse(@PathVariable Long courseId) {
        Course course = courseService.getCourse(courseId);
        if (course == null) {
            return ResponseEntity.status(404).body("Course not found");
        }
        if (course.getLikes() > 0) {
            course.setLikes(course.getLikes() - 1);
            courseService.addCourse(course);
        }
        return ResponseEntity.ok(course.getLikes());
    }

    // ✅ Get like count
    @GetMapping("/courses/{courseId}/likes")
    public ResponseEntity<?> getLikeCount(@PathVariable Long courseId) {
        Course course = courseService.getCourse(courseId);
        if (course == null) {
            return ResponseEntity.status(404).body("Course not found");
        }
        return ResponseEntity.ok(course.getLikes());
    }

    // ---------------- Comment APIs ----------------
    @PostMapping("/courses/{courseId}/comment")
    public ResponseEntity<?> commentCourse(@PathVariable Long courseId, @RequestBody CourseComment courseComment) {
        Course course = courseService.getCourse(courseId);
        if (course == null) {
            return ResponseEntity.status(404).body("Course not found");
        }
        courseComment.setCreatedAt(LocalDateTime.now());
        courseComment.setCourse(course);
        commentDao.save(courseComment);
        return ResponseEntity.ok("Comment added successfully");
    }

    @GetMapping("/courses/{courseId}/comments")
    public ResponseEntity<?> getComments(@PathVariable Long courseId) {
        Course course = courseService.getCourse(courseId);
        if (course == null) {
            return ResponseEntity.status(404).body("Course not found");
        }
        return ResponseEntity.ok(commentDao.findByCourse_Id(courseId));
    }
}
