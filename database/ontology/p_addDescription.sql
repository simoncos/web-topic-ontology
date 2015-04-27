DELIMITER $$
CREATE PROCEDURE p_addDescription (
	IN _eventID INT (11),
	IN _descriptionID INT (11),
	IN _description VARCHAR(255),
	IN _tendencyType VARCHAR(255),
	IN _tendencyLevel FLOAT,
	IN _updateTime datetime
)
BEGIN

IF EXISTS (
	SELECT
		descriptionID
	FROM
		description
	WHERE
		description=_description
) THEN
	
	IF EXISTS( 
		SELECT *
		FROM event_description
		WHERE 
			descriptionID=
				(SELECT 
						descriptionID 
				 FROM description
				 WHERE  
						description=_description
				)
			AND eventID=_eventID
			) THEN
		UPDATE event_description
		SET count = count + 1,
				updateTime = _updateTime
			WHERE 
				descriptionID=
					(SELECT 
							descriptionID 
					FROM description 
					WHERE  
							description=_description
					)
				AND eventID=_eventID;
				
		
		ELSE
			INSERT INTO `event_description` (eventID, descriptionID, count, countRatio, updateTime)
			VALUES
			(
				_eventID,
				(
				SELECT
					descriptionID
				FROM
					description
				WHERE
					description=_description
				),
				1,
				-1,
				_updateTime
			) ;
			

	END IF ;

ELSE

	INSERT INTO `description` (
		description,
		tendencyType,
		tendencyLevel,
		updateTime
	)
	VALUES
	(
		_description,
		_tendencyType,
		_tendencyLevel,
		_updateTime
	) ; 
	INSERT INTO `event_description` (eventID, descriptionID, count, countRatio, updateTime)
	VALUES
	(
		_eventID,
		(
			SELECT
				descriptionID
			FROM
				description
			WHERE
				description=_description
		),
		1,
		-1,
		_updateTime
	) ;

END IF;

END $$
DELIMITER ;
