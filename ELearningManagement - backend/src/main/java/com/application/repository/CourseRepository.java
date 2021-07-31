package com.application.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.application.model.Course;

public interface CourseRepository extends CrudRepository<Course, Integer>
{    
    public Course findByCoursename(String coursename);
	
	public Course findByCourseid(String courseid);
	
	public List<Course> findByInstructorname(String instructorname);
	
	public List<Course> findByInstructorinstitution(String instructorinstitution);
	
    public List<Course> findByEnrolleddate(String enrolleddate);
	
	public List<Course> findByCoursetype(String coursetype);
	
	public List<Course> findByYoutubeurl(String youtubeurl);
	
	public List<Course> findByWebsiteurl(String websiteurl);
	
    public List<Course> findBySkilllevel(String skilllevel);
	
	public List<Course> findByLanguage(String language);
	
	@Transactional
	@Modifying
	@Query(value = "update course set enrolledcount = ?1 where coursename = ?2",nativeQuery = true)
	public void updateEnrolledcount(int enrolledcount, String coursename);
	
}