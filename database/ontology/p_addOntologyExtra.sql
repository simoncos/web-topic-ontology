DELIMITER $$
CREATE PROCEDURE p_addOntologyExtra (
	IN _ontologyID INT (11),
	IN _extraID INT (11),
	IN _updateTime datetime
)
BEGIN

IF EXISTS ( SELECT * FROM ontology_extra WHERE ontologyID=_ontologyID AND extraID=_extraID) THEN

	UPDATE ontology_extra
	SET
		count=count+1,
		updateTime=_updateTime
	WHERE ontologyID=_ontologyID 
				AND extraID=_extraID;

ELSE

	INSERT INTO ontology_extra(ontologyID,extraID,count,countRatio,updateTime)
				VALUES(_ontologyID,_extraID,1,-1,_updateTime);

END IF ;

END $$
DELIMITER ;
