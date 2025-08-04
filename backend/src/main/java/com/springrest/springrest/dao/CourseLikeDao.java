package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.springrest.springrest.entities.CourseLike;

public interface CourseLikeDao extends JpaRepository<CourseLike, Long> {
    boolean existsByUserNameAndCourse_Id(String userName, Long courseId);

    void deleteByUserNameAndCourse_Id(String userName, Long courseId);

    long countByCourse_Id(Long courseId);
}
