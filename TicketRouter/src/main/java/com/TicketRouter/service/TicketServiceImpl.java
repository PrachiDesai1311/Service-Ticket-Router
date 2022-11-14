package com.TicketRouter.service;

import java.util.List;
//import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.TicketRouter.model.Ticket;
import com.TicketRouter.repository.TicketRepo;

@Service
public class TicketServiceImpl implements TicketService {

	@Autowired
	private TicketRepo ticketRepo;
	
	public Ticket addTicket(Ticket ticket) {	
		return ticketRepo.save(ticket);
	}


	public List<Ticket> getAllTickets(String username) {
		return ticketRepo.findByUsername(username);
	}

	@Override
	public Boolean existsByTicketNumber(Long TicketNum) {
		return ticketRepo.existsById(TicketNum);
	}

	@Override
	public Ticket findByUsernameAndTicketNumber(String username, Long ticketNum) {
		return ticketRepo.findByUsernameAndId(username,ticketNum);
	}

	@Override
	public void updateStatusAndComment(String status, String userComment, Long ticketNumber) {
		ticketRepo.updateStatusAndComment(status,userComment,ticketNumber);

	}

	@Override
	public Ticket findByServicerUserNameAndTicketNumber(String servicerUserName, Long ticketNum) {
		return ticketRepo.findByServicerUserNameAndId(servicerUserName,ticketNum);
	}

	public List<Ticket> getAllServicerTickets(String servicerUserName) {
		return ticketRepo.findByServicerUserName(servicerUserName);
	}

	@Override
	public void updateStatusAndCommentServicer(String status, String servicerComment, Long ticketNumber) {
		ticketRepo.updateStatusAndCommentServicer(status,servicerComment,ticketNumber);	
	}	

}
