package com.springrest.springrest.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;
    private String author;
    private String description;
    private String imageLink;
    private String videoLink;
    private double rating;
    private long likes;

    @ElementCollection
    private List<String> tags;

    // @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval =
    // true)
    // private List<CourseLike> likes = new ArrayList<>();

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CourseComment> comments = new ArrayList<>();

    public Course() {
    }

    public Course(long id, String title, String description, List<String> tags, String imageLink, String videoLink) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageLink = imageLink;
        this.videoLink = videoLink;
        this.tags = tags;
        this.rating = 0;
        this.likes = 0;
    }

    public long getLikes() {
        return likes;
    }

    public void setLikes(long likes) {
        this.likes = likes;
    }

    // Getters and Setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public String getVideoLink() {
        return videoLink;
    }

    public void setVideoLink(String videoLink) {
        this.videoLink = videoLink;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public List<CourseComment> getComments() {
        return comments;
    }

    public void setComments(List<CourseComment> comments) {
        this.comments = comments;
    }

    @Override
    public String toString() {
        return "Course [id=" + id + ", title=" + title + ", description=" + description + "]";
    }
}
