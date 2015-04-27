DELIMITER $$
CREATE PROCEDURE p_addEvent (
	IN _eventID INT (11),
	IN _fromTime datetime,
	IN _fromURL VARCHAR (255),
	IN _fromPlatform VARCHAR (255),
	IN _fromPublisher VARCHAR (255),
	IN _originalText LONGTEXT,
	IN _segmentedText LONGTEXT,
	IN _foundTime datetime,
	IN _updateTime datetime
)
BEGIN

	IF EXISTS(
		SELECT * 
		FROM `event` 
		WHERE fromTime=_fromTime
			AND fromURL=_fromURL
			AND fromPlatform=_fromPlatform
			AND fromPublisher=_fromPublisher
			AND originalText=_originalText
			AND segmentedText=_segmentedText 
			AND foundTime=_foundTime
	) THEN

	UPDATE `event`
	SET fromTime = _fromTime,
			fromURL = _fromURL,
			fromPlatform = _fromPlatform,
			fromPublisher = _fromPublisher,
			originalText = _originalText,
			segmentedText = _segmentedText,
			updateTime = _updateTime
	WHERE fromTime=_fromTime
				AND fromURL=_fromURL
				AND fromPlatform=_fromPlatform
				AND fromPublisher=_fromPublisher
				AND originalText=_originalText
				AND segmentedText=_segmentedText 
				AND foundTime=_foundTime;
	
	ELSE

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

		SELECT eventID FROM `event`
		WHERE fromTime=_fromTime
			AND fromURL=_fromURL
			AND fromPlatform=_fromPlatform
			AND fromPublisher=_fromPublisher
			AND originalText=_originalText
			AND segmentedText=_segmentedText 
			AND foundTime=_foundTime;

END IF;

END
$$
DELIMITER ;
