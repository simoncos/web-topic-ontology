using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    #region Ontology
    [Serializable]
    public class Ontology
    {
        public Ontology()
        {
            ontologyID = -1;
            topic = String.Empty;
            evolutionTimes = -1;
            foundTime = DateTime.MinValue;
            updateTime = DateTime.MinValue;
        }

        public int ontologyID { get; set; }
        public string topic { get; set; }
        public int evolutionTimes { get; set; }
        public DateTime foundTime { get; set; }
        public DateTime updateTime { get; set; }
    }
    #endregion

    #region OntologyEvent
    [Serializable]
    public class OntologyEvent:Event
    {
        public OntologyEvent()
        {
            ontologyID = -1;
            //eventID = -1;
            isRelevant = false;
            eventSim = -1;
            timeSim = -1;
            locationSim = -1;
            entitySim = -1;
            descriptionSim = -1;
            predicateSim = -1;
            extraSim = -1;
            topicSim = -1;
            //updateTime = DateTime.MinValue;
        }

        public int ontologyID { get; set; }
        //public int eventID { get; set; }
        public bool isRelevant{ get; set; }
        public float eventSim { get; set; }
        public float timeSim { get; set; }
        public float locationSim { get; set; }
        public float entitySim { get; set; }
        public float descriptionSim { get; set; }
        public float predicateSim { get; set; }
        public float extraSim { get; set; }
        public float topicSim { get; set; }
        //public DateTime updateTime { get; set; }
    }
    #endregion

    #region OntologyTime
    [Serializable]
    public class OntologyTime:Time
    {
        public OntologyTime()
        {
            ontologyID = -1;
            //timeID = -1;
            count = -1;
            countRatio = -1;
            //updateTime = DateTime.MinValue;
        }

        public int ontologyID { get; set; }
        //public int timeID { get; set; }
        public int count { get; set; }
        public float countRatio { get; set; }
        //public DateTime updateTime { get; set; }
    }
    #endregion

    #region OntologyLocation
    [Serializable]
    public class OntologyLocation:Location
    {
        public OntologyLocation()
        {
            ontologyID = -1;
            //locationID = -1;
            count = -1;
            countRatio = -1;
            //updateTime = DateTime.MinValue;
        }

        public int ontologyID { get; set; }
        //public int locationID { get; set; }
        public int count { get; set; }
        public float countRatio { get; set; }
        //public DateTime updateTime { get; set; }
    }
    #endregion

    #region OntologyEntity
    [Serializable]
    public class OntologyEntity:Entity
    {
        public OntologyEntity()
        {
            ontologyID = -1;
            //entityID = -1;
            count = -1;
            countRatio = -1;
            //updateTime = DateTime.MinValue;
        }

        public int ontologyID { get; set; }
        //public int entityID { get; set; }
        public int count { get; set; }
        public float countRatio { get; set; }
        //public DateTime updateTime { get; set; }
    }
    #endregion

    #region OntologyDescription
    [Serializable]
    public class OntologyDescription:Description
    {
        public OntologyDescription()
        {
            ontologyID = -1;
            //descriptionID = -1;
            count = -1;
            countRatio = -1;
            //updateTime = DateTime.MinValue;
        }

        public int ontologyID { get; set; }
        //public int descriptionID { get; set; }
        public int count { get; set; }
        public float countRatio { get; set; }
        //public DateTime updateTime { get; set; }
    }
    #endregion

    #region OntologyPredicate
    [Serializable]
    public class OntologyPredicate:Predicate
    {
        public OntologyPredicate()
        {
            ontologyID = -1;
            //predicateID = -1;
            count = -1;
            countRatio = -1;
            //updateTime = DateTime.MinValue;
        }

        public int ontologyID { get; set; }
        //public int predicateID { get; set; }
        public int count { get; set; }
        public float countRatio { get; set; }
        //public DateTime updateTime { get; set; }
    }
    #endregion

    #region OntologyExtra
    [Serializable]
    public class OntologyExtra:Extra
    {
        public OntologyExtra()
        {
            ontologyID = -1;
            //extraID = -1;
            count = -1;
            countRatio = -1;
            //updateTime = DateTime.MinValue;
        }

        public int ontologyID { get; set; }
        //public int extraID { get; set; }
        public int count { get; set; }
        public float countRatio { get; set; }
        //public DateTime updateTime { get; set; }
    }
    #endregion
}
