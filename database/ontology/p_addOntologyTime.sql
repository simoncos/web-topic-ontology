DELIMITER $$
CREATE PROCEDURE p_addOntologyTime (
	IN _ontologyID INT (11),
	IN _timeID INT (11),
	IN _updateTime datetime
)
BEGIN

IF EXISTS ( SELECT * FROM ontology_time WHERE ontologyID=_ontologyID AND timeID=_timeID) THEN

	UPDATE ontology_time
	SET
		count=count+1,
		updateTime=_updateTime
	WHERE ontologyID=_ontologyID 
				AND timeID=_timeID;

ELSE

	INSERT INTO ontology_time(ontologyID,timeID,count,countRatio,updateTime)
				VALUES(_ontologyID,_timeID,1,-1,_updateTime);

END IF ;

END $$
DELIMITER ;
