using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    #region EventTime
    [Serializable]
    public class EventTime:Time
    {
        public EventTime()
        {
            eventID = -1;
            //timeID = -1;
            count = -1;
            countRatio = -1;
            //updateTime = DateTime.MinValue;
        }

        public int eventID { get; set; }
        //public int timeID { get; set; }
        public int count { get; set; }
        public float countRatio { get; set; }
        //public DateTime updateTime { get; set; }
    }
    #endregion

    #region EventLocation
    [Serializable]
    public class EventLocation:Location
    {
        public EventLocation()
        {
            eventID = -1;
            //locationID = -1;
            count = -1;
            countRatio = -1;
            //updateTime = DateTime.MinValue;
        }

        public int eventID { get; set; }
        //public int locationID { get; set; }
        public int count { get; set; }
        public float countRatio { get; set; }
        //public DateTime updateTime { get; set; }
    }
    #endregion

    #region EventEntity
    [Serializable]
    public class EventEntity:Entity
    {
        public EventEntity()
        {
            eventID = -1;
            //entityID = -1;
            count = -1;
            countRatio = -1;
            //updateTime = DateTime.MinValue;
        }

        public int eventID { get; set; }
        //public int entityID { get; set; }
        public int count { get; set; }
        public float countRatio { get; set; }
        //public DateTime updateTime { get; set; }
    }
    #endregion

    #region EventDescription
    [Serializable]
    public class EventDescription:Description
    {
        public EventDescription()
        {
            eventID = -1;
            //descriptionID = -1;
            count = -1;
            countRatio = -1;
            //updateTime = DateTime.MinValue;
        }

        public int eventID { get; set; }
        //public int descriptionID { get; set; }
        public int count { get; set; }
        public float countRatio { get; set; }
        //public DateTime updateTime { get; set; }
    }
    #endregion

    #region EventPredicate
    [Serializable]
    public class EventPredicate:Predicate
    {
        public EventPredicate()
        {
            eventID = -1;
            //predicateID = -1;
            count = -1;
            countRatio = -1;
            //updateTime = DateTime.MinValue;
        }

        public int eventID { get; set; }
        //public int predicateID { get; set; }
        public int count { get; set; }
        public float countRatio { get; set; }
        //public DateTime updateTime { get; set; }
    }
    #endregion

    #region EventExtra
    [Serializable]
    public class EventExtra:Extra
    {
        public EventExtra()
        {
            eventID = -1;
            //extraID = -1;
            count = -1;
            countRatio = -1;
            //updateTime = DateTime.MinValue;
        }

        public int eventID { get; set; }
        //public int extraID { get; set; }
        public int count { get; set; }
        public float countRatio { get; set; }
        //public DateTime updateTime { get; set; }
    }
    #endregion

}
