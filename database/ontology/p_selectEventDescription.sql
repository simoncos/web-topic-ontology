DELIMITER $$
CREATE PROCEDURE p_selectEventDescription (
	IN _eventID INT (11)
)
BEGIN

select * from event_description inner join description where eventID=_eventID and event_description.descriptionID=description.descriptionID;

END
$$
DELIMITER ;
