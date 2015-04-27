DELIMITER $$
CREATE PROCEDURE p_addOntologyEntity (
	IN _ontologyID INT (11),
	IN _entityID INT (11),
	IN _updateTime datetime
)
BEGIN

IF EXISTS ( SELECT * FROM ontology_entity WHERE ontologyID=_ontologyID AND entityID=_entityID) THEN

	UPDATE ontology_entity
	SET
		count=count+1,
		updateTime=_updateTime
	WHERE ontologyID=_ontologyID 
				AND entityID=_entityID;

ELSE

	INSERT INTO ontology_entity(ontologyID,entityID,count,countRatio,updateTime)
				VALUES(_ontologyID,_entityID,1,-1,_updateTime);

END IF ;

END $$
DELIMITER ;
