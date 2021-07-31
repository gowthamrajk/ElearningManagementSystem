package com.application.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.application.model.Wishlist;

public interface WishlistRepository extends CrudRepository<Wishlist, Integer>
{
    public Wishlist findByCoursename(String coursename);
	
	public Wishlist findByCourseid(String courseid);
	
	public List<Wishlist> findByLikedusertype(String likedusertype);
	
	public List<Wishlist> findByLikeduser(String likeduser);
	
	public List<Wishlist> findByInstructorname(String instructorname);
	
	public List<Wishlist> findByInstructorinstitution(String instructorinstitution);
	
	public List<Wishlist> findByCoursetype(String coursetype);
	
    public List<Wishlist> findBySkilllevel(String skilllevel);
	
	public List<Wishlist> findByLanguage(String language);
}