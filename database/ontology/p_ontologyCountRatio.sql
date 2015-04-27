DELIMITER $$
CREATE PROCEDURE p_ontologyCountRatio (
	IN _ontologyID INT (11),
	IN _updateTime datetime
)

BEGIN

	DECLARE timeCountSum INT;
	DECLARE locationCountSum INT;
	DECLARE entityCountSum INT;
	DECLARE descriptionCountSum INT;
	DECLARE predicateCountSum INT;
	DECLARE extraCountSum INT;

	SET timeCountSum=(SELECT SUM(`count`) FROM ontology_time WHERE ontologyID=_ontologyID);
	SET locationCountSum=(SELECT SUM(`count`) FROM ontology_location WHERE ontologyID=_ontologyID);
	SET entityCountSum=(SELECT SUM(`count`) FROM ontology_entity WHERE ontologyID=_ontologyID);
	SET descriptionCountSum=(SELECT SUM(`count`) FROM ontology_description WHERE ontologyID=_ontologyID);
	SET predicateCountSum=(SELECT SUM(`count`) FROM ontology_predicate WHERE ontologyID=_ontologyID);
	SET extraCountSum=(SELECT SUM(`count`) FROM ontology_extra WHERE ontologyID=_ontologyID);

	UPDATE ontology_time
			SET countRatio=count/timeCountSum;
	UPDATE ontology_location
			SET countRatio=count/locationCountSum;
	UPDATE ontology_entity
			SET countRatio=count/entityCountSum;
	UPDATE ontology_description
			SET countRatio=count/descriptionCountSum;
	UPDATE ontology_predicate
			SET countRatio=count/predicateCountSum;
	UPDATE ontology_extra
			SET countRatio=count/extraCountSum;

END $$
DELIMITER ;
