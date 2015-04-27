using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
 
       #region 基本事件要素信息
       [Serializable]
       public class Event
       {    
           public Event()
            {
                eventID = -1;
                fromTime = DateTime.MinValue;
                fromURL = String.Empty;
                fromPlatform = String.Empty;
                fromPublisher = String.Empty;
                originalText = String.Empty;
                segmentedText = String.Empty;
                foundTime = DateTime.MinValue;
                updateTime = DateTime.MinValue;
            }
            public int eventID { get; set; }
            public DateTime fromTime { get; set; }
            public string fromURL { get; set; }
            public string fromPlatform { get; set; }
            public string fromPublisher { get; set; }
            public string originalText { get; set; }
            public string segmentedText { get; set; }
            public DateTime foundTime { get; set; }
            public DateTime updateTime { get; set; }

    }
        #endregion

       #region 基本时间要素信息
       [Serializable]
       public class Time
        {
            public Time()
            {
                timeID = -1;
                year = String.Empty;
                month = String.Empty;
                day = String.Empty;
                hour = String.Empty;
                minute = String.Empty;
                second = String.Empty;
                accurateLevel = -1;
                updateTime = DateTime.MinValue;
            }
            public int timeID { get; set; }
            public string year { get; set; }
            public string month { get; set; }
            public string day { get; set; }
            public string hour { get; set; }
            public string minute { get; set; }
            public string second { get; set; }
            public int accurateLevel { get; set; }
            public DateTime updateTime { get; set; }
        }
        #endregion 
        
       #region 基本地点要素信息
       [Serializable]
        public class Location 
        {
            public Location()
            {
                locationID = -1;
                parentLocationID = -1;
                location = String.Empty;
                accurateLevel = -1;
                updateTime = DateTime.MinValue;
            }

            public int locationID { get; set; }
            public int parentLocationID { get; set; }
            public string location { get; set; }
            public int accurateLevel{ get; set; }
            public DateTime updateTime { get; set; }
    }
    #endregion

       #region 基本实体要素信息
       [Serializable]
        public class Entity
        {
            public Entity()
            {
                entityID = -1;
                entity = String.Empty;
                entityType = String.Empty;
                updateTime = DateTime.MinValue;
            }

            public int entityID { get; set; }
            public string entity { get; set; }
            public string entityType { get; set; }
            public DateTime updateTime { get; set; }
        }
        #endregion

       #region 基本实体要素同义信息
       [Serializable]
        public class EntitySyn
        {
            public EntitySyn()
            {
                entityID = -1;
                synEntityID = -1;
                updateTime = DateTime.MinValue;
            }

            public int entityID { get; set; }
            public int synEntityID { get; set; }
            public DateTime updateTime { get; set; }
        }
        #endregion

       #region 基本描述要素信息
       [Serializable]
        public class Description
        {
            public Description()
            {
                descriptionID = -1;
                description = String.Empty;
                tendencyType = String.Empty;
                tendencyLevel = -1;
                updateTime = DateTime.MinValue;
            }

            public int descriptionID { get; set; }
            public string description { get; set; }
            public string tendencyType { get; set; }
            public float tendencyLevel { get; set; }
            public DateTime updateTime { get; set; }
        }
        #endregion

       #region 基本谓语要素信息
       [Serializable]
        public class Predicate
        {
            public Predicate()
            {
                predicateID = -1;
                predicate = String.Empty;
                updateTime = DateTime.MinValue;
            }

            public int predicateID { get; set; }
            public string predicate { get; set; }
            public DateTime updateTime { get; set; }
        }
        #endregion

       #region 基本扩展要素信息
       [Serializable]
        public class Extra
        {
            public Extra()
            {
                extraID = -1;
                extra = String.Empty;
                updateTime = DateTime.MinValue;
            }

            public int extraID { get; set; }
            public string extra { get; set; }
            public DateTime updateTime { get; set; }
        }
        #endregion
       
       #region 词-词性对
           [Serializable]
           public class Word
           {
               public Word()
               {
                   word = String.Empty;
                   wordType = String.Empty;
                   updateTime = DateTime.MinValue;
               }

               public string word { get; set; }
               public string wordType { get; set; }
               public DateTime updateTime { get; set; }
           }
           #endregion
}   