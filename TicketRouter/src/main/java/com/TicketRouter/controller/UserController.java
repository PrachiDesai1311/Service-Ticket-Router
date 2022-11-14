package com.TicketRouter.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.TicketRouter.model.Customer;
import com.TicketRouter.model.Servicer;
import com.TicketRouter.model.User;
import com.TicketRouter.payload.exception.MessageResponse;
import com.TicketRouter.payload.request.CustomerRequest;
import com.TicketRouter.payload.request.ServicerRequest;
import com.TicketRouter.repository.CustomerRepo;
import com.TicketRouter.repository.ServicerRepo;
import com.TicketRouter.service.UserService;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/")
public class UserController {

	@Autowired
	private CustomerRepo customerRepo;

	@Autowired
	private ServicerRepo servicerRepo;

	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody User userData){
		if(userData.getUserType().equals("Customer")) {
			Customer customer =customerRepo.findByUsername(userData.getUsername());
			if(customer == null) {
				return ResponseEntity.notFound().build();
			} else {
				String username = customer.getUsername();
				String password = customer.getPassword();
				if(username.equals(userData.getUsername()) && password.equals(userData.getPassword())){				
					return ResponseEntity.ok().build();
				} else {
					return ResponseEntity.notFound().build();
				}
			}	
		} else {
			Servicer servicer = servicerRepo.findByUsername(userData.getUsername());
			if(servicer == null) {
				return ResponseEntity.notFound().build();
			} else {
				String username = servicer.getUsername();
				String password = servicer.getPassword();
				if(username.equals(userData.getUsername()) && password.equals(userData.getPassword())){				
					return ResponseEntity.ok().build();
				} else {
					return ResponseEntity.notFound().build();
				}		
			}
		}		
	}


	@PostMapping("/customerRegister")
	public ResponseEntity<?> registerCustomer(@Valid @RequestBody CustomerRequest customerRequest) {
		if (customerRepo.existsByUsername(customerRequest.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}

		if (customerRepo.existsByEmail(customerRequest.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
		}

		Customer customer = new Customer();
		customer.setUsername(customerRequest.getUsername());
		customer.setPassword(customerRequest.getPassword());
		customer.setName(customerRequest.getName());
		customer.setAlias(customerRequest.getAlias());
		customer.setDesignation(customerRequest.getDesignation());
		customer.setDepartment(customerRequest.getDepartment());
		customer.setEmail(customerRequest.getEmail());
		customer.setMobile(customerRequest.getMobile());
		customerRepo.save(customer);
		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}



	@PostMapping("/servicerRegister")
	public ResponseEntity<?> registerServicer(@Valid @RequestBody ServicerRequest servicerRequest)
	{
		if (servicerRepo.existsByUsername(servicerRequest.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}

		if (servicerRepo.existsByEmail(servicerRequest.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
		}
		Servicer servicer = new Servicer(servicerRequest.getUsername(),
				servicerRequest.getPassword(),
				servicerRequest.getName(),
				servicerRequest.getEmail(),
				servicerRequest.getMobile(),
				servicerRequest.getGroupId(),
				servicerRequest.getLocation());

		servicer.setCountOpen(0);

		servicerRepo.save(servicer);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}

	@GetMapping("/getUserDetails")
	public ResponseEntity<?> getProfileDetails(@RequestParam String username,@RequestParam String userType)
	{
		if(userType.equals("Customer"))
		{
			Customer customer=userService.getCustomerData(username);
			return ResponseEntity.ok().body(customer);
		}
		Servicer servicer=userService.getServicerData(username);
		return ResponseEntity.ok().body(servicer);

	}


	@PostMapping("/profile")
	public ResponseEntity<?> updateUser(@RequestBody CustomerRequest customerRequest,@RequestParam String username,@RequestParam String userType)
	{
		if(userType.equals("Customer"))
		{
			userService.updateCustomerData(customerRequest.getDepartment(),customerRequest.getName(),customerRequest.getAlias(),
					customerRequest.getDesignation(),customerRequest.getEmail(),customerRequest.getMobile(),username);
			return ResponseEntity.ok().build();

		} 
		else {
			userService.updateServicerData(customerRequest.getName(),customerRequest.getEmail(),customerRequest.getMobile(),username);
			return ResponseEntity.ok().build();
		}

	}
}