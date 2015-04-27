DELIMITER $$
CREATE PROCEDURE p_selectEventExtra (
	IN _eventID INT (11)
)
BEGIN

select * from event_extra inner join extra where eventID=_eventID and event_extra.extraID=extra.extraID;

END
$$
DELIMITER ;
