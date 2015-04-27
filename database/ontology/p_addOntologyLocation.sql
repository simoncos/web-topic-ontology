DELIMITER $$
CREATE PROCEDURE p_addOntologyLocation (
	IN _ontologyID INT (11),
	IN _locationID INT (11),
	IN _updateTime datetime
)
BEGIN

IF EXISTS ( SELECT * FROM ontology_location WHERE ontologyID=_ontologyID AND locationID=_locationID) THEN

	UPDATE ontology_location
	SET
		count=count+1,
		updateTime=_updateTime
	WHERE ontologyID=_ontologyID 
				AND locationID=_locationID;

ELSE

	INSERT INTO ontology_location(ontologyID,locationID,count,countRatio,updateTime)
				VALUES(_ontologyID,_locationID,1,-1,_updateTime);

END IF ;

END $$
DELIMITER ;
