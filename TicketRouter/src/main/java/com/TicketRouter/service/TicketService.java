package com.TicketRouter.service;

import java.util.List;
import com.TicketRouter.model.Ticket;

public interface TicketService {

	public Ticket addTicket(Ticket ticket);

	public List<Ticket> getAllTickets(String username);

	Boolean existsByTicketNumber(Long TicketNum);

	public Ticket findByUsernameAndTicketNumber(String username, Long ticketNum);

	public void updateStatusAndComment(String status, String userComment, Long ticketNumber);

	public Ticket findByServicerUserNameAndTicketNumber(String servicerUserName, Long ticketNum);

	List<Ticket> getAllServicerTickets(String servicerUserName);

	public void updateStatusAndCommentServicer(String status, String servicerComment, Long ticketNumber);


}
