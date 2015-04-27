DELIMITER $$
CREATE PROCEDURE p_selectOntologyPredicate (
	IN _ontologyID INT (11)
)
BEGIN

select * from ontology_predicate inner join predicate where ontologyID=_ontologyID and ontology_predicate.predicateID=predicate.predicateID;

END
$$
DELIMITER ;
