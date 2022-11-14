package com.TicketRouter.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "servicergrp")
public class Servicergrp {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String group_id;
	private String servicer_group;

	public String getGroup_id() {
		return group_id;
	}
	public void setGroup_id(String group_id) {
		this.group_id = group_id;
	}
	public String getServicer_group() {
		return servicer_group;
	}
	public void setServicer_group(String servicer_group) {
		this.servicer_group = servicer_group;
	}

	public Servicergrp() {

	}

	public Servicergrp(String group_id, String servicer_group) {
		super();
		this.group_id = group_id;
		this.servicer_group = servicer_group;
	}

}