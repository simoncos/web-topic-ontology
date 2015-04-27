DELIMITER $$
CREATE PROCEDURE p_selectEventEntity (
	IN _eventID INT (11)
)
BEGIN

select * from event_entity inner join entity where eventID=_eventID and event_entity.entityID=entity.entityID;

END
$$
DELIMITER ;
