DELIMITER $$
CREATE PROCEDURE p_updateEventByID (
	IN _eventID INT (11),
	IN _segmentedText text,
	IN _updateTime datetime
)
BEGIN

	UPDATE `event`
	SET segmentedText = _segmentedText,
			updateTime = _updateTime
	WHERE eventID=_eventID;
	
END
$$
DELIMITER ;
