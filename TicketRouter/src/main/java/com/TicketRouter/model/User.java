package com.TicketRouter.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class User {

	@Size(max = 30)
	private String username;

	@NotBlank
	@Size(max = 30)
	private String password;

	private String userType;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserType() {
		return userType;
	}


	public void setUserType(String userType) {
		this.userType = userType;
	}
}
