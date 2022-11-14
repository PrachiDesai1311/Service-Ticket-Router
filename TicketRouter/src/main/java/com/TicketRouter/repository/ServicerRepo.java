package com.TicketRouter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.TicketRouter.model.Servicer;

@Repository
public interface ServicerRepo extends JpaRepository<Servicer, String>{

	Servicer findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);

	@Query(value="select min(count_open) as count_open from servicer where group_id = (select group_id from servicergrp where servicer_group =?1);",nativeQuery=true)
	int findbyIssueType(String issueType);

	@Query(value = "select * from servicer where username = ?1 and group_id = (select group_id from servicergrp where servicer_group = ?2)", nativeQuery = true)
	Servicer findByUsernameAndIssueType(String username, String issueType);

	@Query(value="select * from servicer where count_open = ?1 and group_id = (select group_id from servicergrp where servicer_group = ?2) and rownum=1", nativeQuery=true)
	Servicer findByOpenCount(int count,String issueType);


	@Modifying
	@Transactional
	@Query(value ="update servicer s set s.name = ?1, s.email = ?2, s.mobile = ?3 where s.username = ?4", nativeQuery = true)
	void updateServicerData(String name,String email,String mobile,String username);


}