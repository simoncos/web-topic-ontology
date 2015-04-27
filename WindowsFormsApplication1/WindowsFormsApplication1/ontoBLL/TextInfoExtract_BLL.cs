using Model;
using ontology.ontoDAL;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace ontology.ontoBLL
{
    class TextInfoExtract_BLL
    {
        //事件的文本信息抽取总体逻辑：定位事件（拿到事件id和事件原始文本），对于事件的原始文本（带事件id），
        //先抽取时间并按事件id导入数据库，再抽取其他要素并按事件id导入数据库

        # region 读取事件文本txt(UTF-8)为string，含测试代码：实际上eventInfo应在新建跟踪事件时插入

        /// <summary>
        /// 读取事件文本txt(UTF-8)为string
        /// </summary>
        /// <param name="ontology">话题本体</param>
        /// <param name="path">txt地址</param>
        /// <param name="isSinaWeibo">txt文本是否来自新浪微博</param>
        /// <returns>待抽取时间的文本</returns>
        public string readTxtToOriginalText(int ontologyID, string path, bool isSinaWeibo)
        {

            string originalText = String.Empty;

            if (File.Exists(path))
            {
                string[] originalTextArray = File.ReadAllLines(path, Encoding.UTF8);

                if (isSinaWeibo == true)//若为微博，则切除类似“你家只有屎砣砣**03月09日 23:59?来自微博 weibo.com**:”的干扰时间抽取的文本
                {
                    string o_split = String.Empty;
                    foreach (string o in originalTextArray)
                    {
                        o_split = String.Empty;
                        for (int i = 1; i < Regex.Split(o, @"\*\*:").Length; i++)//只切除第一个"**:"前的文本，之后的文本需粘合回来
                        {
                            o_split = o_split + ":" + Regex.Split(o, @"\*\*:")[i];
                        }
                        originalText = originalText + o_split + "\n";//注意这里换行了
                    }
                }
                else
                {
                    foreach (string o in originalTextArray)
                    {
                        originalText = originalText + o + "\n";
                    }
                }
            }

            return originalText;
        }
        #endregion

        //Todo:ICTCLAS分词（计算所二级标注）

        # region 抽取时间信息（正则匹配）

        /// <summary>
        /// 抽取时间信息（正则匹配）
        /// </summary>
        /// <param name="originalText">待抽取时间的文本</param>
        /// <param name="eventID">文本对应的事件id</param>
        /// <returns>时间信息抽取完毕的文本字符串，用于分词</returns>
        public string timeExtract(string originalText, int eventID)
        {
            //正则匹配时间
            string text_timeExtracted = originalText;
            string[] pattern = 
            {
                //组合时间素
                @"[0-9]{4}年[0-9]{1,2}月[0-9]{1,2}[日,号][0-9]{1,2}[时,点][0-9]{1,2}分",//年月日时分
                @"[0-9]{2}年[0-9]{1,2}月[0-9]{1,2}[日,号][0-9]{1,2}[时,点][0-9]{1,2}分",//年月日时分

                @"[0-9]{4}年[0-9]{1,2}月[0-9]{1,2}[日,号][0-9]{1,2}[时,点]",//年月日时
                @"[0-9]{2}年[0-9]{1,2}月[0-9]{1,2}[日,号][0-9]{1,2}[时,点]",//年月日时
                @"[0-9]{1,2}月[0-9]{1,2}[日,号][0-9]{1,2}[时,点][0-9]{1,2}分",//月日时分

                @"[0-9]{4}年[0-9]{1,2}月[0-9]{1,2}[日,号]",//年月日
                @"[0-9]{2}年[0-9]{1,2}月[0-9]{1,2}[日,号]",//年月日
                @"[0-9]{1,2}月[0-9]{1,2}[日,号][0-9]{1,2}[时,点]",//月日时
                @"[0-9]{1,2}[日,号][0-9]{1,2}[时,点][0-9]{1,2}分",//日时分


                @"[0-9]{4}年[0-9]{1,2}月",//年月
                @"[0-9]{2}年[0-9]{1,2}月",//年月
                @"[0-9]{1,2}月[0-9]{1,2}[日,号]",//月日
                @"[0-9]{1,2}[日,号][0-9]{1,2}[时,点]",//日时
                @"[0-9]{1,2}[时,点][0-9]{1,2}分",//时分

                //单独时间素
                @"[0-9]{4}年",//年
                @"[0-9]{2}年",//年
                @"[0-9]{1,2}月",//月
                @"[0-9]{1,2}[日,号]",//日
                @"[0-9]{1,2}[时,点]",//时
                @"[0-9]{1,2}分"//分
            };


            foreach (string p in pattern)//循环每个正则
            {
                foreach (Match match in Regex.Matches(text_timeExtracted, p, RegexOptions.IgnoreCase))//循环每个匹配
                {
                    text_timeExtracted = Regex.Replace(text_timeExtracted, match.ToString(), "");//去掉已匹配时间信息的字符串

                    Time time = new Time();
                    time.accurateLevel = 0;
                    string matchString = match.ToString();
                    string[] timeSplitArray;

                    //对于每一个时间字符串，分别提取年月日时分的数字（简化：不做标准化）
                    if (Regex.IsMatch(matchString, "年"))
                    {
                        timeSplitArray = Regex.Split(matchString, "年");
                        time.year = timeSplitArray[0];
                        time.accurateLevel++;
                        if (Regex.IsMatch(matchString, "月"))
                        {
                            matchString = timeSplitArray[1];
                        }
                    }
                    if (Regex.IsMatch(matchString, "月"))
                    {
                        timeSplitArray = Regex.Split(matchString, "月");
                        time.month = timeSplitArray[0];
                        time.accurateLevel++;
                        if (Regex.IsMatch(matchString, @"[日,号]"))
                        {
                            matchString = timeSplitArray[1];
                        }
                    }
                    if (Regex.IsMatch(matchString, @"[日,号]"))
                    {
                        timeSplitArray = Regex.Split(matchString, @"[日,号]");
                        time.day = timeSplitArray[0];
                        time.accurateLevel++;
                        if (Regex.IsMatch(matchString, @"[时,点]"))
                        {
                            matchString = timeSplitArray[1];
                        }
                    }
                    if (Regex.IsMatch(matchString, @"[时,点]"))
                    {
                        timeSplitArray = Regex.Split(matchString, @"[时,点]");
                        time.hour = timeSplitArray[0];
                        time.accurateLevel++;
                        if (Regex.IsMatch(matchString, "分"))
                        {
                            matchString = timeSplitArray[1];
                        }
                    }
                    if (Regex.IsMatch(matchString, "分"))
                    {
                        timeSplitArray = Regex.Split(matchString, "分");
                        time.minute = timeSplitArray[0];
                        time.accurateLevel++;
                        if (Regex.IsMatch(matchString, "秒"))
                        {
                            matchString = timeSplitArray[1];
                        }
                    }
                    if(Regex.IsMatch(matchString,"秒"))
                    {
                        timeSplitArray = Regex.Split(matchString, "分");
                        time.second = timeSplitArray[0];
                        time.accurateLevel++;
                    }

                    //将抽取到的时间信息导入数据库
                    EventInfo_DAL eventInfo_time = new EventInfo_DAL();
                    eventInfo_time.addTime(time,eventID);
                }
            }
            return text_timeExtracted;
        }
        #endregion

        # region 抽取其他要素信息（分词匹配）并更新事件countRatio

        /// <summary>
        /// 抽取其他要素信息（分词匹配）
        /// </summary>
        /// <param name="segmentedText">分词结果文本</param>
        /// <param name="eventID">文本对应的事件id</param>
        /// <returns>（测试用）词与词性分离的分词结果字符串</returns>
        public string otherExtract(string segmentedText, int eventID)
        {
            string result_separateWordType = String.Empty;

            string[] segments = segmentedText.Split(' ');
            foreach (string s in segments)
            {
                if (Regex.IsMatch(s, "/"))
                {
                    string[] segment = s.Split('/');
                    string word = segment[0].Trim();
                    string wordType = segment[1].Trim();

                    if (wordType=="ns"|wordType=="nsf")//地点
                    {
                        Location location = new Location();
                        location.location = word;
                        location.accurateLevel = 1;//默认层级
                        EventInfo_DAL eventInfo_location = new EventInfo_DAL();
                        eventInfo_location.addLocation(location,eventID); 
                    }
                    if (wordType == "n" | wordType == "nz" | wordType == "vn")//实体物体
                    {
                        Entity entity = new Entity();
                        entity.entity = word;
                        entity.entityType = "Object";
                        EventInfo_DAL eventInfo_Entity_Object = new EventInfo_DAL();
                        eventInfo_Entity_Object.addEntity(entity,eventID);
                    }
                    if (wordType == "nr" | wordType == "nr2" | wordType == "nrj" | wordType == "nrf")//实体人物
                    {
                        Entity entity = new Entity();
                        entity.entity = word;
                        entity.entityType = "Human";
                        EventInfo_DAL eventInfo_Entity_Human = new EventInfo_DAL();
                        eventInfo_Entity_Human.addEntity(entity,eventID);
                    }
                    if (wordType == "nt")//实体组织机构
                    {
                        Entity entity = new Entity();
                        entity.entity = word;
                        entity.entityType = "Organization";
                        EventInfo_DAL eventInfo_Entity_Organization = new EventInfo_DAL();
                        eventInfo_Entity_Organization.addEntity(entity,eventID);
                    }
                    if (wordType == "a" | wordType == "ad" | wordType == "an" | wordType == "ag" | wordType == "al")//描述
                    {
                        Description description = new Description();
                        description.description = word;
                        description.tendencyLevel = 1;//默认倾向值
                        EventInfo_DAL eventInfo_Description = new EventInfo_DAL();
                        eventInfo_Description.addDescription(description,eventID);
                    }
                    if (wordType == "v" | wordType == "vi" | wordType == "vd" | wordType == "vn" | wordType == "vl")//谓语
                    {
                        Predicate predicate = new Predicate();
                        predicate.predicate = word;
                        EventInfo_DAL eventInfo_Predicate = new EventInfo_DAL();
                        eventInfo_Predicate.addPredicate(predicate,eventID);
                    }
                    if (wordType == "t" | wordType == "tg" | wordType == "f" | wordType == "s" | wordType == "b" | wordType == "z")//扩展
                    {
                        Extra extra = new Extra();
                        extra.extra = word;
                        EventInfo_DAL eventInfo_Extra = new EventInfo_DAL();
                        eventInfo_Extra.addExtra(extra,eventID);
                    }

                    //测试用：
                    result_separateWordType = result_separateWordType + "word:" + word + "  " + "wordType:" + wordType + "\n";
                }
                
            }

            //计算该事件各要素信息的countRatio
            EventInfo_DAL eventInfo_DAL = new ontoDAL.EventInfo_DAL();
            eventInfo_DAL.updateEventCountRatio(eventID);

            //测试用：
            return result_separateWordType;

        }
        #endregion






        //以下为高级功能，暂不考虑：

        //Todo：地点的上下位输入及accurateLevel计算
        //Todo：实体的同义词（考虑用分词系统的用户词典替代）
        //Todo：描述的情感类型及程度输入or数据包匹配
    }
}