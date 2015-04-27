DELIMITER $$
CREATE PROCEDURE p_addExtra (
	IN _eventID INT (11),
	IN _extraID INT (11),
	IN _extra VARCHAR(255),
	IN _updateTime datetime
)
BEGIN

IF EXISTS (
	SELECT
		extraID
	FROM
		extra
	WHERE
		extra=_extra
) THEN
	
	IF EXISTS( 
		SELECT *
		FROM event_extra
		WHERE 
			extraID=
				(SELECT 
						extraID 
				 FROM extra
				 WHERE  
						extra=_extra
				)
			AND eventID=_eventID
			) THEN
		UPDATE event_extra
		SET count = count + 1,
				updateTime = _updateTime
			WHERE 
				extraID=
					(SELECT 
							extraID 
					FROM extra 
					WHERE  
							extra=_extra
					)
				AND eventID=_eventID;
				
		
		ELSE
			INSERT INTO `event_extra` (eventID, extraID, count, countRatio, updateTime)
			VALUES
			(
				_eventID,
				(
				SELECT
					extraID
				FROM
					extra
				WHERE
					extra=_extra
				),
				1,
				-1,
				_updateTime
			) ;
			

	END IF ;

ELSE

	INSERT INTO `extra` (
		extra,
		updateTime
	)
	VALUES
	(
		_extra,
		_updateTime
	) ; 
	INSERT INTO `event_extra` (eventID, extraID, count, countRatio, updateTime)
	VALUES
	(
		_eventID,
		(
			SELECT
				extraID
			FROM
				extra
			WHERE
				extra=_extra
		),
		1,
		-1,
		_updateTime
	) ;

END IF;

END $$
DELIMITER ;
