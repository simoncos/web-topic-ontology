using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using MySql.Data;
using Model;
using System.Data;

namespace ontology.ontoDAL
{
    class EventInfo_DAL
    {

        #region 事件要素信息参数数组

        private const string PARA_UPDATETIME = "_updateTime";
        private const string PARA_COUNT = "_count";
        private const string PARA_ACCURATELEVEL = "_accurateLevel";


        private const string PARA_EVENTID = "_eventID";
        private const string PARA_FROMTIME = "_fromTime";
        private const string PARA_FROMURL = "_fromURL";
        private const string PARA_FROMPLATFORM = "_fromPlatform";
        private const string PARA_FROMPUBLISHER = "_fromPublisher";
        private const string PARA_ORIGINALTEXT = "_originalText";
        private const string PARA_SEGMENTEDTEXT = "_segmentedText";
        private const string PARA_FOUNDTIME = "_foundTime"; 

        private const string PARA_TIMEID = "_timeID";
        private const string PARA_YEAR = "_year";
        private const string PARA_MONTH = "_month";
        private const string PARA_DAY = "_day";
        private const string PARA_HOUR = "_hour";
        private const string PARA_MINUTE = "_minute";
        private const string PARA_SECOND = "_second";

        private const string PARA_LOCATIONID = "_locationID";
        private const string PARA_PARENTLOCATIONID = "_parentLocationID";
        private const string PARA_LOCATION = "_location";


        private const string PARA_ENTITYID = "_entityID";
        private const string PARA_ENTITY = "_entity";
        private const string PARA_ENTITYTYPE = "_entityType";

        private const string PARA_DESCRIPTIONID = "_descriptionID";
        private const string PARA_DESCRIPTION = "_description";
        private const string PARA_TENDENCYTYPE = "_tendencyType";
        private const string PARA_TENDENCYLEVEL = "_tendencyLevel";

        private const string PARA_PREDICATEID = "_predicateID";
        private const string PARA_PREDICATE = "_predicate";

        private const string PARA_EXTRAID = "_extraID";
        private const string PARA_EXTRA = "_extra";
        #endregion

        //插入/更新方法：

        # region 插入/更新事件，包括count处理

        /// <summary>
        /// 插入/更新事件
        /// </summary>
        /// <param name="eventInfo">事件信息</param>
        /// <returns>生成的事件ID</returns>
        public int addEvent(Event eventInfo)
        {
            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_EVENTID,eventInfo.eventID),
                new MySqlParameter(PARA_FROMTIME,eventInfo.fromTime),
                new MySqlParameter(PARA_FROMURL,eventInfo.fromURL),
                new MySqlParameter(PARA_FROMPLATFORM,eventInfo.fromPlatform),
                new MySqlParameter(PARA_FROMPUBLISHER,eventInfo.fromPublisher),
                new MySqlParameter(PARA_ORIGINALTEXT,eventInfo.originalText),
                new MySqlParameter(PARA_SEGMENTEDTEXT,eventInfo.segmentedText),
                new MySqlParameter(PARA_FOUNDTIME,eventInfo.foundTime),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addEvent", param);

