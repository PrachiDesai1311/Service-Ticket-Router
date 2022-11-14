package com.TicketRouter.model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "customer",
uniqueConstraints = {
		@UniqueConstraint(columnNames = "username"),
		@UniqueConstraint(columnNames = "email")
})
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotBlank
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
	private String alias;

	@NotBlank
	@Size(max = 30)
	private String designation;

	@NotBlank
	@Size(max = 30)
	private String department;

	@NotBlank
	@Size(max = 30)
	@Email
	private String email;

	@NotBlank
	@Size(max = 30)
	private String mobile;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Customer() {
	}

	public Customer(String username, String password,String name,String alias,String designation, String department,String email, String mobile) {
		this.username = username;
		this.password = password;
		this.name=name;
		this.alias=alias;
		this.designation=designation;
		this.department=department;
		this.email=email;
		this.mobile=mobile;

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
