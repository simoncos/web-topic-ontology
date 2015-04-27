DELIMITER $$
CREATE PROCEDURE p_selectForDescriptionSim (
	IN _eventID INT (11)
)
BEGIN

select ontology_description.countRatio as ontologyCountRatio,event_description.countRatio as eventCountRatio 
                                from ontology_description inner join event_description 
                                where eventID=_eventID AND ontology_description.descriptionID=event_description.descriptionID;
END $$
DELIMITER ;
