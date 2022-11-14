package com.TicketRouter.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.TicketRouter.model.Servicer;
import com.TicketRouter.model.ServicerTicket;
import com.TicketRouter.model.Ticket;
import com.TicketRouter.repository.ServicerRepo;
import com.TicketRouter.service.TicketService;
import com.TicketRouter.service.UserService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/")

public class TicketController {

	@Autowired
	private TicketService ticketService;

	@Autowired 
	private UserService userService;

	@Autowired
	private ServicerRepo userRepo;


	@PostMapping("/newTicket")
	public ResponseEntity<?>addTicket(@RequestBody Ticket ticket){
		if(ticket.getIpAddress().contains("10.12") && ticket.getIpAddress().charAt(10)=='.' || ticket.getIpAddress().contains("10.") && ticket.getIpAddress().charAt(4)=='.')
		{
			int count = userService.findbyIssueType(ticket.getIssueType());
			Servicer servicer =userService.findyByOpenCount(count,ticket.getIssueType());
			if(ticket.getServicerUserName()==null) {
				ticket.setServicerUserName(servicer.getUsername());
				servicer.setCountOpen(servicer.getCountOpen() + 1);
				userRepo.save(servicer);

				Ticket ticketData = ticketService.addTicket(ticket);
				ticket.setIssueType(ticketData.getIssueType());
				ticket.setStatus(ticketData.getStatus());
				ticket.setUsername(ticketData.getUsername());

			}
			return ResponseEntity.ok().body(ticket);
		}

		else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

	}


	@GetMapping("/ticketdetails")
	public ResponseEntity<?> ticketDetails(@RequestParam Long ticketNum, @RequestParam String username){
		if(ticketService.existsByTicketNumber(ticketNum))
		{
			Ticket ticketData=ticketService.findByUsernameAndTicketNumber(username, ticketNum);
			ServicerTicket servicerTicket = new ServicerTicket();
			servicerTicket.setIssueType(ticketData.getIssueType());
			servicerTicket.setTicketNum(ticketData.getId());
			servicerTicket.setStatus(ticketData.getStatus());
			servicerTicket.setUserComment(ticketData.getUserComment());
			servicerTicket.setServicerComment(ticketData.getServicerComment());

			Servicer servicer = userService.findByUsernameAndIssueType(ticketData.getServicerUserName(), ticketData.getIssueType());

			servicerTicket.setName(servicer.getName());
			servicerTicket.setEmail(servicer.getEmail());
			servicerTicket.setContactNum(servicer.getMobile());

			return ResponseEntity.ok().body(servicerTicket);
		}
		return ResponseEntity.notFound().build();

	}


	@PostMapping("/updateDetails")
	public ResponseEntity<?> updateDetails(@Valid @RequestBody ServicerTicket servicerTicket){
		if(ticketService.existsByTicketNumber(servicerTicket.getTicketNum()))
		{	
			ticketService.updateStatusAndComment(servicerTicket.getStatus(),servicerTicket.getUserComment(),servicerTicket.getTicketNum());
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();

	}


	@GetMapping("/viewAllTicket")
	public ResponseEntity<List<Ticket>> viewAll(@RequestParam String username) {
		List<Ticket>tickets=ticketService.getAllTickets(username);
		if(tickets.isEmpty())
		{
			return ResponseEntity.notFound().build();
		}
		return new ResponseEntity<List<Ticket>>(tickets,HttpStatus.OK);
	}






	//********************************************Servicer Side Data******************************************************



	@GetMapping("/servicerTicketDetails")
	public ResponseEntity<?> servicerTicketDetails(@RequestParam Long ticketNum, @RequestParam String username){
		if(ticketService.existsByTicketNumber(ticketNum))
		{
			Ticket ticketData=ticketService.findByServicerUserNameAndTicketNumber(username, ticketNum);
			ServicerTicket servicerTicket = new ServicerTicket();
			servicerTicket.setIssueType(ticketData.getIssueType());
			servicerTicket.setTicketNum(ticketData.getId());
			servicerTicket.setStatus(ticketData.getStatus());
			servicerTicket.setServicerComment(ticketData.getServicerComment());
			return ResponseEntity.ok().body(servicerTicket);
		}
		return ResponseEntity.notFound().build();

	}

	@GetMapping("/servicerViewAllTicket")
	public ResponseEntity<List<Ticket>> servicerViewAll(@RequestParam String username) {
		List<Ticket>tickets=ticketService.getAllServicerTickets(username);
		if(tickets.isEmpty())
		{
			return ResponseEntity.notFound().build();
		}
		return new ResponseEntity<List<Ticket>>(tickets,HttpStatus.OK);
	}


	@GetMapping("/updateServicerDetails")
	public ResponseEntity<?> modifyServicerDetails(@RequestParam String ticketStatus,@RequestParam String servicerComment,@RequestParam Long ticketNum){
		if(ticketService.existsByTicketNumber(ticketNum))
		{	
			ticketService.updateStatusAndCommentServicer(ticketStatus, servicerComment, ticketNum);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();

	}
}
