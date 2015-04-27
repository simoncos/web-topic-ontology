DELIMITER $$
CREATE PROCEDURE p_selectEventTime (
	IN _eventID INT (11)
)
BEGIN

select * from event_time inner join time where eventID=_eventID and event_time.timeID=time.timeID;

END
$$
DELIMITER ;
