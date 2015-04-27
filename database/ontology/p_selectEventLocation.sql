DELIMITER $$
CREATE PROCEDURE p_selectEventLocation (
	IN _eventID INT (11)
)
BEGIN

select * from event_location inner join location where eventID=_eventID and event_location.locationID=location.locationID;

END
$$
DELIMITER ;
