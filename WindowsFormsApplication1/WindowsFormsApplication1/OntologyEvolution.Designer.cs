namespace ontology
{
    partial class OntologyEvolution
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
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.textBox_ontologyID = new System.Windows.Forms.TextBox();
            this.textBox_eventID = new System.Windows.Forms.TextBox();
            this.textBox_threshold_topicSim = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.button_tryEvolution = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(28, 76);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(159, 13);
            this.label1.TabIndex = 1;
            this.label1.Text = "请输入要进行计算的事件id：";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(28, 32);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(135, 13);
            this.label2.TabIndex = 3;
            this.label2.Text = "请输入要进化的本体id：";
            // 
            // textBox_ontologyID
            // 
            this.textBox_ontologyID.Location = new System.Drawing.Point(180, 29);
            this.textBox_ontologyID.Name = "textBox_ontologyID";
            this.textBox_ontologyID.Size = new System.Drawing.Size(100, 20);
            this.textBox_ontologyID.TabIndex = 4;
            // 
            // textBox_eventID
            // 
            this.textBox_eventID.Location = new System.Drawing.Point(180, 73);
            this.textBox_eventID.Name = "textBox_eventID";
            this.textBox_eventID.Size = new System.Drawing.Size(100, 20);
            this.textBox_eventID.TabIndex = 5;
            // 
            // textBox_threshold_topicSim
            // 
            this.textBox_threshold_topicSim.Location = new System.Drawing.Point(180, 115);
            this.textBox_threshold_topicSim.Name = "textBox_threshold_topicSim";
            this.textBox_threshold_topicSim.Size = new System.Drawing.Size(100, 20);
            this.textBox_threshold_topicSim.TabIndex = 6;
            this.textBox_threshold_topicSim.TabStop = false;
            this.textBox_threshold_topicSim.Text = "0.5";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(28, 118);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(127, 13);
            this.label3.TabIndex = 7;
            this.label3.Text = "请输入话题进化阈值：";
            // 
            // button_tryEvolution
            // 
            this.button_tryEvolution.Location = new System.Drawing.Point(31, 159);
            this.button_tryEvolution.Name = "button_tryEvolution";
            this.button_tryEvolution.Size = new System.Drawing.Size(91, 23);
            this.button_tryEvolution.TabIndex = 8;
            this.button_tryEvolution.Text = "进化尝试开始";
            this.button_tryEvolution.UseVisualStyleBackColor = true;
            this.button_tryEvolution.Click += new System.EventHandler(this.button_tryEvolution_Click);
            // 
            // OntologyEvolution
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(755, 385);
            this.Controls.Add(this.button_tryEvolution);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.textBox_threshold_topicSim);
            this.Controls.Add(this.textBox_eventID);
            this.Controls.Add(this.textBox_ontologyID);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "OntologyEvolution";
            this.Text = "话题本体进化";
            this.Load += new System.EventHandler(this.OntologyEvolution_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox textBox_ontologyID;
        private System.Windows.Forms.TextBox textBox_eventID;
        private System.Windows.Forms.TextBox textBox_threshold_topicSim;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Button button_tryEvolution;
    }
}