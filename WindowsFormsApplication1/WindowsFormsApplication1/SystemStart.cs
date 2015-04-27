using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ontology
{
    public partial class SystemStart : Form //系统开始导航
    {
        public SystemStart()
        {
            InitializeComponent();
        }

        private void openOntologyManagement_Click(object sender, EventArgs e)
        {
            OntologyManagement queryOntology = new OntologyManagement();
            queryOntology.Show();
        }

        private void newEvent_Click(object sender, EventArgs e)
        {
            NewEvent newEvent = new NewEvent();
            newEvent.Show();
        }

        private void EventManagement_Click(object sender, EventArgs e)
        {
            EventManagement eventManagement = new EventManagement();
            eventManagement.Show();
            //SqlCommandBuilder 
        }

        private void button_OntologyEvolution_Click(object sender, EventArgs e)
        {
            OntologyEvolution ontologyEvolution = new OntologyEvolution();
            ontologyEvolution.Show();

        }
    }
}
