package com.TicketRouter.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.TicketRouter.model.Customer;
import com.TicketRouter.model.Servicer;
import com.TicketRouter.repository.CustomerRepo;
import com.TicketRouter.repository.ServicerRepo;

@Service
public class UserService {
	@Autowired
	private CustomerRepo customerRepo; 

	@Autowired
	private ServicerRepo servicerRepo;

	public Customer getCustomerData(String username)
	{
		Customer customer = customerRepo.findByUsername(username);
		return customer;

	}

	public Servicer getServicerData(String username)
	{
		Servicer servicer = servicerRepo.findByUsername(username);
		return servicer;

	}

	public void updateCustomerData(String department,String name,String alias,String designaton,String email,String mobile,String username) {
		customerRepo.updateCustomerData(department,name,alias,designaton,email,mobile,username);	
	}

	public void updateServicerData(String name,String email,String mobile,String username) {
		servicerRepo.updateServicerData(name,email,mobile,username);	
	}



	public int findbyIssueType(String issueType)
	{
		return servicerRepo.findbyIssueType(issueType);

	}

	public Servicer findByUsernameAndIssueType(String username, String issueType)
	{
		Servicer servicer = servicerRepo.findByUsernameAndIssueType(username, issueType);
		return servicer;

	}

	public Servicer findyByOpenCount(int count, String issueType) {

		return servicerRepo.findByOpenCount(count, issueType);
	}

}
