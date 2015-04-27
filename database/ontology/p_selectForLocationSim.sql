DELIMITER $$
CREATE PROCEDURE p_selectForLocationSim (
	IN _eventID INT (11)
)
BEGIN

select ontology_location.countRatio as ontologyCountRatio,event_location.countRatio as eventCountRatio 
                                from ontology_location inner join event_location 
                                where eventID=_eventID AND ontology_location.locationID=event_location.locationID;
END $$
DELIMITER ;
