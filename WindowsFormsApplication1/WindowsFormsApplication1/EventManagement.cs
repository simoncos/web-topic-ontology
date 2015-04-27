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
    public partial class EventManagement : Form
    {
        public EventManagement()
        {
            InitializeComponent();
        }

        private void QueryEvent_Load(object sender, EventArgs e)
        {
            // TODO: 这行代码将数据加载到表“ontologyDataSet_event._event”中。您可以根据需要移动或删除它。
            this.eventTableAdapter.Fill(this.ontologyDataSet_event._event);

        }

        private void dataGridView_event_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
    }
}
