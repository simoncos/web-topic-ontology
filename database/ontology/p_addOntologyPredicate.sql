DELIMITER $$
CREATE PROCEDURE p_addOntologyPredicate (
	IN _ontologyID INT (11),
	IN _predicateID INT (11),
	IN _updateTime datetime
)
BEGIN

IF EXISTS ( SELECT * FROM ontology_predicate WHERE ontologyID=_ontologyID AND predicateID=_predicateID) THEN

	UPDATE ontology_predicate
	SET
		count=count+1,
		updateTime=_updateTime
	WHERE ontologyID=_ontologyID 
				AND predicateID=_predicateID;

ELSE

	INSERT INTO ontology_predicate(ontologyID,predicateID,count,countRatio,updateTime)
				VALUES(_ontologyID,_predicateID,1,-1,_updateTime);

END IF ;

END $$
DELIMITER ;
