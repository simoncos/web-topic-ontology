using Model;
using ontology.ontoBLL;
using ontology.ontoDAL;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ontology
{
    public partial class NewEvent : Form //用户选择本体并添加/修改事件文本和from等事件信息
    {
        int eventID = -1;

        public NewEvent()
        {
            InitializeComponent();
        }

        private void button_timeInfoExtract_Click(object sender, EventArgs e)
        {
            TextInfoExtract_BLL textInfoExtract_time = new TextInfoExtract_BLL();

            //获得路径，以及是否微博文本
            string path = @textBox_txtURL.Text.Trim();//@"K:\Users\Lz.Simon\Desktop\WindowsFormsApplication1\WindowsFormsApplication1\马航1.txt"
            bool isSinaWeibo = radioButton_isSinaWeibo.Checked;

            //读取txt并生成事件
            label_status.Text = "当前状态：正在读取txt文件...";
            string originalText = textInfoExtract_time.readTxtToOriginalText(1, path, isSinaWeibo);
            label_status.Text = "当前状态：读取txt文件完毕";

            if (originalText != string.Empty)
            {
                EventInfo_DAL eventInfo_event = new EventInfo_DAL();
                Event event_txt = new Event();
                
                //事件信息赋值
                event_txt.originalText = originalText;
                event_txt.foundTime = DateTime.Now;
                if (radioButton_isSinaWeibo.Checked == true)
                {
                    event_txt.fromPlatform = "SinaWeibo";
                }
                else
                {
                    event_txt.fromPlatform = "OtherPlatforms";
                }
                event_txt.fromPublisher = textBox_fromPublisher.Text.Trim();
                event_txt.fromTime = dateTimePicker_fromTime.Value;//默认为当前时间

                //生成事件并返回事件ID
                label_status.Text = "当前状态：正在进行事件生成...";
                eventID = eventInfo_event.addEvent(event_txt);
                label_status.Text = "当前状态：事件生成完毕...";

                //抽取时间
                label_status.Text = "当前状态：正在进行时间抽取...";
                string text_timeExtracted = textInfoExtract_time.timeExtract(originalText, eventID);
                richTextBox_readTxtToString_timeExtract.Text = text_timeExtracted;
                label_status.Text = "当前状态：时间抽取完毕";

            }
            else
            {
                label_status.Text = "当前状态：无法找到源文件，处理失败！";
            }
        }

        private void button_otherInfoExtract_Click(object sender, EventArgs e)
        {
            if (eventID == -1)
            {
                label_status.Text = "当前状态：抽取其他要素失败";
                MessageBox.Show("请先进行事件生成和时间抽取，否则无法抽取其他要素！", "请先进行事件生成和时间抽取", MessageBoxButtons.OK);
            }
            else
            {
                label_status.Text = "当前状态：正在进行其他要素抽取...";
                TextInfoExtract_BLL textInfoExtract_otherInfoExtract = new TextInfoExtract_BLL();
                EventInfo_DAL eventInfo_countRatio = new EventInfo_DAL();
                Event event_other = new Event();

                string segmentedText = @richTextBox_otherInfoExtract.Text.Trim();
                
                //更新事件分词文本
                event_other.eventID = eventID;
                event_other.segmentedText = segmentedText;
                eventInfo_countRatio.updateEventByID(event_other);

                //开始抽取
                textInfoExtract_otherInfoExtract.otherExtract(segmentedText, eventID);
                label_status.Text = "当前状态：其他要素抽取完毕";

                //countRatio计算
                label_status.Text = "当前状态：正在进行countRatio计算...";
                eventInfo_countRatio.updateEventCountRatio(eventID);
                label_status.Text = "当前状态：countRatio计算完毕";

                MessageBox.Show("本次事件文本信息抽取完毕，窗口即将关闭。", "窗口将关闭", MessageBoxButtons.OK);
                this.Close();
            }
        }
    }
}
