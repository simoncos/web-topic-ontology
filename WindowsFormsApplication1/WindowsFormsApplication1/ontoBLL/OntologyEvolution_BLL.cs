using Model;
using MySql.Data.MySqlClient;
using ontology.ontoDAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace ontology.ontoBLL
{
    class OntologyEvolution_BLL
    {
        # region Todo：事件要素权重计算

        /// <summary>
        /// 事件要素权重计算
        /// </summary>
        /// <param name="ontologyID">话题本体ID</param>
        /// <param name="eventID">事件ID</param>
        /// <returns>事件要素相似度</returns>
        public float calculateEventWeight(int ontologyID, int eventID)
        {
            //权重设定
            float weight_fromTime = (float)1 / 3;
            float weight_fromPlatform = (float)1 / 3;
            float weight_fromPublisher = (float)1 / 3;

            float eventWeight = 0;
            float value_fromTime = 0;
            float value_fromPlatform = 0;
            float value_fromPublisher = 0;

            try
            {
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter("_eventID",eventID)
                };
                MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectForEventWeight", param);
                if (dr.Read())
                {
                    if (dr["fromPlatform"].ToString().Trim() == "SinaWeibo")
                    {
                        value_fromPlatform = (float)1 / 3;
                    }
                    else if (dr["fromPlatform"].ToString().Trim() == "OtherPlatforms")
                    {
                        value_fromPlatform = (float)2 / 3;
                    }

                    if (dr["fromPublisher"].ToString().Trim() == "")
                    {
                        value_fromPublisher = 0;
                    }
                    else
                    {
                        value_fromPublisher = 1;
                    }

                    if (dr["fromTime"].ToString().Trim() == "")
                    {
                        value_fromTime = 0;
                    }
                    else
                    {
                        value_fromTime = 1;
                    }
                }
                dr.Close();
            }

            catch (System.Exception ex)
            {
                throw ex;
            }
            eventWeight = weight_fromTime * value_fromTime + weight_fromPlatform * value_fromPlatform + weight_fromPublisher * value_fromPublisher;
            return eventWeight;
        }
        #endregion 

        # region 时间要素相似度计算

        /// <summary>
        /// 时间要素相似度计算
        /// </summary>
        /// <param name="ontologyID">话题本体ID</param>
        /// <param name="eventID">事件ID</param>
        /// <returns>时间要素相似度</returns>
        public float calculateTimeSimilarity(int ontologyID, int eventID)
        {
            float timeSim = 0;
            float ontologyCountRatio=0;
            float eventCountRatio=0;
            try
            {
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter("_ontologyID",ontologyID),
                    new MySqlParameter("_eventID",eventID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectForTimeSim", param))
                {
                    while (dr.Read())
                    {
                        ontologyCountRatio = Convert.ToSingle(dr["ontologyCountRatio"].ToString().Trim());
                        eventCountRatio = Convert.ToSingle(dr["eventCountRatio"].ToString().Trim());
                        timeSim = eventCountRatio + timeSim;
                    }
                    dr.Close();
                }
            }

            catch (System.Exception ex)
            {
                throw ex;
            }
            return timeSim;
        }
        #endregion 

        # region 地点要素相似度计算

        /// <summary>
        /// 地点要素相似度计算
        /// </summary>
        /// <param name="ontologyID">话题本体ID</param>
        /// <param name="eventID">事件ID</param>
        /// <returns>地点要素相似度</returns>
        public float calculateLocationSimilarity(int ontologyID, int eventID)
        {
            float locationSim = 0;
            float ontologyCountRatio = 0;
            float eventCountRatio = 0;
            try
            {
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter("_ontologyID",ontologyID),
                    new MySqlParameter("_eventID",eventID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectForLocationSim", param))
                {
                    while (dr.Read())
                    {
                        ontologyCountRatio = Convert.ToSingle(dr["ontologyCountRatio"].ToString().Trim());
                        eventCountRatio = Convert.ToSingle(dr["eventCountRatio"].ToString().Trim());
                        locationSim = eventCountRatio + locationSim;
                    }
                    dr.Close();
                }
            }

            catch (System.Exception ex)
            {
                throw ex;
            }
            return locationSim;
  
        }
        #endregion 

        # region 实体要素相似度计算，暂时不考虑模糊匹配

        /// <summary>
        /// 实体要素相似度计算
        /// </summary>
        /// <param name="ontologyID">话题本体ID</param>
        /// <param name="eventID">事件ID</param>
        /// <returns>实体要素相似度</returns>
        public float calculateEntitySimilarity(int ontologyID, int eventID)
        {
            float entitySim = 0;
            float ontologyCountRatio = 0;
            float eventCountRatio = 0;
            try
            {
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter("_ontologyID",ontologyID),
                    new MySqlParameter("_eventID",eventID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectForEntitySim", param))
                {
                    while (dr.Read())
                    {
                        ontologyCountRatio = Convert.ToSingle(dr["ontologyCountRatio"].ToString().Trim());
                        eventCountRatio = Convert.ToSingle(dr["eventCountRatio"].ToString().Trim());
                        entitySim = eventCountRatio + entitySim;
                    }
                    dr.Close();
                }
            }

            catch (System.Exception ex)
            {
                throw ex;
            }
            return entitySim;
  
        }
        #endregion 

        # region 描述要素相似度计算

        /// <summary>
        /// 描述要素相似度计算
        /// </summary>
        /// <param name="ontologyID">话题本体ID</param>
        /// <param name="eventID">事件ID</param>
        /// <returns>描述要素相似度</returns>
        public float calculateDescriptionSimilarity(int ontologyID, int eventID)
        {
            float descriptionSim = 0;
            float ontologyCountRatio = 0;
            float eventCountRatio = 0;
            try
            {
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter("_ontologyID",ontologyID),
                    new MySqlParameter("_eventID",eventID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectForDescriptionSim", param))
                {
                    while (dr.Read())
                    {
                        ontologyCountRatio = Convert.ToSingle(dr["ontologyCountRatio"].ToString().Trim());
                        eventCountRatio = Convert.ToSingle(dr["eventCountRatio"].ToString().Trim());
                        descriptionSim = eventCountRatio + descriptionSim;
                    }
                    dr.Close();
                }
            }

            catch (System.Exception ex)
            {
                throw ex;
            }
            return descriptionSim;
  
        }
        #endregion 

        # region Todo：谓语要素相似度计算

        /// <summary>
        /// 谓语要素信息匹配
        /// </summary>
        /// <param name="ontologyID">话题本体ID</param>
        /// <param name="eventID">事件ID</param>
        /// <returns>谓语要素相似度</returns>
        public float calculatePredicateSimilarity(int ontologyID, int eventID)
        {
            float predicateSim = 0;
            float ontologyCountRatio = 0;
            float eventCountRatio = 0;
            try
            {
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter("_ontologyID",ontologyID),
                    new MySqlParameter("_eventID",eventID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectForPredicateSim", param))
                {
                    while (dr.Read())
                    {
                        ontologyCountRatio = Convert.ToSingle(dr["ontologyCountRatio"].ToString().Trim());
                        eventCountRatio = Convert.ToSingle(dr["eventCountRatio"].ToString().Trim());
                        predicateSim = eventCountRatio + predicateSim;
                    }
                    dr.Close();
                }
            }

            catch (System.Exception ex)
            {
                throw ex;
            }
            return predicateSim;
  
        }
        #endregion 

        # region Todo：扩展要素相似度计算

        /// <summary>
        /// 扩展要素相似度计算
        /// </summary>
        /// <param name="ontologyID">话题本体ID</param>
        /// <param name="eventID">事件ID</param>
        /// <returns>扩展要素相似度</returns>
        public float calculateExtraSimilarity(int ontologyID, int eventID)
        {
            float extraSim = 0;
            float ontologyCountRatio = 0;
            float eventCountRatio = 0;
            try
            {
                MySqlParameter[] param = new MySqlParameter[]
                {
                    new MySqlParameter("_ontologyID",ontologyID),
                    new MySqlParameter("_eventID",eventID)
                };
                using (MySqlDataReader dr = MySqlHelper.ExecuteReader(MySqlHelper.Conn, CommandType.StoredProcedure, "p_selectForExtraSim", param))
                {
                    while (dr.Read())
                    {
                        ontologyCountRatio = Convert.ToSingle(dr["ontologyCountRatio"].ToString().Trim());
                        eventCountRatio = Convert.ToSingle(dr["eventCountRatio"].ToString().Trim());
                        extraSim = eventCountRatio + extraSim;
                    }
                    dr.Close();
                }
            }

            catch (System.Exception ex)
            {
                throw ex;
            }
            return extraSim;
        }
        #endregion 


        # region 事件-本体话题相似度计算

        /// <summary>
        /// 事件-本体话题相似度计算
        /// </summary>
        /// <param name="ontologyID">话题本体ID</param>
        /// <param name="eventID">事件ID</param>
        /// <returns>事件是否与话题相关</returns>
        public float calculateTopicSimilarity(int ontologyID, int eventID, float threshold_topicSim)
        {
            float weight_time = (float)2 / 10;
            float weight_location = (float)1 / 10;
            float weight_entity = (float)3 / 10;
            float weight_description = (float)1 / 10;
            float weight_predicate = (float)2 / 10;
            float weight_extra = (float)1 / 10;


            float eventWeight = calculateEventWeight(ontologyID, eventID);
            float timeSim = calculateTimeSimilarity(ontologyID, eventID);
            float locationSim = calculateLocationSimilarity(ontologyID, eventID);
            float entitySim = calculateEntitySimilarity(ontologyID, eventID);
            float descriptionSim = calculateDescriptionSimilarity(ontologyID, eventID);
            float predicateSim = calculatePredicateSimilarity(ontologyID, eventID);
            float extraSim = calculateExtraSimilarity(ontologyID, eventID);

            float topicSim = eventWeight * (weight_time * timeSim + weight_location * locationSim + weight_entity * entitySim + weight_description * descriptionSim + weight_predicate * predicateSim + weight_extra * extraSim);

            EventInfo_DAL eventInfo_DAL = new EventInfo_DAL();
            OntologyInfo_DAL ontologyInfo_DAL = new OntologyInfo_DAL();
            OntologyEvent ontologyEventInfo = new OntologyEvent();

            #region 相关事件的事件除外的要素信息ID导入本体，更新countRatio
           
            if (topicSim >= threshold_topicSim)
            {

                //事件设为相关事件
                ontologyEventInfo.isRelevant = true;

                //时间信息导入
                List<EventTime> eventTimeList = eventInfo_DAL.selectEventTime(eventID);
                foreach (EventTime et in eventTimeList)
                {
                    OntologyTime ontologyTimeInfo = new OntologyTime();
                    ontologyTimeInfo.ontologyID = ontologyID;
                    ontologyTimeInfo.timeID = et.timeID;
                    ontologyInfo_DAL.addOntologyTime(ontologyTimeInfo);
                }

                //地点信息导入
                List<EventLocation> eventLocationList = eventInfo_DAL.selectEventLocation(eventID);
                foreach (EventLocation el in eventLocationList)
                {
                    OntologyLocation ontologyLocationInfo = new OntologyLocation();
                    ontologyLocationInfo.ontologyID = ontologyID;
                    ontologyLocationInfo.locationID = el.locationID;
                    ontologyInfo_DAL.addOntologyLocation(ontologyLocationInfo);
                }

                //实体信息导入
                List<EventEntity> eventEntityList = eventInfo_DAL.selectEventEntity(eventID);
                foreach (EventEntity een in eventEntityList)
                {
                    OntologyEntity ontologyEntityInfo = new OntologyEntity();
                    ontologyEntityInfo.ontologyID = ontologyID;
                    ontologyEntityInfo.entityID = een.entityID;
                    ontologyInfo_DAL.addOntologyEntity(ontologyEntityInfo);
                }

                //描述信息导入
                List<EventDescription> eventDescriptionList = eventInfo_DAL.selectEventDescription(eventID);
                foreach (EventDescription ed in eventDescriptionList)
                {
                    OntologyDescription ontologyDescriptionInfo = new OntologyDescription();
                    ontologyDescriptionInfo.ontologyID = ontologyID;
                    ontologyDescriptionInfo.descriptionID = ed.descriptionID;
                    ontologyInfo_DAL.addOntologyDescription(ontologyDescriptionInfo);
                }

                //谓语信息导入
                List<EventPredicate> eventPredicateList = eventInfo_DAL.selectEventPredicate(eventID);
                foreach (EventPredicate ep in eventPredicateList)
                {
                    OntologyPredicate ontologyPredicateInfo = new OntologyPredicate();
                    ontologyPredicateInfo.ontologyID = ontologyID;
                    ontologyPredicateInfo.predicateID = ep.predicateID;
                    ontologyInfo_DAL.addOntologyPredicate(ontologyPredicateInfo);
                }

                //扩展信息导入
                List<EventExtra> eventExtraList = eventInfo_DAL.selectEventExtra(eventID);
                foreach (EventExtra eex in eventExtraList)
                {
                    OntologyExtra ontologyExtraInfo = new OntologyExtra();
                    ontologyExtraInfo.ontologyID = ontologyID;
                    ontologyExtraInfo.extraID = eex.extraID;
                    ontologyInfo_DAL.addOntologyExtra(ontologyExtraInfo);
                }

                //ontologyEvolution.calculateWordRelevance(ontologyID, eventID); 
                //简化，暂时不做，entity/predicate只要达到threshold_topicSim就学习

                ontologyInfo_DAL.updateOntologyCountRatio(ontologyID);//更新本体countRatio

            }
            #endregion

            //将事件（无论是否相关）要素信息：各Sim及两个ID存入数据库表ontology_event
            ontologyEventInfo.eventID = eventID;
            ontologyEventInfo.ontologyID = ontologyID;
            ontologyEventInfo.topicSim = topicSim;
            ontologyEventInfo.eventSim = eventWeight;
            ontologyEventInfo.timeSim = timeSim;
            ontologyEventInfo.locationSim = locationSim;
            ontologyEventInfo.entitySim = entitySim;
            ontologyEventInfo.descriptionSim = descriptionSim;
            ontologyEventInfo.predicateSim = predicateSim;
            ontologyEventInfo.extraSim = extraSim;
            ontologyInfo_DAL.addOntologyEvent(ontologyEventInfo);

            //返回事件-话题相似度
            return topicSim;
        }
        #endregion

        # region Todo：实体相关度计算(简化，暂时不做)

        /// <summary>
        /// 实体相关度计算
        /// </summary>
        /// <param name="ontologyID">话题本体ID</param>
        /// <param name="eventID">相似事件ID</param>
        /// <returns></returns>
        public int[] calculateWordRelevance(int ontologyID, int similarEventID)
        {
            int[] relevantEntityID = null;

            return relevantEntityID;

        }
        #endregion 

        //获得话题相似度+ontologyID+eventID->判断是否超过进化阈值->是则进化->调用Threshold函数，判断是否超过阈值.（判断写在界面中）

        //Todo: 判定topicSim是否超过阈值，超过，则通过对应eventID将各要素信息ID的集合（Entity除外）分别导入本体,调用addOntologyXx

        //Todo: 在超过topicSim的前提下，计算Threshold_Relevance(Entity)

        //Todo: foreach entity，判定Threshold_Relevance(Entity)是否超过阈值，超过，则将对应entityID集合导入本体，调用addOntologyEntity

        //Todo: 最终，计算该ontology内所有countRatio，并将evolutionTime + 1，调用updateOntologyCountRatio和addOntology

        //Todo: calculateTopicSimilarity，得到匹配统计值xxNum和allXxNum，再代入相似度算式,算得的相似度储存，调用addOntologyEvent
    }
}
