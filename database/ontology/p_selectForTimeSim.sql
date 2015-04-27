DELIMITER $$
CREATE PROCEDURE p_selectForTimeSim (
	IN _eventID INT (11)
)
BEGIN

select ontology_time.countRatio as ontologyCountRatio,event_time.countRatio as eventCountRatio 
                                from ontology_time inner join event_time 
                                where eventID=_eventID AND ontology_time.timeID=event_time.timeID;
END $$
DELIMITER ;
