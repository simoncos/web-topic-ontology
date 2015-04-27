namespace ontology
{
    partial class EventManagement
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
            this.dataGridView_event = new System.Windows.Forms.DataGridView();
            this.eventBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.ontologyDataSet_event = new ontology.ontologyDataSet_event();
            this.eventTableAdapter = new ontology.ontologyDataSet_eventTableAdapters.eventTableAdapter();
            this.eventIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.fromTimeDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.fromURLDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.fromPlatformDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.fromPublisherDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.originalTextDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.segmentedTextDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.foundTimeDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.updateTimeDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_event)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.eventBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.ontologyDataSet_event)).BeginInit();
            this.SuspendLayout();
            // 
            // dataGridView_event
            // 
            this.dataGridView_event.AutoGenerateColumns = false;
            this.dataGridView_event.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView_event.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.eventIDDataGridViewTextBoxColumn,
            this.fromTimeDataGridViewTextBoxColumn,
            this.fromURLDataGridViewTextBoxColumn,
            this.fromPlatformDataGridViewTextBoxColumn,
            this.fromPublisherDataGridViewTextBoxColumn,
            this.dataGridViewTextBoxColumn1,
            this.originalTextDataGridViewTextBoxColumn,
            this.segmentedTextDataGridViewTextBoxColumn,
            this.foundTimeDataGridViewTextBoxColumn,
            this.updateTimeDataGridViewTextBoxColumn});
            this.dataGridView_event.DataSource = this.eventBindingSource;
            this.dataGridView_event.Location = new System.Drawing.Point(0, -1);
            this.dataGridView_event.Name = "dataGridView_event";
            this.dataGridView_event.Size = new System.Drawing.Size(994, 430);
            this.dataGridView_event.TabIndex = 0;
            this.dataGridView_event.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView_event_CellContentClick);
            // 
            // eventBindingSource
            // 
            this.eventBindingSource.DataMember = "event";
            this.eventBindingSource.DataSource = this.ontologyDataSet_event;
            // 
            // ontologyDataSet_event
            // 
            this.ontologyDataSet_event.DataSetName = "ontologyDataSet_event";
            this.ontologyDataSet_event.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // eventTableAdapter
            // 
            this.eventTableAdapter.ClearBeforeFill = true;
            // 
            // eventIDDataGridViewTextBoxColumn
            // 
            this.eventIDDataGridViewTextBoxColumn.DataPropertyName = "eventID";
            this.eventIDDataGridViewTextBoxColumn.HeaderText = "eventID";
            this.eventIDDataGridViewTextBoxColumn.Name = "eventIDDataGridViewTextBoxColumn";
            // 
            // fromTimeDataGridViewTextBoxColumn
            // 
            this.fromTimeDataGridViewTextBoxColumn.DataPropertyName = "fromTime";
            this.fromTimeDataGridViewTextBoxColumn.HeaderText = "fromTime";
            this.fromTimeDataGridViewTextBoxColumn.Name = "fromTimeDataGridViewTextBoxColumn";
            // 
            // fromURLDataGridViewTextBoxColumn
            // 
            this.fromURLDataGridViewTextBoxColumn.DataPropertyName = "fromURL";
            this.fromURLDataGridViewTextBoxColumn.HeaderText = "fromURL";
            this.fromURLDataGridViewTextBoxColumn.Name = "fromURLDataGridViewTextBoxColumn";
            // 
            // fromPlatformDataGridViewTextBoxColumn
            // 
            this.fromPlatformDataGridViewTextBoxColumn.DataPropertyName = "fromPlatform";
            this.fromPlatformDataGridViewTextBoxColumn.HeaderText = "fromPlatform";
            this.fromPlatformDataGridViewTextBoxColumn.Name = "fromPlatformDataGridViewTextBoxColumn";
            // 
            // fromPublisherDataGridViewTextBoxColumn
            // 
            this.fromPublisherDataGridViewTextBoxColumn.DataPropertyName = "fromPublisher";
            this.fromPublisherDataGridViewTextBoxColumn.HeaderText = "fromPublisher";
            this.fromPublisherDataGridViewTextBoxColumn.Name = "fromPublisherDataGridViewTextBoxColumn";
            // 
            // dataGridViewTextBoxColumn1
            // 
            this.dataGridViewTextBoxColumn1.DataPropertyName = "title";
            this.dataGridViewTextBoxColumn1.HeaderText = "title";
            this.dataGridViewTextBoxColumn1.Name = "dataGridViewTextBoxColumn1";
            // 
            // originalTextDataGridViewTextBoxColumn
            // 
            this.originalTextDataGridViewTextBoxColumn.DataPropertyName = "originalText";
            this.originalTextDataGridViewTextBoxColumn.HeaderText = "originalText";
            this.originalTextDataGridViewTextBoxColumn.Name = "originalTextDataGridViewTextBoxColumn";
            // 
            // segmentedTextDataGridViewTextBoxColumn
            // 
            this.segmentedTextDataGridViewTextBoxColumn.DataPropertyName = "segmentedText";
            this.segmentedTextDataGridViewTextBoxColumn.HeaderText = "segmentedText";
            this.segmentedTextDataGridViewTextBoxColumn.Name = "segmentedTextDataGridViewTextBoxColumn";
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
            // EventManagement
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1058, 534);
            this.Controls.Add(this.dataGridView_event);
            this.Name = "EventManagement";
            this.Text = "事件管理";
            this.Load += new System.EventHandler(this.QueryEvent_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_event)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.eventBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.ontologyDataSet_event)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridView_event;
        private ontologyDataSet_event ontologyDataSet_event;
        private System.Windows.Forms.BindingSource eventBindingSource;
        private ontologyDataSet_eventTableAdapters.eventTableAdapter eventTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn eventIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn fromTimeDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn fromURLDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn fromPlatformDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn fromPublisherDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn1;
        private System.Windows.Forms.DataGridViewTextBoxColumn originalTextDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn segmentedTextDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn foundTimeDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn updateTimeDataGridViewTextBoxColumn;

    }
}