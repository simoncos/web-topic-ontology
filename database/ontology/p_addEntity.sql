DELIMITER $$
CREATE PROCEDURE p_addEntity (
	IN _eventID INT (11),
	IN _entityID INT (11),
	IN _entity VARCHAR(255),
	IN _entityType VARCHAR(255),
	IN _updateTime datetime
)
BEGIN

IF EXISTS (
	SELECT
		entityID
	FROM
		entity
	WHERE
		entity=_entity
) THEN
	
	IF EXISTS( 
		SELECT *
		FROM event_entity
		WHERE 
			entityID=
				(SELECT 
						entityID 
				 FROM entity
				 WHERE  
						entity=_entity
				)
			AND eventID=_eventID
			) THEN
		UPDATE event_entity
		SET count = count + 1,
				updateTime = _updateTime
			WHERE 
				entityID=
					(SELECT 
							entityID 
					FROM entity 
					WHERE  
							entity=_entity
					)
				AND eventID=_eventID;
				
		
		ELSE
			INSERT INTO `event_entity` (eventID, entityID, count, countRatio, updateTime)
			VALUES
			(
				_eventID,
				(
				SELECT
					entityID
				FROM
					entity
				WHERE
					entity=_entity
				),
				1,
				-1,
				_updateTime
			) ;
			

	END IF ;

ELSE

	INSERT INTO `entity` (
		entity,
		entityType,
		updateTime
	)
	VALUES
	(
		_entity,
		_entityType,
		_updateTime
	) ; 
	INSERT INTO `event_entity` (eventID, entityID, count, countRatio, updateTime)
	VALUES
	(
		_eventID,
		(
			SELECT
				entityID
			FROM
				entity
			WHERE
				entity=_entity
		),
		1,
		-1,
		_updateTime
	) ;

END IF;

END $$
DELIMITER ;
