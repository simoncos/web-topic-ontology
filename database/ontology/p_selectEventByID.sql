DELIMITER $$
CREATE PROCEDURE p_selectEventByID (
	IN _eventID INT (11)
)
BEGIN

	select * from `event` where eventID=_eventID;

END
$$
DELIMITER ;
