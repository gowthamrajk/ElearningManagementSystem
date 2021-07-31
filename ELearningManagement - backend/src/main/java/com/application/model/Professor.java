package com.application.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Professor 
{
	@Id
	private String email;
	private String professorname;
	private String professorid;
	private String degreecompleted;
	private String institutionname;
	private String department;
	private String experience;
	private String mobile;
	private String gender;
	private String password;
	private String status;
	
	public Professor() 
	{
		super();
	}

	public Professor(String email, String professorname, String professorid, String degreecompleted, String institutionname, String department, String experience, String mobile, String gender, String password, String status) 
	{
		super();
		this.email = email;
		this.professorname = professorname;
		this.professorid = professorid;
		this.degreecompleted = degreecompleted;
		this.institutionname = institutionname;
		this.department = department;
		this.experience = experience;
		this.mobile = mobile;
		this.gender = gender;
		this.password = password;
		this.status = status;
	}

	public String getEmail() 
	{
		return email;
	}

	public void setEmail(String email) 
	{
		this.email = email;
	}

	public String getProfessorname() 
	{
		return professorname;
	}

	public void setProfessorname(String professorname) 
	{
		this.professorname = professorname;
	}

	public String getProfessorid() 
	{
		return professorid;
	}

	public void setProfessorid(String professorid) 
	{
		this.professorid = professorid;
	}

	public String getDegreecompleted() 
	{
		return degreecompleted;
	}

	public void setDegreecompleted(String degreecompleted) 
	{
		this.degreecompleted = degreecompleted;
	}

	public String getInstitutionname() 
	{
		return institutionname;
	}

	public void setInstitutionname(String institutionname) 
	{
		this.institutionname = institutionname;
	}

	public String getDepartment() 
	{
		return department;
	}

	public void setDepartment(String department) 
	{
		this.department = department;
	}

	public String getExperience() 
	{
		return experience;
	}

	public void setExperience(String experience) 
	{
		this.experience = experience;
	}

	public String getMobile() 
	{
		return mobile;
	}

	public void setMobile(String mobile) 
	{
		this.mobile = mobile;
	}

	public String getGender() 
	{
		return gender;
	}

	public void setGender(String gender) 
	{
		this.gender = gender;
	}

	public String getPassword() 
	{
		return password;
	}

	public void setPassword(String password) 
	{
		this.password = password;
	}
	
	public String getStatus() 
	{
		return status;
	}

	public void setStatus(String status) 
	{
		this.status = status;
	}
}