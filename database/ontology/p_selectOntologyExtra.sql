DELIMITER $$
CREATE PROCEDURE p_selectOntologyExtra (
	IN _ontologyID INT (11)
)
BEGIN

select * from ontology_extra inner join extra where ontologyID=_ontologyID and ontology_extra.extraID=extra.extraID;

END
$$
DELIMITER ;
