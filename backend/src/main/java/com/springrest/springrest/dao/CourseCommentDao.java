package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.springrest.springrest.entities.CourseComment;

public interface CourseCommentDao extends JpaRepository<CourseComment, Long> {
    List<CourseComment> findByCourse_Id(Long courseId);
}
