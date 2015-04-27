DELIMITER $$
CREATE PROCEDURE p_addOntologyEvent (
	IN _ontologyID INT (11),
	IN _eventID INT (11),
	IN _isRelevant TINYINT (1),
	IN _eventSim FLOAT,
	IN _timeSim FLOAT,
	IN _locationSim FLOAT,
	IN _entitySim FLOAT,
	IN _descriptionSim FLOAT,
	IN _predicateSim FLOAT,
	IN _extraSim FLOAT,
	IN _topicSim FLOAT,
	IN _updateTime datetime
)
BEGIN

IF EXISTS (
	SELECT
		*
	FROM
		ontology_event
	WHERE
		ontologyID = _ontologyID
		AND eventID = _eventID
) THEN

UPDATE ontology_event
	SET 
		isRelevant = _isRelevant,
		eventSim = _eventSim,
		timeSim = _timeSim,
		locationSim = _locationSim,
		entitySim = _entitySim,
		descriptionSim = _descriptionSim,
		predicateSim = _predicateSim,
		extraSim = _extraSim,
		topicSim = _topicSim,
		updateTime = _updateTime
	WHERE ontologyID = _ontologyID
				AND eventID = _eventID ;

ELSE
	INSERT INTO ontology_event (
		ontologyID,
		eventID,
		isRelevant,
		eventSim,
		timeSim,
		locationSim,
		entitySim,
		descriptionSim,
		predicateSim,
		extraSim,
		topicSim,
		updateTime
	)
VALUES
	(
		_ontologyID,
		_eventID,
		_isRelevant,
		_eventSim,
		_timeSim,
		_locationSim,
		_entitySim,
		_descriptionSim,
		_predicateSim,
		_extraSim,
		_topicSim,
		_updateTime
	);

END IF ;

END $$
DELIMITER ;
