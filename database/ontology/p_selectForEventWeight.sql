DELIMITER $$
CREATE PROCEDURE p_selectForEventWeight (
	IN _eventID INT (11)
)
BEGIN

select fromTime,fromPlatform,fromPublisher from event where eventID=_eventID;

END $$
DELIMITER ;
