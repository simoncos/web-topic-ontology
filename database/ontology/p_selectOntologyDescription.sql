DELIMITER $$
CREATE PROCEDURE p_selectOntologyDescription (
	IN _ontologyID INT (11)
)
BEGIN

select * from ontology_description inner join description where ontologyID=_ontologyID and ontology_description.descriptionID=description.descriptionID;

END
$$
DELIMITER ;
