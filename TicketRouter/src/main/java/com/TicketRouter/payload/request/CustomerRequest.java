package com.TicketRouter.payload.request;

import javax.validation.constraints.*;

public class CustomerRequest {
	@NotBlank
	@Size(max = 20)
	private String username;

	@NotBlank
	@Size(max = 120)
	private String password;

	@NotBlank
	@Size(max = 120)
	private String name;

	@NotBlank
	@Size(max = 120)
	private String alias;

	@NotBlank
	@Size(max = 120)
	private String designation;

	@NotBlank
	@Size(max = 120)
	private String department;

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@NotBlank
	@Size(max = 50)
	private String mobile;


	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getAlias() {
		return alias;
	}


	public void setAlias(String alias) {
		this.alias = alias;
	}


	public String getDesignation() {
		return designation;
	}


	public void setDesignation(String designation) {
		this.designation = designation;
	}


	public String getDepartment() {
		return department;
	}


	public void setDepartment(String department) {
		this.department = department;
	}
	public String getMobile() 
	{
		return mobile;
	}
	public void setMobile(String mobile)
	{
		this.mobile = mobile;
	}

}
