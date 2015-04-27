DELIMITER $$
CREATE PROCEDURE p_addOntology (
	IN _ontologyID INT (11),
	IN _topic VARCHAR(255),
	IN _evolutionTimes INT(11),
	IN _foundTime datetime,
	IN _updateTime datetime
)
BEGIN

	IF EXISTS(
		SELECT * 
		FROM ontology
		WHERE topic=_topic
					AND foundTime=_foundTime
	) THEN

	UPDATE ontology
	SET evolutionTimes = evolutionTimes+1,
			updateTime = _updateTime
	WHERE topic=_topic
				AND foundTime=_foundTime;
	
	ELSE

		INSERT INTO ontology (
			topic,
			evolutionTimes,
			foundTime,
			updateTime
		)
		VALUES
		(
			_topic , 0 ,_foundTime ,_updateTime
		) ;

END IF;

END
$$
DELIMITER ;
