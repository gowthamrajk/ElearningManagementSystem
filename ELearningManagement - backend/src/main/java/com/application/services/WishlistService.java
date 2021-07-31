package com.application.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.application.model.Wishlist;
import com.application.repository.WishlistRepository;

@Service
public class WishlistService 
{
	@Autowired
	private WishlistRepository wishlistRepo;
	
	public Wishlist saveToWishlist(Wishlist course)
	{
		return wishlistRepo.save(course);
	}
	
	public Wishlist addToWishlist(Wishlist course)
	{
		return wishlistRepo.save(course);
	}
	
	public List<Wishlist> getAllLikedCourses()
	{
		return (List<Wishlist>)wishlistRepo.findAll();
	}
	
	public Wishlist fetchCourseByCoursename(String coursename)
	{
		return wishlistRepo.findByCoursename(coursename);
	}
	
	public Wishlist fetchCourseByCourseid(String courseid)
	{
		return wishlistRepo.findByCourseid(courseid);
	}
	
	public List<Wishlist> fetchByInstructorname(String instructorname)
	{
		return (List<Wishlist>)wishlistRepo.findByInstructorname(instructorname);
	}
	
	public List<Wishlist> fetchByInstructorinstitution(String instructorinstitution)
	{
		return (List<Wishlist>)wishlistRepo.findByInstructorinstitution(instructorinstitution);
	}
	
	public List<Wishlist> fetchByLikeduser(String likeduser)
	{
		return (List<Wishlist>)wishlistRepo.findByLikeduser(likeduser);
	}
	
	public List<Wishlist> fetchByLikedusertype(String likedusertype)
	{
		return (List<Wishlist>)wishlistRepo.findByLikedusertype(likedusertype);
	}
	
	public List<Wishlist> fetchByCoursetype(String coursetype)
	{
		return (List<Wishlist>)wishlistRepo.findByCoursetype(coursetype);
	}
	
	public List<Wishlist> fetchBySkilllevel(String skilllevel)
	{
		return (List<Wishlist>)wishlistRepo.findBySkilllevel(skilllevel);
	}
	
	public List<Wishlist> fetchByLanguage(String language)
	{
		return (List<Wishlist>)wishlistRepo.findByLanguage(language);
	}
	
}