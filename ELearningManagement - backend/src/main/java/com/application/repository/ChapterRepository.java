package com.application.repository;

import org.springframework.data.repository.CrudRepository;
import java.util.List;
import com.application.model.Chapter;

public interface ChapterRepository extends CrudRepository<Chapter, Integer>
{
	public List<Chapter> findByCoursename(String Coursename);
	
}