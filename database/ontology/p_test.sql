DELIMITER $$
CREATE PROCEDURE p_addEvent (
	INOUT _eventID INT (11),
	INOUT _fromTime datetime,
	INOUT _fromURL VARCHAR (255),
	INOUT _fromPlatform VARCHAR (255),
	INOUT _fromPublisher VARCHAR (255),
	INOUT _originalText text,
	INOUT _segmentedText text,
	INOUT _foundTime datetime,
	INOUT _updateTime datetime
)
BEGIN

IF (_eventID = NULL) THEN
	INSERT INTO `event` (
		fromTime,
		fromURL,
		fromPlatform,
		fromPublisher,
		originalText,
		segmentedText,
		foundTime,
		updateTime
	)
VALUES
	(
		_fromTime ,_fromURL ,_fromPlatform ,_fromPublisher ,_originalText ,_segmentedText ,_foundTime ,_updateTime
	) ;

ELSE
	IF EXISTS(SELECT eventID from `event` WHERE eventID = _eventID) THEN

	UPDATE `event`
	SET fromTime = _fromTime,
			fromURL = _fromURL,
			fromPlatform = _fromPlatform,
			fromPublisher = _fromPublisher,
			originalText = _originalText,
			segmentedText = _segmentedText,
			foundTime = _foundTime,
			updateTime = _updateTime
	WHERE
			eventID = _eventID;
	END IF;
END IF;

/*
BEGIN
SELECT
	eventID,
	fromTime,
	fromURL,
	fromPlatform,
	fromPublisher,
	originalText,
	segmentedText,
	foundTime,
	updateTime
FROM
	`event`
WHERE
	fromTime = _fromTime AND
	fromURL = _fromURL AND
	fromPlatform = _fromPlatform AND
	fromPublisher = _fromPublisher AND
	originalText = _originalText AND
	segmentedText = _segmentedText AND
	foundTime = _foundTime AND
	updateTime = _updateTime;
END;
*/
END;

$$
DELIMITER ;
