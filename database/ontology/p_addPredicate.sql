DELIMITER $$
CREATE PROCEDURE p_addPredicate (
	IN _eventID INT (11),
	IN _predicateID INT (11),
	IN _predicate VARCHAR(255),
	IN _updateTime datetime
)
BEGIN

IF EXISTS (
	SELECT
		predicateID
	FROM
		predicate
	WHERE
		predicate=_predicate
) THEN
	
	IF EXISTS( 
		SELECT *
		FROM event_predicate
		WHERE 
			predicateID=
				(SELECT 
						predicateID 
				 FROM predicate
				 WHERE  
						predicate=_predicate
				)
			AND eventID=_eventID
			) THEN
		UPDATE event_predicate
		SET count = count + 1,
				updateTime = _updateTime
			WHERE 
				predicateID=
					(SELECT 
							predicateID 
					FROM predicate 
					WHERE  
							predicate=_predicate
					)
				AND eventID=_eventID;
				
		
		ELSE
			INSERT INTO `event_predicate` (eventID, predicateID, count, countRatio, updateTime)
			VALUES
			(
				_eventID,
				(
				SELECT
					predicateID
				FROM
					predicate
				WHERE
					predicate=_predicate
				),
				1,
				-1,
				_updateTime
			) ;
			

	END IF ;

ELSE

	INSERT INTO `predicate` (
		predicate,
		updateTime
	)
	VALUES
	(
		_predicate,
		_updateTime
	) ; 
	INSERT INTO `event_predicate` (eventID, predicateID, count, countRatio, updateTime)
	VALUES
	(
		_eventID,
		(
			SELECT
				predicateID
			FROM
				predicate
			WHERE
				predicate=_predicate
		),
		1,
		-1,
		_updateTime
	) ;

END IF;


END $$
DELIMITER ;
