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
    public partial class OntologyEvolution : Form
    {
        int ontologyID = -1;
        int eventID = -1;

        public OntologyEvolution()
        {
            InitializeComponent();
        }

        private void OntologyEvolution_Load(object sender, EventArgs e)
        {
 

        }

        private void button_tryEvolution_Click(object sender, EventArgs e)
        {
            OntologyEvolution_BLL ontologyEvolution_BLL = new OntologyEvolution_BLL();
            ontologyID = Convert.ToInt32(textBox_ontologyID.Text.Trim());
            eventID = Convert.ToInt32(textBox_eventID.Text.Trim());
            float threshold_topicSim = Convert.ToSingle(textBox_threshold_topicSim.Text.Trim());//阈值设定
            float topicSim = ontologyEvolution_BLL.calculateTopicSimilarity(ontologyID, eventID, threshold_topicSim);//相似度计算+信息导入

            if (topicSim >= threshold_topicSim)
            {

                MessageBox.Show("话题相似度为" + topicSim.ToString() + "，大于设定阈值，本体已学习事件信息。", "本体已进化", MessageBoxButtons.OK);

            }
            else
            {
                MessageBox.Show("话题相似度为" + topicSim.ToString() + "，小于设定阈值，不满足本体进化条件。", "本体未进化", MessageBoxButtons.OK);
            }

        }
    }
}
