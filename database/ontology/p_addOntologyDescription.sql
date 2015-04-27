DELIMITER $$
CREATE PROCEDURE p_addOntologyDescription (
	IN _ontologyID INT (11),
	IN _descriptionID INT (11),
	IN _updateTime datetime
)
BEGIN

IF EXISTS ( SELECT * FROM ontology_description WHERE ontologyID=_ontologyID AND descriptionID=_descriptionID) THEN

	UPDATE ontology_description
	SET
		count=count+1,
		updateTime=_updateTime
	WHERE ontologyID=_ontologyID 
				AND descriptionID=_descriptionID;

ELSE

	INSERT INTO ontology_description(ontologyID,descriptionID,count,countRatio,updateTime)
				VALUES(_ontologyID,_descriptionID,1,-1,_updateTime);

END IF ;

END $$
DELIMITER ;
