DELIMITER $$
CREATE PROCEDURE p_selectForPredicateSim (
	IN _eventID INT (11)
)
BEGIN

select ontology_predicate.countRatio as ontologyCountRatio,event_predicate.countRatio as eventCountRatio 
                                from ontology_predicate inner join event_predicate 
                                where eventID=_eventID AND ontology_predicate.predicateID=event_predicate.predicateID;
END $$
DELIMITER ;
