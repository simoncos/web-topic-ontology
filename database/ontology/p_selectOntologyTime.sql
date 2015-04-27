DELIMITER $$
CREATE PROCEDURE p_selectOntologyTime (
	IN _ontologyID INT (11)
)
BEGIN

select * from ontology_time inner join time where ontologyID=_ontologyID and ontology_time.timeID=time.timeID;

END
$$
DELIMITER ;
