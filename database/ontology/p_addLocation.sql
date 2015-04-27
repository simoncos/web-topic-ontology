DELIMITER $$
CREATE PROCEDURE p_addLocation (
	IN _eventID INT (11),
	IN _locationID INT (11),
	IN _parentLocationID INT(11),
	IN _location VARCHAR(255),
	IN _accurateLevel VARCHAR(255),
	IN _updateTime datetime
)
BEGIN

IF EXISTS (
	SELECT
		locationID
	FROM
		location
	WHERE
		location=_location
) THEN
	
	IF EXISTS( 
		SELECT *
		FROM event_location
		WHERE 
			locationID=
				(SELECT 
						locationID 
				 FROM location 
				 WHERE  
						location=_location
				)
			AND eventID=_eventID
			) THEN
		UPDATE event_location
		SET count = count + 1,
				updateTime = _updateTime
			WHERE 
				locationID=
					(SELECT 
							locationID 
					FROM location 
					WHERE  
							location=_location
					)
				AND eventID=_eventID;
				
		
		ELSE
			INSERT INTO `event_location` (eventID, locationID, count, countRatio, updateTime)
			VALUES
			(
				_eventID,
				(
				SELECT
					locationID
				FROM
					location
				WHERE
					location=_location
				),
				1,
				-1,
				_updateTime
			) ;
			

	END IF ;

ELSE

	INSERT INTO `location` (
		parentLocationID,
		location,
		accurateLevel,
		updateTime
	)
	VALUES
	(
		_parentLocationID,
		_location,
		_accurateLevel,
		_updateTime
	) ; 
	INSERT INTO `event_location` (eventID, locationID, count, countRatio, updateTime)
	VALUES
	(
		_eventID,
		(
			SELECT
				locationID
			FROM
				location
			WHERE
				location=_location
		),
		1,
		-1,
		_updateTime
	) ;

END IF;


END $$
DELIMITER ;
