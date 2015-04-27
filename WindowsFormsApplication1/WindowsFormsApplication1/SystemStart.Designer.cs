namespace ontology
{
    partial class SystemStart
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
            this.openOntologyManagement = new System.Windows.Forms.Button();
            this.button_EventManagement = new System.Windows.Forms.Button();
            this.button_newEvent = new System.Windows.Forms.Button();
            this.button_OntologyEvolution = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // openOntologyManagement
            // 
            this.openOntologyManagement.Location = new System.Drawing.Point(40, 151);
            this.openOntologyManagement.Name = "openOntologyManagement";
            this.openOntologyManagement.Size = new System.Drawing.Size(124, 50);
            this.openOntologyManagement.TabIndex = 0;
            this.openOntologyManagement.Text = "话题本体管理";
            this.openOntologyManagement.UseVisualStyleBackColor = true;
            this.openOntologyManagement.Click += new System.EventHandler(this.openOntologyManagement_Click);
            // 
            // button_EventManagement
            // 
            this.button_EventManagement.Location = new System.Drawing.Point(40, 33);
            this.button_EventManagement.Name = "button_EventManagement";
            this.button_EventManagement.Size = new System.Drawing.Size(124, 49);
            this.button_EventManagement.TabIndex = 1;
            this.button_EventManagement.Text = "事件管理";
            this.button_EventManagement.UseVisualStyleBackColor = true;
            this.button_EventManagement.Click += new System.EventHandler(this.EventManagement_Click);
            // 
            // button_newEvent
            // 
            this.button_newEvent.Location = new System.Drawing.Point(184, 33);
            this.button_newEvent.Name = "button_newEvent";
            this.button_newEvent.Size = new System.Drawing.Size(124, 50);
            this.button_newEvent.TabIndex = 2;
            this.button_newEvent.Text = "新事件导入";
            this.button_newEvent.UseVisualStyleBackColor = true;
            this.button_newEvent.Click += new System.EventHandler(this.newEvent_Click);
            // 
            // button_OntologyEvolution
            // 
            this.button_OntologyEvolution.Location = new System.Drawing.Point(184, 151);
            this.button_OntologyEvolution.Name = "button_OntologyEvolution";
            this.button_OntologyEvolution.Size = new System.Drawing.Size(124, 50);
            this.button_OntologyEvolution.TabIndex = 3;
            this.button_OntologyEvolution.Text = "本体进化管理";
            this.button_OntologyEvolution.UseVisualStyleBackColor = true;
            this.button_OntologyEvolution.Click += new System.EventHandler(this.button_OntologyEvolution_Click);
            // 
            // SystemStart
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(822, 373);
            this.Controls.Add(this.button_OntologyEvolution);
            this.Controls.Add(this.button_newEvent);
            this.Controls.Add(this.button_EventManagement);
            this.Controls.Add(this.openOntologyManagement);
            this.Name = "SystemStart";
            this.Text = "舆情话题本体系统导航";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button openOntologyManagement;
        private System.Windows.Forms.Button button_EventManagement;
        private System.Windows.Forms.Button button_newEvent;
        private System.Windows.Forms.Button button_OntologyEvolution;
    }
}