DELIMITER $$
CREATE PROCEDURE p_selectForEntitySim (
	IN _eventID INT (11)
)
BEGIN

select ontology_entity.countRatio as ontologyCountRatio,event_entity.countRatio as eventCountRatio 
                                from ontology_entity inner join event_entity 
                                where eventID=_eventID AND ontology_entity.entityID=event_entity.entityID;
END $$
DELIMITER ;
