DELIMITER $$
CREATE PROCEDURE p_selectForExtraSim (
	IN _eventID INT (11)
)
BEGIN

select ontology_extra.countRatio as ontologyCountRatio,event_extra.countRatio as eventCountRatio 
                                from ontology_extra inner join event_extra 
                                where eventID=_eventID AND ontology_extra.extraID=event_extra.extraID;
END $$
DELIMITER ;
