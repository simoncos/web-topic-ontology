DELIMITER $$
CREATE PROCEDURE p_selectEventPredicate (
	IN _eventID INT (11)
)
BEGIN

select * from event_predicate inner join predicate where eventID=_eventID and event_predicate.predicateID=predicate.predicateID;

END
$$
DELIMITER ;
