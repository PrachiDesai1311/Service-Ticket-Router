package com.TicketRouter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.TicketRouter.model.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, String>{

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);

	Customer findByUsername(String username);

	@Modifying
	@Transactional
	@Query(value ="update customer c set c.department = ?1, c.name = ?2,c.alias = ?3,c.designation = ?4,c.email = ?5,c.mobile = ?6 where c.username = ?7", nativeQuery = true)
	void updateCustomerData(String department,String name,String alias,String designaton,String email,String mobile,String username); 

}