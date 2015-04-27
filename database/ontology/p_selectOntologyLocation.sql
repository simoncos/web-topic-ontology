DELIMITER $$
CREATE PROCEDURE p_selectOntologyLocation (
	IN _ontologyID INT (11)
)
BEGIN

select * from ontology_location inner join location where ontologyID=_ontologyID and ontology_location.locationID=location.locationID;

END
$$
DELIMITER ;
