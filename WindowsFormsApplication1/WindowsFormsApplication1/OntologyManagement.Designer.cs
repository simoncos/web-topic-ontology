namespace ontology
{
    partial class OntologyManagement
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.ontologyIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.topicDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.evolutionTimesDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.foundTimeDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.updateTimeDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ontologyBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.ontologyDataSet_ontology = new ontology.ontologyDataSet_ontology();
            this.ontologyTableAdapter = new ontology.ontologyDataSet_ontologyTableAdapters.ontologyTableAdapter();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.ontologyBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.ontologyDataSet_ontology)).BeginInit();
            this.SuspendLayout();
            // 
            // dataGridView1
            // 
            this.dataGridView1.AutoGenerateColumns = false;
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.ontologyIDDataGridViewTextBoxColumn,
            this.topicDataGridViewTextBoxColumn,
            this.evolutionTimesDataGridViewTextBoxColumn,
            this.foundTimeDataGridViewTextBoxColumn,
            this.updateTimeDataGridViewTextBoxColumn});
            this.dataGridView1.DataSource = this.ontologyBindingSource;
            this.dataGridView1.Location = new System.Drawing.Point(1, 0);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.Size = new System.Drawing.Size(543, 289);
            this.dataGridView1.TabIndex = 0;
            // 
            // ontologyIDDataGridViewTextBoxColumn
            // 
            this.ontologyIDDataGridViewTextBoxColumn.DataPropertyName = "ontologyID";
            this.ontologyIDDataGridViewTextBoxColumn.HeaderText = "ontologyID";
            this.ontologyIDDataGridViewTextBoxColumn.Name = "ontologyIDDataGridViewTextBoxColumn";
            // 
            // topicDataGridViewTextBoxColumn
            // 
            this.topicDataGridViewTextBoxColumn.DataPropertyName = "topic";
            this.topicDataGridViewTextBoxColumn.HeaderText = "topic";
            this.topicDataGridViewTextBoxColumn.Name = "topicDataGridViewTextBoxColumn";
            // 
            // evolutionTimesDataGridViewTextBoxColumn
            // 
            this.evolutionTimesDataGridViewTextBoxColumn.DataPropertyName = "evolutionTimes";
            this.evolutionTimesDataGridViewTextBoxColumn.HeaderText = "evolutionTimes";
            this.evolutionTimesDataGridViewTextBoxColumn.Name = "evolutionTimesDataGridViewTextBoxColumn";
            // 
            // foundTimeDataGridViewTextBoxColumn
            // 
            this.foundTimeDataGridViewTextBoxColumn.DataPropertyName = "foundTime";
            this.foundTimeDataGridViewTextBoxColumn.HeaderText = "foundTime";
            this.foundTimeDataGridViewTextBoxColumn.Name = "foundTimeDataGridViewTextBoxColumn";
            // 
            // updateTimeDataGridViewTextBoxColumn
            // 
            this.updateTimeDataGridViewTextBoxColumn.DataPropertyName = "updateTime";
            this.updateTimeDataGridViewTextBoxColumn.HeaderText = "updateTime";
            this.updateTimeDataGridViewTextBoxColumn.Name = "updateTimeDataGridViewTextBoxColumn";
            // 
            // ontologyBindingSource
            // 
            this.ontologyBindingSource.DataMember = "ontology";
            this.ontologyBindingSource.DataSource = this.ontologyDataSet_ontology;
            // 
            // ontologyDataSet_ontology
            // 
            this.ontologyDataSet_ontology.DataSetName = "ontologyDataSet_ontology";
            this.ontologyDataSet_ontology.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // ontologyTableAdapter
            // 
            this.ontologyTableAdapter.ClearBeforeFill = true;
            // 
            // OntologyManagement
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(837, 392);
            this.Controls.Add(this.dataGridView1);
            this.Name = "OntologyManagement";
            this.Text = "话题本体管理";
            this.Load += new System.EventHandler(this.OntologyManagement_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.ontologyBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.ontologyDataSet_ontology)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridView1;
        private ontologyDataSet_ontology ontologyDataSet_ontology;
        private System.Windows.Forms.BindingSource ontologyBindingSource;
        private ontologyDataSet_ontologyTableAdapters.ontologyTableAdapter ontologyTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn ontologyIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn topicDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn evolutionTimesDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn foundTimeDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn updateTimeDataGridViewTextBoxColumn;
    }
}