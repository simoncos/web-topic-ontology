DELIMITER $$
CREATE PROCEDURE p_eventCountRatio (
	IN _eventID INT (11),
	IN _updateTime datetime
)

BEGIN

	DECLARE timeCountSum INT;
	DECLARE locationCountSum INT;
	DECLARE entityCountSum INT;
	DECLARE descriptionCountSum INT;
	DECLARE predicateCountSum INT;
	DECLARE extraCountSum INT;

	SET timeCountSum=(SELECT SUM(`count`) FROM event_time WHERE eventID=_eventID);
	SET locationCountSum=(SELECT SUM(`count`) FROM event_location WHERE eventID=_eventID);
	SET entityCountSum=(SELECT SUM(`count`) FROM event_entity WHERE eventID=_eventID);
	SET descriptionCountSum=(SELECT SUM(`count`) FROM event_description WHERE eventID=_eventID);
	SET predicateCountSum=(SELECT SUM(`count`) FROM event_predicate WHERE eventID=_eventID);
	SET extraCountSum=(SELECT SUM(`count`) FROM event_extra WHERE eventID=_eventID);

	UPDATE event_time
			SET countRatio=count/timeCountSum
			WHERE eventID=_eventID;
	UPDATE event_location
			SET countRatio=count/locationCountSum
			WHERE eventID=_eventID;
	UPDATE event_entity
			SET countRatio=count/entityCountSum
			WHERE eventID=_eventID;
	UPDATE event_description
			SET countRatio=count/descriptionCountSum
			WHERE eventID=_eventID;
	UPDATE event_predicate
			SET countRatio=count/predicateCountSum
			WHERE eventID=_eventID;
	UPDATE event_extra
			SET countRatio=count/extraCountSum
			WHERE eventID=_eventID;

END $$
DELIMITER ;
