using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows.Forms;
using Model;
using MySql.Data.MySqlClient;
using ontology.ontoBLL;

namespace ontology
{
    public partial class EventTextInfoExtract : Form
    {
        public EventTextInfoExtract()
        {
            InitializeComponent();
        }

        private void EventTextInfoExtract_Load(object sender, EventArgs e)
        {
            //测试数据库连接
            //int a = MySqlHelper.ExecuteNonQuery(MySqlHelper.Conn, CommandType.Text, @"insert into ontology_event(updateTime,ontologyID,eventID) values(NOW(),1,9)", null);
            //label1.Text = "数据库影响行数：" + a.ToString();
        }

        private void button_timeExtract_Click(object sender, EventArgs e)
        {
            textInfoExtract textInfoExtract_readTxtToString_timeExtract = new textInfoExtract();

            string text_timeExtracted = textInfoExtract_readTxtToString_timeExtract.timeExtract(originalText,eventID);

            richTextBox_readTxtToString_timeExtract.Text = "以下为时间抽取结束剩余的微博文本（待分词）：\n\n" + text_timeExtracted; 
        }

        private void button_otherInfoExtract_Click(object sender, EventArgs e)
        {
            textInfoExtract textInfoExtract_otherInfoExtract = new textInfoExtract();

            string segmentedText = @richTextBox_otherInfoExtract.Text.Trim();
            textInfoExtract_otherInfoExtract.otherExtract(segmentedText, 2);

        }

    }
}
