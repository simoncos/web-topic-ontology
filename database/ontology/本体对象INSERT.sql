/*事件*/
/*
insert into ontology_event(updateTime,ontologyID,eventID) values(NOW(),1,2);
*/

/*时间，需要连接ontology_event和event_time两张表*/
/*
INSERT INTO ontology_time(ontologyID,timeID) 
SELECT ontology_event.ontologyID,event_time.timeID 
FROM ontology_event
INNER JOIN event_time
WHERE ontology_event.eventID=event_time.eventID
*/

/*地点*/
/*
INSERT INTO ontology_location(ontologyID,locationID) 
SELECT ontology_event.ontologyID,event_location.locationID 
FROM ontology_event
INNER JOIN event_location
WHERE ontology_event.eventID=event_location.eventID
*/

/*实体*/
/*
INSERT INTO ontology_entity(ontologyID,entityID) 
SELECT ontology_event.ontologyID,event_entity.entityID 
FROM ontology_event
INNER JOIN event_entity
WHERE ontology_event.eventID=event_entity.eventID
*/

/*描述*/
/*
INSERT INTO ontology_description(ontologyID,descriptionID) 
SELECT ontology_event.ontologyID,event_description.descriptionID 
FROM ontology_event
INNER JOIN event_description
WHERE ontology_event.eventID=event_description.eventID
*/

/*谓语*/
/*
INSERT INTO ontology_predicate(ontologyID,predicateID) 
SELECT ontology_event.ontologyID,event_predicate.predicateID 
FROM ontology_event
INNER JOIN event_predicate
WHERE ontology_event.eventID=event_predicate.eventID
*/

/*扩展*/
/*
INSERT INTO ontology_extra(ontologyID,extraID) 
SELECT ontology_event.ontologyID,event_extra.extraID 
FROM ontology_event
INNER JOIN event_extra
WHERE ontology_event.eventID=event_extra.eventID
*/