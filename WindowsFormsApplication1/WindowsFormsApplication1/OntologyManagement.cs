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
    public partial class OntologyManagement : Form
    {
        public OntologyManagement()
        {
            InitializeComponent();
        }

        private void OntologyManagement_Load(object sender, EventArgs e)
        {
            // TODO: 这行代码将数据加载到表“ontologyDataSet_ontology.ontology”中。您可以根据需要移动或删除它。
            this.ontologyTableAdapter.Fill(this.ontologyDataSet_ontology.ontology);

        }
    }
}
