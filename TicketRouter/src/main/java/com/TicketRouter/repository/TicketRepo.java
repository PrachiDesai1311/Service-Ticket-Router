package com.TicketRouter.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.TicketRouter.model.Ticket;

@Repository
public interface TicketRepo extends JpaRepository<Ticket, Long>{

	List<Ticket> findByUsername(String username);

	Ticket findByUsernameAndId(String username, Long ticketNum);

	@Modifying
	@Transactional
	@Query(value ="update ticket t set t.status = ?1, t.user_comment = ?2 where t.id = ?3", nativeQuery = true)
	void updateStatusAndComment(String status, String userComment, Long ticketNumber); 


	Ticket findByServicerUserNameAndId(String servicerUserName, Long ticketNum);

	List<Ticket> findByServicerUserName(String servicerUserName);

	@Modifying
	@Transactional
	@Query(value ="update ticket t set t.status = ?1, t.servicer_comment = ?2 where t.id = ?3", nativeQuery = true)
	void updateStatusAndCommentServicer(String status, String servicerComment, Long ticketNumber); 


}