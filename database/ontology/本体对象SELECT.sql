/*事件*/
SELECT ontology.topic,ontology.evolutionTimes,`event`.fromPlatform,`event`.fromPublisher,`event`.fromTime,`event`.fromURL,`event`.originalText
FROM ontology
INNER JOIN ontology_event
INNER JOIN `event`
WHERE ontology_event.eventID=`event`.eventID
ORDER BY ontology_event.topicSim DESC;

SELECT ontology.topic,`event`.title,ontology_event.topicSim,`event`.fromPlatform,`event`.fromPublisher,`event`.fromTime,`event`.fromURL,`event`.originalText
FROM ontology
INNER JOIN ontology_event
INNER JOIN `event`
WHERE ontology_event.eventID=`event`.eventID
	AND ontology_event.isRelevant=1
ORDER BY ontology_event.topicSim DESC;

/*时间*/
SELECT ontology.topic,`time`.`year`,`time`.`month`,`time`.`day`,`time`.`minute`,`time`.`second`,`time`.accurateLevel as timeAccurateLevel,ontology_time.countRatio
FROM ontology 
INNER JOIN ontology_time
INNER JOIN `time`
WHERE ontology_time.timeID=`time`.timeID
ORDER BY ontology_time.countRatio DESC;

/*地点*/
SELECT ontology.topic,ontology.evolutionTimes,location.location,location.parentLocationID,location.accurateLevel as locationAccurateLevel
FROM ontology
INNER JOIN ontology_location
INNER JOIN location
WHERE ontology_location.locationID=location.locationID
ORDER BY ontology_location.countRatio DESC;

/*实体*/
SELECT ontology.topic,ontology.evolutionTimes,entity.entity,entity.entityType
FROM ontology
INNER JOIN ontology_entity
INNER JOIN entity
WHERE ontology_entity.entityID=entity.entityID
ORDER BY ontology_entity.countRatio DESC;

/*描述*/
SELECT ontology.topic,ontology.evolutionTimes,description.description,description.tendencyType,description.tendencyLevel
FROM ontology
INNER JOIN ontology_description
INNER JOIN description
WHERE ontology_description.descriptionID=description.descriptionID
ORDER BY ontology_description.countRatio DESC;

/*谓语*/
SELECT ontology.topic,ontology.evolutionTimes,predicate.predicate
FROM ontology
INNER JOIN ontology_predicate
INNER JOIN predicate
WHERE ontology_predicate.predicateID=predicate.predicateID
ORDER BY ontology_predicate.countRatio DESC;

/*扩展*/
SELECT ontology.topic,ontology.evolutionTimes,extra.extra
FROM ontology
INNER JOIN ontology_extra
INNER JOIN extra
WHERE ontology_extra.extraID=extra.extraID
ORDER BY ontology_extra.countRatio DESC;