                if (dr.Read())
                {
                    int eventID = Convert.ToInt32(dr["eventID"]);
                    return eventID;
                }
                else
                {
                    return -1;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        # endregion

        # region 按eventID更新事件分词文本及from信息

        /// <summary>
        /// 按eventID更新事件分词文本及from信息
        /// </summary>
        /// <param name="eventInfo">事件信息</param>
        /// <returns>数据库影响行数</returns>
        public int updateEventByID(Event eventInfo)
        {
            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_EVENTID,eventInfo.eventID),
                new MySqlParameter(PARA_SEGMENTEDTEXT,eventInfo.segmentedText),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_updateEventByID", param);

                if (dr > 0)
                {
                    return dr;
                }
                else
                {
                    return -1;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        # endregion

        # region 按事件插入/更新时间，包括count处理

        /// <summary>
        /// 插入/更新时间
        /// </summary>
        /// <param name="timeInfo">时间信息</param>
        /// <param name="eventID">时间对应的事件id</param>
        /// <returns>数据库受影响行数</returns>
        public int addTime(Time timeInfo, int eventID)
        {

            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_EVENTID,eventID),
                new MySqlParameter(PARA_TIMEID,timeInfo.timeID),
                new MySqlParameter(PARA_YEAR,timeInfo.year),
                new MySqlParameter(PARA_MONTH,timeInfo.month),
                new MySqlParameter(PARA_DAY,timeInfo.day),
                new MySqlParameter(PARA_HOUR,timeInfo.hour),
                new MySqlParameter(PARA_MINUTE,timeInfo.minute),
                new MySqlParameter(PARA_SECOND,timeInfo.second),
                new MySqlParameter(PARA_ACCURATELEVEL,timeInfo.accurateLevel),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addTime", param);

                if (dr > 0)
                {
                    return dr;
                }
                else
                {
                    return 0;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        # endregion

        # region 按事件插入/更新地点，包括count处理

        /// <summary>
        /// 插入/更新地点
        /// </summary>
        /// <param name="locationInfo">地点信息</param>
        /// <param name="eventID">地点对应的事件id</param>
        /// <returns>数据库受影响行数</returns>
        public int addLocation(Location locationInfo, int eventID)
        {

            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_EVENTID,eventID),
                new MySqlParameter(PARA_LOCATIONID,locationInfo.locationID),
                new MySqlParameter(PARA_PARENTLOCATIONID,locationInfo.parentLocationID),
                new MySqlParameter(PARA_LOCATION,locationInfo.location),
                new MySqlParameter(PARA_ACCURATELEVEL,locationInfo.accurateLevel),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addLocation", param);

                if (dr > 0)
                {
                    return dr;
                }
                else
                {
                    return 0;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        # endregion

        # region 按事件插入/更新实体，包括count处理

        /// <summary>
        /// 插入/更新实体
        /// </summary>
        /// <param name="entityInfo">实体信息</param>
        /// <param name="eventID">实体对应的事件id</param>
        /// <returns>数据库受影响行数</returns>
        public int addEntity(Entity entityInfo, int eventID)
        {

            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_EVENTID,eventID),
                new MySqlParameter(PARA_ENTITYID,entityInfo.entityID),
                new MySqlParameter(PARA_ENTITY,entityInfo.entity),
                new MySqlParameter(PARA_ENTITYTYPE,entityInfo.entityType),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addEntity", param);

                if (dr > 0)
                {
                    return dr;
                }
                else
                {
                    return 0;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        # endregion

        # region 按事件插入/更新描述，包括count处理

        /// <summary>
        /// 插入/更新描述
        /// </summary>
        /// <param name="descriptionInfo">描述信息</param>
        /// <param name="eventID">描述对应的事件id</param>
        /// <returns>数据库受影响行数</returns>
        public int addDescription(Description descriptionInfo, int eventID)
        {

            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_EVENTID,eventID),
                new MySqlParameter(PARA_DESCRIPTIONID,descriptionInfo.descriptionID),
                new MySqlParameter(PARA_DESCRIPTION,descriptionInfo.description),
                new MySqlParameter(PARA_TENDENCYTYPE,descriptionInfo.tendencyType),
                new MySqlParameter(PARA_TENDENCYLEVEL,descriptionInfo.tendencyLevel),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addDescription", param);

                if (dr > 0)
                {
                    return dr;
                }
                else
                {
                    return 0;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        # endregion

        # region 按事件插入/更新谓语，包括count处理

        /// <summary>
        /// 插入/更新谓语
        /// </summary>
        /// <param name="predicateInfo">谓语信息</param>
        /// <param name="eventID">谓语对应的事件id</param>
        /// <returns>数据库受影响行数</returns>
        public int addPredicate(Predicate predicateInfo, int eventID)
        {

            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_EVENTID,eventID),
                new MySqlParameter(PARA_PREDICATEID,predicateInfo.predicateID),
                new MySqlParameter(PARA_PREDICATE,predicateInfo.predicate),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addPredicate", param);

                if (dr > 0)
                {
                    return dr;
                }
                else
                {
                    return 0;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        # endregion

        # region 按事件插入/更新扩展，包括count处理

        /// <summary>
        /// 插入/更新扩展
        /// </summary>
        /// <param name="predicateInfo">扩展信息</param>
        /// <param name="eventID">扩展对应的事件id</param>
        /// <returns>数据库受影响行数</returns>
        public int addExtra(Extra extraInfo, int eventID)
        {

            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_EVENTID,eventID),
                new MySqlParameter(PARA_EXTRAID,extraInfo.extraID),
                new MySqlParameter(PARA_EXTRA,extraInfo.extra),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addExtra", param);

                if (dr > 0)
                {
                    return dr;
                }
                else
                {
                    return 0;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        # endregion

        # region 更新事件要素信息countRatio
        /// <summary>
        /// 更新事件要素信息countRatio
        /// </summary>
        /// <param name="eventID">要计算countRatio的事件id</param>
        /// <returns>数据库受影响行数</returns>
        public int updateEventCountRatio(int eventID)
        {
            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_EVENTID,eventID),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_eventCountRatio", param);

                if (dr > 0)
                {
                    return dr;
                }
                else
                {
                    return 0;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        //查询方法：

        # region 通过ID查询事件信息

        /// <summary>
        /// 查询事件信息
        /// </summary>
        /// <param name="eventID">对应的事件id</param>
        /// <returns>eventInfo</returns>
        public Event selectEvent(int eventID)
        {
            Event eventInfo = new Event();
            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_EVENTID,eventID)
            };
            try
            {
                MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure,"p_selectEventByID", param);
                if (dr.Read())
                {
                    eventInfo.eventID = Convert.ToInt32(dr["eventID"].ToString().Trim());
                    eventInfo.fromTime = Convert.ToDateTime(dr["fromTime"].ToString().Trim());
                    eventInfo.fromURL = dr["fromURL"].ToString().Trim();
                    eventInfo.fromPlatform = dr["fromPlatform"].ToString().Trim();
                    eventInfo.fromPublisher = dr["fromPublisher"].ToString().Trim();
                    eventInfo.originalText = dr["originalText"].ToString().Trim();
                    eventInfo.segmentedText = dr["segmentedText"].ToString().Trim();
                    eventInfo.foundTime = Convert.ToDateTime(dr["foundTime"].ToString().Trim());
                    eventInfo.updateTime = Convert.ToDateTime(dr["updateTime"].ToString().Trim());
                }
                dr.Close();
                return eventInfo;
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }

        #endregion

        # region 通过ID查询事件的所有时间信息

        /// <summary>
        /// 查询事件的所有时间信息
        /// </summary>
        /// <param name="eventID">时间对应的事件id</param>
        /// <returns>EventTime_list</returns>
        public List<EventTime> selectEventTime(int eventID)
        {
            try
            {
                List<EventTime> eventTime_list=new List<EventTime>();
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter(PARA_EVENTID,eventID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectEventTime", param))
                {
                    while(dr.Read())
                    {
                        EventTime eventTime = new EventTime();
                        eventTime.eventID = Convert.ToInt32(dr["eventID"].ToString().Trim());
                        eventTime.timeID = Convert.ToInt32(dr["timeID"].ToString().Trim());
                        eventTime.year = dr["year"].ToString().Trim();
                        eventTime.month = dr["month"].ToString().Trim();
                        eventTime.day = dr["day"].ToString().Trim();
                        eventTime.hour = dr["hour"].ToString().Trim();
                        eventTime.minute = dr["minute"].ToString().Trim();
                        eventTime.second = dr["second"].ToString().Trim();
                        eventTime.accurateLevel = Convert.ToInt32(dr["accurateLevel"].ToString().Trim());
                        eventTime.count = Convert.ToInt32(dr["count"].ToString().Trim());
                        eventTime.countRatio = Convert.ToSingle(dr["countRatio"].ToString().Trim());
                        eventTime.updateTime = Convert.ToDateTime(dr["updateTime"].ToString().Trim());
                        eventTime_list.Add(eventTime);
                    }
                    dr.Close();
                    return eventTime_list;
                }
            }
             catch (System.Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        # region 通过ID查询事件的所有地点信息（TODO：改为存储过程）

        /// <summary>
        /// 查询事件的所有地点信息
        /// </summary>
        /// <param name="eventID">地点对应的事件id</param>
        /// <returns>Eventlocation_list</returns>
        public List<EventLocation> selectEventLocation(int eventID)
        {
            try
            {
                List<EventLocation> eventLocation_list=new List<EventLocation>();
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter(PARA_EVENTID,eventID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectEventLocation", param))
                {
                    while(dr.Read())
                    {
                        EventLocation eventLocation = new EventLocation();
                        eventLocation.eventID = Convert.ToInt32(dr["eventID"]);
                        eventLocation.locationID = Convert.ToInt32(dr["locationID"]);
                        eventLocation.parentLocationID = Convert.ToInt32(dr["parentLocationID"]);
                        eventLocation.location = dr["location"].ToString().Trim();
                        eventLocation.count = Convert.ToInt32(dr["count"].ToString().Trim());
                        eventLocation.countRatio = Convert.ToSingle(dr["countRatio"].ToString().Trim());
                        eventLocation.updateTime = Convert.ToDateTime(dr["updateTime"]);
                        eventLocation_list.Add(eventLocation);
                    }
                    dr.Close();
                    return eventLocation_list;
                }
            }
             catch (System.Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        # region 通过ID查询事件的所有实体信息

        /// <summary>
        /// 查询事件的所有实体信息
        /// </summary>
        /// <param name="eventID">实体对应的事件id</param>
        /// <returns>EventEntity_list</returns>
        public List<EventEntity> selectEventEntity(int eventID)
        {
            try
            {
                List<EventEntity> eventEntity_list = new List<EventEntity>();
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter(PARA_EVENTID,eventID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectEventEntity", param))
                {
                    while (dr.Read())
                    {
                        EventEntity eventEntity = new EventEntity();
                        eventEntity.eventID = Convert.ToInt32(dr["eventID"]);
                        eventEntity.entityID = Convert.ToInt32(dr["entityID"]);
                        eventEntity.entityType = dr["entityType"].ToString().Trim();
                        eventEntity.entity = dr["entity"].ToString().Trim();
                        eventEntity.count = Convert.ToInt32(dr["count"].ToString().Trim());
                        eventEntity.countRatio = Convert.ToSingle(dr["countRatio"].ToString().Trim());
                        eventEntity.updateTime = Convert.ToDateTime(dr["updateTime"]);
                        eventEntity_list.Add(eventEntity);
                    }
                    dr.Close();
                    return eventEntity_list;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        # region 通过ID查询事件的所有描述信息

        /// <summary>
        /// 查询事件的所有描述信息
        /// </summary>
        /// <param name="eventID">描述对应的事件id</param>
        /// <returns>EventDescription_list</returns>
        public List<EventDescription> selectEventDescription(int eventID)
        {
            try
            {
                List<EventDescription> eventEntity_list = new List<EventDescription>();
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter(PARA_EVENTID,eventID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectEventDescription", param))
                {
                    while (dr.Read())
                    {
                        EventDescription eventDescription = new EventDescription();
                        eventDescription.eventID = Convert.ToInt32(dr["eventID"]);
                        eventDescription.descriptionID = Convert.ToInt32(dr["descriptionID"]);
                        eventDescription.tendencyType = dr["tendencyType"].ToString().Trim();
                        eventDescription.tendencyLevel = Convert.ToSingle(dr["tendencyLevel"].ToString().Trim());
                        eventDescription.description = dr["description"].ToString().Trim();
                        eventDescription.count = Convert.ToInt32(dr["count"].ToString().Trim());
                        eventDescription.countRatio = Convert.ToSingle(dr["countRatio"].ToString().Trim());
                        eventDescription.updateTime = Convert.ToDateTime(dr["updateTime"]);
                        eventEntity_list.Add(eventDescription);
                    }
                    dr.Close();
                    return eventEntity_list;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        # region 通过ID查询事件的所有谓语信息

        /// <summary>
        /// 查询事件的所有谓语信息
        /// </summary>
        /// <param name="eventID">谓语对应的事件id</param>
        /// <returns>EventPredicate_list</returns>
        public List<EventPredicate> selectEventPredicate(int eventID)
        {
            try
            {
                List<EventPredicate> eventPredicate_list = new List<EventPredicate>();
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter(PARA_EVENTID,eventID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectEventPredicate", param))
                {
                    while (dr.Read())
                    {
                        EventPredicate eventPredicate = new EventPredicate();
                        eventPredicate.eventID = Convert.ToInt32(dr["eventID"]);
                        eventPredicate.predicateID = Convert.ToInt32(dr["predicateID"]);
                        eventPredicate.predicate = dr["predicate"].ToString().Trim();
                        eventPredicate.count = Convert.ToInt32(dr["count"].ToString().Trim());
                        eventPredicate.countRatio = Convert.ToSingle(dr["countRatio"].ToString().Trim());
                        eventPredicate.updateTime = Convert.ToDateTime(dr["updateTime"]);
                        eventPredicate_list.Add(eventPredicate);
                    }
                    dr.Close();
                    return eventPredicate_list;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        # region 通过ID查询事件的所有扩展信息

        /// <summary>
        /// 查询事件的所有扩展信息
        /// </summary>
        /// <param name="eventID">扩展对应的事件id</param>
        /// <returns>EventExtra_list</returns>
        public List<EventExtra> selectEventExtra(int eventID)
        {
            try
            {
                List<EventExtra> eventExtra_list = new List<EventExtra>();
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter(PARA_EVENTID,eventID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectEventExtra", param))
                {
                    while (dr.Read())
                    {
                        EventExtra eventExtra = new EventExtra();
                        eventExtra.eventID = Convert.ToInt32(dr["eventID"]);
                        eventExtra.extraID = Convert.ToInt32(dr["extraID"]);
                        eventExtra.extra = dr["extra"].ToString().Trim();
                        eventExtra.count = Convert.ToInt32(dr["count"].ToString().Trim());
                        eventExtra.countRatio = Convert.ToSingle(dr["countRatio"].ToString().Trim());
                        eventExtra.updateTime = Convert.ToDateTime(dr["updateTime"]);
                        eventExtra_list.Add(eventExtra);
                    }
                    dr.Close();
                    return eventExtra_list;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        #endregion


    }
}
