package com.TicketRouter.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.TableGenerator;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Ticket {
	@TableGenerator(initialValue=10000,allocationSize=100, name = "ticket")
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private Long id;
	private String username;
	private String ipAddress;
	private String issueType;
	private String status;
	private String servicerUserName;
	private String userComment;
	private String servicerComment;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public String getIssueType() {
		return issueType;
	}

	public void setIssueType(String issueType) {
		this.issueType = issueType;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getServicerUserName() {
		return servicerUserName;
	}

	public void setServicerUserName(String servicerUserName) {
		this.servicerUserName = servicerUserName;
	}

	public String getUserComment() {
		return userComment;
	}

	public void setUserComment(String userComment) {
		this.userComment = userComment;
	}

	public String getServicerComment() {
		return servicerComment;
	}

	public void setServicerComment(String servicerComment) {
		this.servicerComment = servicerComment;
	}
	public Ticket() {

	}

	public Ticket(String ipAddress, String issueType,String username) {
		super();
		this.ipAddress = ipAddress;
		this.issueType = issueType;
		this.username = username;
	}



}