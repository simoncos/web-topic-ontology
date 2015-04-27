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
    class OntologyInfo_DAL
    {
        #region 本体要素信息参数数组

        private const string PARA_UPDATETIME = "_updateTime";
        private const string PARA_COUNT = "_count";
        private const string PARA_COUNTRATIO = "_countRatio";
        
        private const string PARA_ONTOLOGYID = "_ontologyID";
        private const string PARA_TOPIC = "_topic";
        private const string PARA_EVOLUTIONTIMES = "_evolutionTimes";
        private const string PARA_FOUNDTIME = "_foundTime";

        private const string PARA_EVENTID = "_eventID";
        private const string PARA_ISRELEVANT = "_isRelevant";
        private const string PARA_EVENTSIM = "_eventSim";
        private const string PARA_TIMESIM = "_timeSim";
        private const string PARA_LOCATIONSIM = "_locationSim";
        private const string PARA_ENTITYSIM = "_entitySim";
        private const string PARA_DESCRIPTIONSIM = "_descriptionSim";
        private const string PARA_PREDICATESIM = "_predicateSim";
        private const string PARA_EXTRASIM = "_extraSim";
        private const string PARA_TOPICSIM = "_topicSim";


        private const string PARA_TIMEID = "_timeID";
        private const string PARA_LOCATIONID = "_locationID";
        private const string PARA_ENTITYID = "_entityID";
        private const string PARA_DESCRIPTIONID = "_descriptionID";
        private const string PARA_PREDICATEID = "_predicateID";
        private const string PARA_EXTRAID = "_extraID";

        #endregion

        //插入/更新方法：

        # region 插入/更新本体

        /// <summary>
        /// 插入/更新本体
        /// </summary>
        /// <param name="ontologyInfo">本体信息</param>
        /// <returns>数据库受影响行数</returns>
        public int addOntology(Ontology ontologyInfo)
        {
            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_ONTOLOGYID,ontologyInfo.ontologyID),
                new MySqlParameter(PARA_TOPIC,ontologyInfo.topic),
                new MySqlParameter(PARA_EVOLUTIONTIMES,ontologyInfo.evolutionTimes),
                new MySqlParameter(PARA_FOUNDTIME,ontologyInfo.foundTime),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addOntology", param);

                if (dr > 0)
                {
                    return 1;
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

        # region 插入/更新本体相关事件

        /// <summary>
        /// 添加本体事件
        /// </summary>
        /// <param name="ontologyEventInfo">本体事件信息</param>
        /// <returns>数据库受影响行数</returns>
        public int addOntologyEvent(OntologyEvent ontologyEventInfo)
        {

            MySqlParameter[] param = new MySqlParameter[]
            {

                new MySqlParameter(PARA_ONTOLOGYID,ontologyEventInfo.ontologyID),
                new MySqlParameter(PARA_EVENTID,ontologyEventInfo.eventID),
                new MySqlParameter(PARA_ISRELEVANT,ontologyEventInfo.isRelevant),
                new MySqlParameter(PARA_EVENTSIM,ontologyEventInfo.eventSim),
                new MySqlParameter(PARA_TIMESIM,ontologyEventInfo.timeSim),
                new MySqlParameter(PARA_LOCATIONSIM,ontologyEventInfo.locationSim),
                new MySqlParameter(PARA_ENTITYSIM,ontologyEventInfo.entitySim),
                new MySqlParameter(PARA_DESCRIPTIONSIM,ontologyEventInfo.descriptionSim),
                new MySqlParameter(PARA_PREDICATESIM,ontologyEventInfo.predicateSim),
                new MySqlParameter(PARA_EXTRASIM,ontologyEventInfo.extraSim),
                new MySqlParameter(PARA_TOPICSIM,ontologyEventInfo.topicSim),
                new MySqlParameter(PARA_FOUNDTIME,DateTime.Now),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addOntologyEvent", param);

                if (dr > 0)
                {
                    return 1;
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

        # region 插入/更新本体时间，包括count处理

        /// <summary>
        /// 添加本体时间
        /// </summary>
        /// <param name="ontologyTimeInfo">本体时间信息</param>
        /// <returns>数据库受影响行数</returns>
        public int addOntologyTime(OntologyTime ontologyTimeInfo)
        {

            MySqlParameter[] param = new MySqlParameter[]
            {

                new MySqlParameter(PARA_ONTOLOGYID,ontologyTimeInfo.ontologyID),
                new MySqlParameter(PARA_TIMEID,ontologyTimeInfo.timeID),
                //new MySqlParameter(PARA_COUNT,ontologyTimeInfo.count),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addOntologyTime", param);

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

        # region 插入/更新本体地点，包括count处理

        /// <summary>
        /// 添加本体地点
        /// </summary>
        /// <param name="ontologyLocationInfo">本体地点信息</param>
        /// <returns>数据库受影响行数</returns>
        public int addOntologyLocation(OntologyLocation ontologyLocationInfo)
        {

            MySqlParameter[] param = new MySqlParameter[]
            {

                new MySqlParameter(PARA_ONTOLOGYID,ontologyLocationInfo.ontologyID),
                new MySqlParameter(PARA_LOCATIONID,ontologyLocationInfo.locationID),
                new MySqlParameter(PARA_COUNT,ontologyLocationInfo.count),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addOntologyLocation", param);

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

        # region 插入/更新本体实体，包括count处理

        /// <summary>
        /// 添加本体实体
        /// </summary>
        /// <param name="ontologyEntityInfo">本体实体信息</param>
        /// <returns>数据库受影响行数</returns>
        public int addOntologyEntity(OntologyEntity ontologyEntityInfo)
        {

            MySqlParameter[] param = new MySqlParameter[]
            {

                new MySqlParameter(PARA_ONTOLOGYID,ontologyEntityInfo.ontologyID),
                new MySqlParameter(PARA_ENTITYID,ontologyEntityInfo.entityID),
                new MySqlParameter(PARA_COUNT,ontologyEntityInfo.count),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addOntologyEntity", param);

                if (dr > 0)
                {
                    return dr;//只可能为1，若大于1说明有bug
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

        # region 插入/更新本体描述，包括count处理

        /// <summary>
        /// 添加本体描述
        /// </summary>
        /// <param name="ontologyDescriptionInfo">本体描述信息</param>
        /// <returns>数据库受影响行数</returns>
        public int addOntologyDescription(OntologyDescription ontologyDescriptionInfo)
        {

            MySqlParameter[] param = new MySqlParameter[]
            {

                new MySqlParameter(PARA_ONTOLOGYID,ontologyDescriptionInfo.ontologyID),
                new MySqlParameter(PARA_DESCRIPTIONID,ontologyDescriptionInfo.descriptionID),
                new MySqlParameter(PARA_COUNT,ontologyDescriptionInfo.count),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addOntologyDescription", param);

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

        # region 插入/更新本体谓语，包括count处理

        /// <summary>
        /// 添加本体谓语
        /// </summary>
        /// <param name="ontologyPredicateInfo">本体谓语信息</param>
        /// <returns>数据库受影响行数</returns>
        public int addOntologyPredicate(OntologyPredicate ontologyPredicateInfo)
        {

            MySqlParameter[] param = new MySqlParameter[]
            {

                new MySqlParameter(PARA_ONTOLOGYID,ontologyPredicateInfo.ontologyID),
                new MySqlParameter(PARA_PREDICATEID,ontologyPredicateInfo.predicateID),
                new MySqlParameter(PARA_COUNT,ontologyPredicateInfo.count),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addOntologyPredicate", param);

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

        # region 插入/更新本体扩展，包括count处理

        /// <summary>
        /// 添加本体扩展
        /// </summary>
        /// <param name="ontologyExtraInfo">本体扩展信息</param>
        /// <returns>数据库受影响行数</returns>
        public int addOntologyExtra(OntologyExtra ontologyExtraInfo)
        {

            MySqlParameter[] param = new MySqlParameter[]
            {

                new MySqlParameter(PARA_ONTOLOGYID,ontologyExtraInfo.ontologyID),
                new MySqlParameter(PARA_EXTRAID,ontologyExtraInfo.extraID),
                new MySqlParameter(PARA_COUNT,ontologyExtraInfo.count),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_addOntologyExtra", param);

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

        # region 更新本体要素信息countRatio
        /// <summary>
        /// 更新本体要素信息countRatio
        /// </summary>
        /// <param name="ontologyID">要计算countRatio的本体id</param>
        /// <returns>数据库受影响行数</returns>
        public int updateOntologyCountRatio(int ontologyID)
        {
            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_ONTOLOGYID,ontologyID),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_ontologyCountRatio", param);

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


        # region 按事件ID将事件信息全部导入本体(废)
        /// <summary>
        /// 按事件ID将事件信息全部导入本体
        /// </summary>
        /// <param name="ontologyID">将进化的本体ID</param>
        /// <param name="similarEventID">将导入的事件ID</param>
        /// <returns>数据库受影响行数</returns>
        public int updateOntologyByEventID(int ontologyID, int similarEventID)
        {
            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_ONTOLOGYID,ontologyID),
                new MySqlParameter(PARA_EVENTID,similarEventID),
                new MySqlParameter(PARA_UPDATETIME,DateTime.Now)
            };
            try
            {
                int dr = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.StoredProcedure, "p_updateOntologyByEventID", param);

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

        # region 查询本体信息

        /// <summary>
        /// 查询本体信息
        /// </summary>
        /// <param name="ontologyID">对应的本体id</param>
        /// <returns>ontologyInfo</returns>
        public Ontology selectOntology(int ontologyID)
        {
            Ontology ontologyInfo = new Ontology();
            MySqlParameter[] param = new MySqlParameter[]
            {
                new MySqlParameter(PARA_ONTOLOGYID,ontologyID)
            };
            string cmd = "select * from ontology where ontologyID=_ontologyID";

            try
            {
                MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.Text, cmd);
                if (dr.Read())
                {
                    ontologyInfo.ontologyID = Convert.ToInt32(dr["ontologyID"].ToString().Trim());
                    ontologyInfo.topic = dr["topic"].ToString().Trim();
                    ontologyInfo.evolutionTimes = Convert.ToInt32(dr["evolutionTimes"].ToString().Trim());
                    ontologyInfo.foundTime = Convert.ToDateTime(dr["foundTime"].ToString().Trim());
                    ontologyInfo.updateTime = Convert.ToDateTime(dr["updateTime"].ToString().Trim());
                }
                dr.Close();
                return ontologyInfo;
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        # region 查询本体的所有事件信息

        /// <summary>
        /// 查询本体的所有事件信息
        /// </summary>
        /// <param name="ontologyID">事件对应的本体id</param>
        /// <returns>OntologyEvent_list</returns>
        public List<OntologyEvent> selectOntologyEvent(int ontologyID)
        {
            try
            {
                List<OntologyEvent> ontologyEvent_list = new List<OntologyEvent>();
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter(PARA_ONTOLOGYID,ontologyID)
                };
                string cmd = "select * from ontology_event inner join event where ontologyID=_ontologyID and ontology_event.eventID=event.eventID";
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.Text, cmd))
                {
                    while (dr.Read())
                    {
                        OntologyEvent ontologyEvent = new OntologyEvent();
                        ontologyEvent.ontologyID = Convert.ToInt32(dr["ontologyID"].ToString().Trim());
                        ontologyEvent.eventID = Convert.ToInt32(dr["extraID"].ToString().Trim());
                        ontologyEvent.isRelevant = Convert.ToBoolean(dr["isRelevant"].ToString().Trim());
                        ontologyEvent.eventSim = Convert.ToSingle(dr["eventSim"].ToString().Trim());
                        ontologyEvent.timeSim = Convert.ToSingle(dr["timeSim"].ToString().Trim());
                        ontologyEvent.locationSim = Convert.ToSingle(dr["locationSim"].ToString().Trim());
                        ontologyEvent.entitySim = Convert.ToSingle(dr["entitySim"].ToString().Trim());
                        ontologyEvent.descriptionSim = Convert.ToSingle(dr["descriptionSim"].ToString().Trim());
                        ontologyEvent.predicateSim = Convert.ToSingle(dr["predicateSim"].ToString().Trim());
                        ontologyEvent.extraSim = Convert.ToSingle(dr["extraSim"].ToString().Trim());
                        ontologyEvent.topicSim = Convert.ToSingle(dr["topicSim"].ToString().Trim());
                        ontologyEvent.fromTime = Convert.ToDateTime(dr["fromTime"].ToString().Trim());
                        ontologyEvent.fromURL = dr["fromURL"].ToString().Trim();
                        ontologyEvent.fromPlatform = dr["fromPlatform"].ToString().Trim();
                        ontologyEvent.fromPublisher = dr["fromPublisher"].ToString().Trim();
                        ontologyEvent.originalText = dr["originalText"].ToString().Trim();
                        ontologyEvent.segmentedText = dr["segmentedText"].ToString().Trim();
                        ontologyEvent.foundTime = Convert.ToDateTime(dr["foundTime"].ToString().Trim());
                        ontologyEvent.updateTime = Convert.ToDateTime(dr["updateTime"]);
                        ontologyEvent_list.Add(ontologyEvent);
                    }
                    dr.Close();
                    return ontologyEvent_list;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        # region 查询本体的所有时间信息

        /// <summary>
        /// 查询本体的所有时间信息
        /// </summary>
        /// <param name="ontologyID">时间对应的本体id</param>
        /// <returns>OntologyTime_list</returns>
        public List<OntologyTime> selectOntologyTime(int ontologyID)
        {
            try
            {
                List<OntologyTime> ontologyTime_list = new List<OntologyTime>();
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter(PARA_ONTOLOGYID,ontologyID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure,"p_selectOntologyTime",param))
                {
                    while (dr.Read())
                    {
                        OntologyTime ontologyTime = new OntologyTime();
                        ontologyTime.ontologyID = Convert.ToInt32(dr["ontologyID"].ToString().Trim());
                        ontologyTime.timeID = Convert.ToInt32(dr["timeID"].ToString().Trim());
                        ontologyTime.year = dr["year"].ToString().Trim();
                        ontologyTime.month = dr["month"].ToString().Trim();
                        ontologyTime.day = dr["day"].ToString().Trim();
                        ontologyTime.hour = dr["hour"].ToString().Trim();
                        ontologyTime.minute = dr["minute"].ToString().Trim();
                        ontologyTime.second = dr["second"].ToString().Trim();
                        ontologyTime.accurateLevel = Convert.ToInt32(dr["accurateLevel"].ToString().Trim());
                        ontologyTime.count = Convert.ToInt32(dr["count"].ToString().Trim());
                        ontologyTime.countRatio = Convert.ToSingle(dr["countRatio"].ToString().Trim());
                        ontologyTime.updateTime = Convert.ToDateTime(dr["updateTime"].ToString().Trim());
                        ontologyTime_list.Add(ontologyTime);
                    }
                    dr.Close();
                    return ontologyTime_list;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        # region 查询本体的所有地点信息

        /// <summary>
        /// 查询本体的所有地点信息
        /// </summary>
        /// <param name="ontologyID">地点对应的本体id</param>
        /// <returns>OntologyLocation_list</returns>
        public List<OntologyLocation> selectOntologyLocation(int ontologyID)
        {
            try
            {
                List<OntologyLocation> ontologyLocation_list = new List<OntologyLocation>();
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter(PARA_ONTOLOGYID,ontologyID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectOntologyLocation", param))
                {
                    while (dr.Read())
                    {
                        OntologyLocation ontologyLocation = new OntologyLocation();
                        ontologyLocation.ontologyID = Convert.ToInt32(dr["ontologyID"].ToString().Trim());
                        ontologyLocation.locationID = Convert.ToInt32(dr["locationID"].ToString().Trim());
                        ontologyLocation.parentLocationID = Convert.ToInt32(dr["parentLocation"].ToString().Trim());
                        ontologyLocation.location = dr["location"].ToString().Trim();
                        ontologyLocation.count = Convert.ToInt32(dr["count"].ToString().Trim());
                        ontologyLocation.countRatio = Convert.ToSingle(dr["countRatio"].ToString().Trim());
                        ontologyLocation.updateTime = Convert.ToDateTime(dr["updateTime"].ToString().Trim());
                        ontologyLocation_list.Add(ontologyLocation);
                    }
                    dr.Close();
                    return ontologyLocation_list;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        # region 查询本体的所有实体信息

        /// <summary>
        /// 查询本体的所有实体信息
        /// </summary>
        /// <param name="ontologyID">实体对应的本体id</param>
        /// <returns>OntologyEntity_list</returns>
        public List<OntologyEntity> selectOntologyEntity(int ontologyID)
        {
            try
            {
                List<OntologyEntity> ontologyEntity_list = new List<OntologyEntity>();
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter(PARA_ONTOLOGYID,ontologyID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectOntologyEntity", param))
                {
                    while (dr.Read())
                    {
                        OntologyEntity ontologyEntity = new OntologyEntity();
                        ontologyEntity.ontologyID = Convert.ToInt32(dr["ontologyID"].ToString().Trim());
                        ontologyEntity.entityID = Convert.ToInt32(dr["entityID"].ToString().Trim());
                        ontologyEntity.entityType = dr["entityType"].ToString().Trim();
                        ontologyEntity.entity = dr["entity"].ToString().Trim();
                        ontologyEntity.count = Convert.ToInt32(dr["count"].ToString().Trim());
                        ontologyEntity.countRatio = Convert.ToSingle(dr["countRatio"].ToString().Trim());
                        ontologyEntity.updateTime = Convert.ToDateTime(dr["updateTime"].ToString().Trim());
                        ontologyEntity_list.Add(ontologyEntity);
                    }
                    dr.Close();
                    return ontologyEntity_list;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        # region 查询本体的所有描述信息

        /// <summary>
        /// 查询本体的所有描述信息
        /// </summary>
        /// <param name="ontologyID">描述对应的本体id</param>
        /// <returns>OntologyDescription_list</returns>
        public List<OntologyDescription> selectOntologyDescription(int ontologyID)
        {
            try
            {
                List<OntologyDescription> ontologyDescription_list = new List<OntologyDescription>();
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter(PARA_ONTOLOGYID,ontologyID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectOntologyDescription", param))
                {
                    while (dr.Read())
                    {
                        OntologyDescription ontologyDescription = new OntologyDescription();
                        ontologyDescription.ontologyID = Convert.ToInt32(dr["ontologyID"].ToString().Trim());
                        ontologyDescription.descriptionID = Convert.ToInt32(dr["descriptionID"].ToString().Trim());
                        ontologyDescription.tendencyType = dr["tendencyType"].ToString().Trim();
                        ontologyDescription.tendencyLevel = Convert.ToSingle(dr["tendencyLevel"].ToString().Trim());
                        ontologyDescription.description = dr["description"].ToString().Trim();
                        ontologyDescription.count = Convert.ToInt32(dr["count"].ToString().Trim());
                        ontologyDescription.countRatio = Convert.ToSingle(dr["countRatio"].ToString().Trim());
                        ontologyDescription.updateTime = Convert.ToDateTime(dr["updateTime"].ToString().Trim());
                        ontologyDescription_list.Add(ontologyDescription);
                    }
                    dr.Close();
                    return ontologyDescription_list;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }

        }
        #endregion

        # region 查询本体的所有谓语信息

        /// <summary>
        /// 查询本体的所有谓语信息
        /// </summary>
        /// <param name="ontologyID">谓语对应的本体id</param>
        /// <returns>OntologyPredicate_list</returns>
        public List<OntologyPredicate> selectOntologyPredicate(int ontologyID)
        {
            try
            {
                List<OntologyPredicate> ontologyPredicate_list = new List<OntologyPredicate>();
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter(PARA_ONTOLOGYID,ontologyID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectOntologyPredicate", param))
                {
                    while (dr.Read())
                    {
                        OntologyPredicate ontologyPredicate = new OntologyPredicate();
                        ontologyPredicate.ontologyID = Convert.ToInt32(dr["ontologyID"].ToString().Trim());
                        ontologyPredicate.predicateID = Convert.ToInt32(dr["predicateID"].ToString().Trim());
                        ontologyPredicate.predicate = dr["predicate"].ToString().Trim();
                        ontologyPredicate.count = Convert.ToInt32(dr["count"].ToString().Trim());
                        ontologyPredicate.countRatio = Convert.ToSingle(dr["countRatio"].ToString().Trim());
                        ontologyPredicate.updateTime = Convert.ToDateTime(dr["updateTime"].ToString().Trim());
                        ontologyPredicate_list.Add(ontologyPredicate);
                    }
                    dr.Close();
                    return ontologyPredicate_list;
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        # region 查询本体的所有扩展信息

        /// <summary>
        /// 查询本体的所有扩展信息
        /// </summary>
        /// <param name="ontologyID">扩展对应的本体id</param>
        /// <returns>OntologyExtra_list</returns>
        public List<OntologyExtra> selectOntologyExtra(int ontologyID)
        {
            try
            {
                List<OntologyExtra> ontologyExtra_list = new List<OntologyExtra>();
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter(PARA_ONTOLOGYID,ontologyID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectOntologyExtra", param))
                {
                    while (dr.Read())
                    {
                        OntologyExtra ontologyExtra = new OntologyExtra();
                        ontologyExtra.ontologyID = Convert.ToInt32(dr["ontologyID"].ToString().Trim());
                        ontologyExtra.extraID = Convert.ToInt32(dr["extraID"].ToString().Trim());
                        ontologyExtra.extra = dr["extra"].ToString().Trim();
                        ontologyExtra.count = Convert.ToInt32(dr["count"].ToString().Trim());
                        ontologyExtra.countRatio = Convert.ToSingle(dr["countRatio"].ToString().Trim());
                        ontologyExtra.updateTime = Convert.ToDateTime(dr["updateTime"].ToString().Trim());
                        ontologyExtra_list.Add(ontologyExtra);
                    }
                    dr.Close();
                    return ontologyExtra_list;
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
