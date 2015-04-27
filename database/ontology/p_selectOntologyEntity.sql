DELIMITER $$
CREATE PROCEDURE p_selectOntologyEntity (
	IN _ontologyID INT (11)
)
BEGIN

select * from ontology_entity inner join entity where ontologyID=_ontologyID and ontology_entity.entityID=entity.entityID;

END
$$
DELIMITER ;
