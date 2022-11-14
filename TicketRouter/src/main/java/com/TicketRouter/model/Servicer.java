package com.TicketRouter.model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "servicer",
uniqueConstraints = {
		@UniqueConstraint(columnNames = "username"),
		@UniqueConstraint(columnNames = "email")
})
public class Servicer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id; 

	@Size(max = 30)
	private String username;

	@NotBlank
	@Size(max = 30)
	private String password;

	@NotBlank
	@Size(max = 30)
	private String name;

	@NotBlank
	@Size(max = 30)
	@Email
	private String email;

	@NotBlank
	@Size(max = 30)
	private String mobile;

	@NotBlank
	@Size(max = 30)
	private String groupId;

	@NotBlank
	@Size(max = 30)
	private String location; 

	/*@NotBlank
  @Size(max = 50)
  private String status; */

	private int countOpen;

	public Servicer() {
	}

	public Servicer(String username, String password,String name,String email,String mobile, String groupId,String location) {
		this.username = username;
		this.password = password;
		this.name = name;
		this.email = email;
		this.mobile = mobile;
		this.groupId = groupId;
		this.location = location;
	}

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

	public String getGroupId() {
		return groupId;
	}

	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getMobile() 
	{
		return mobile;
	}
	public void setMobile(String mobile)
	{
		this.mobile = mobile;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getCountOpen() {
		return countOpen;
	}

	public void setCountOpen(int countOpen) {
		this.countOpen = countOpen;
	}

}