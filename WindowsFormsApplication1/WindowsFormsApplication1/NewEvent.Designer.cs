namespace ontology
{
    partial class NewEvent
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
            this.radioButton_isSinaWeibo = new System.Windows.Forms.RadioButton();
            this.textBox_txtURL = new System.Windows.Forms.TextBox();
            this.button_timeInfoExtract = new System.Windows.Forms.Button();
            this.button_otherInfoExtract = new System.Windows.Forms.Button();
            this.richTextBox_otherInfoExtract = new System.Windows.Forms.RichTextBox();
            this.richTextBox_readTxtToString_timeExtract = new System.Windows.Forms.RichTextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label_status = new System.Windows.Forms.Label();
            this.textBox_fromPublisher = new System.Windows.Forms.TextBox();
            this.dateTimePicker_fromTime = new System.Windows.Forms.DateTimePicker();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // radioButton_isSinaWeibo
            // 
            this.radioButton_isSinaWeibo.AutoSize = true;
            this.radioButton_isSinaWeibo.Location = new System.Drawing.Point(269, 47);
            this.radioButton_isSinaWeibo.Name = "radioButton_isSinaWeibo";
            this.radioButton_isSinaWeibo.Size = new System.Drawing.Size(121, 17);
            this.radioButton_isSinaWeibo.TabIndex = 12;
            this.radioButton_isSinaWeibo.TabStop = true;
            this.radioButton_isSinaWeibo.Text = "文本来自新浪微博";
            this.radioButton_isSinaWeibo.UseVisualStyleBackColor = true;
            // 
            // textBox_txtURL
            // 
            this.textBox_txtURL.Location = new System.Drawing.Point(26, 43);
            this.textBox_txtURL.Name = "textBox_txtURL";
            this.textBox_txtURL.Size = new System.Drawing.Size(225, 20);
            this.textBox_txtURL.TabIndex = 11;
            this.textBox_txtURL.Text = "K:\\Users\\Lz.Simon\\Desktop\\WindowsFormsApplication1\\corpus\\新浪微博0.txt";
            // 
            // button_timeInfoExtract
            // 
            this.button_timeInfoExtract.Location = new System.Drawing.Point(459, 150);
            this.button_timeInfoExtract.Name = "button_timeInfoExtract";
            this.button_timeInfoExtract.Size = new System.Drawing.Size(75, 23);
            this.button_timeInfoExtract.TabIndex = 13;
            this.button_timeInfoExtract.Text = "时间抽取";
            this.button_timeInfoExtract.UseVisualStyleBackColor = true;
            this.button_timeInfoExtract.Click += new System.EventHandler(this.button_timeInfoExtract_Click);
            // 
            // button_otherInfoExtract
            // 
            this.button_otherInfoExtract.Location = new System.Drawing.Point(1026, 288);
            this.button_otherInfoExtract.Name = "button_otherInfoExtract";
            this.button_otherInfoExtract.Size = new System.Drawing.Size(94, 23);
            this.button_otherInfoExtract.TabIndex = 16;
            this.button_otherInfoExtract.Text = "其他要素抽取";
            this.button_otherInfoExtract.UseVisualStyleBackColor = true;
            this.button_otherInfoExtract.Click += new System.EventHandler(this.button_otherInfoExtract_Click);
            // 
            // richTextBox_otherInfoExtract
            // 
            this.richTextBox_otherInfoExtract.Location = new System.Drawing.Point(583, 42);
            this.richTextBox_otherInfoExtract.Name = "richTextBox_otherInfoExtract";
            this.richTextBox_otherInfoExtract.Size = new System.Drawing.Size(537, 240);
            this.richTextBox_otherInfoExtract.TabIndex = 15;
            this.richTextBox_otherInfoExtract.Text = "";
            // 
            // richTextBox_readTxtToString_timeExtract
            // 
            this.richTextBox_readTxtToString_timeExtract.Location = new System.Drawing.Point(26, 213);
            this.richTextBox_readTxtToString_timeExtract.Name = "richTextBox_readTxtToString_timeExtract";
            this.richTextBox_readTxtToString_timeExtract.Size = new System.Drawing.Size(508, 240);
            this.richTextBox_readTxtToString_timeExtract.TabIndex = 18;
            this.richTextBox_readTxtToString_timeExtract.Text = "";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(23, 197);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(79, 13);
            this.label1.TabIndex = 19;
            this.label1.Text = "待分词文本：";
            // 
            // label_status
            // 
            this.label_status.AutoSize = true;
            this.label_status.Location = new System.Drawing.Point(580, 477);
            this.label_status.Name = "label_status";
            this.label_status.Size = new System.Drawing.Size(67, 13);
            this.label_status.TabIndex = 20;
            this.label_status.Text = "当前状态：";
            // 
            // textBox_fromPublisher
            // 
            this.textBox_fromPublisher.Location = new System.Drawing.Point(144, 89);
            this.textBox_fromPublisher.Name = "textBox_fromPublisher";
            this.textBox_fromPublisher.Size = new System.Drawing.Size(200, 20);
            this.textBox_fromPublisher.TabIndex = 21;
            // 
            // dateTimePicker_fromTime
            // 
            this.dateTimePicker_fromTime.CustomFormat = "yyyy-MM-dd HH:mm";
            this.dateTimePicker_fromTime.Format = System.Windows.Forms.DateTimePickerFormat.Custom;
            this.dateTimePicker_fromTime.Location = new System.Drawing.Point(144, 118);
            this.dateTimePicker_fromTime.Name = "dateTimePicker_fromTime";
            this.dateTimePicker_fromTime.Size = new System.Drawing.Size(200, 20);
            this.dateTimePicker_fromTime.TabIndex = 22;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(23, 123);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(103, 13);
            this.label2.TabIndex = 23;
            this.label2.Text = "请选择发布时间：";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(23, 92);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(91, 13);
            this.label3.TabIndex = 24;
            this.label3.Text = "请输入发布人：";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(580, 26);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(127, 13);
            this.label4.TabIndex = 25;
            this.label4.Text = "请输入分词结果文本：";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(23, 26);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(114, 13);
            this.label5.TabIndex = 26;
            this.label5.Text = "请输入文本txt地址：";
            // 
            // NewEvent
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1156, 499);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.dateTimePicker_fromTime);
            this.Controls.Add(this.textBox_fromPublisher);
            this.Controls.Add(this.label_status);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.richTextBox_readTxtToString_timeExtract);
            this.Controls.Add(this.button_otherInfoExtract);
            this.Controls.Add(this.richTextBox_otherInfoExtract);
            this.Controls.Add(this.button_timeInfoExtract);
            this.Controls.Add(this.radioButton_isSinaWeibo);
            this.Controls.Add(this.textBox_txtURL);
            this.Name = "NewEvent";
            this.Text = "新建事件";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.RadioButton radioButton_isSinaWeibo;
        private System.Windows.Forms.TextBox textBox_txtURL;
        private System.Windows.Forms.Button button_timeInfoExtract;
        private System.Windows.Forms.Button button_otherInfoExtract;
        private System.Windows.Forms.RichTextBox richTextBox_otherInfoExtract;
        private System.Windows.Forms.RichTextBox richTextBox_readTxtToString_timeExtract;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label_status;
        private System.Windows.Forms.TextBox textBox_fromPublisher;
        private System.Windows.Forms.DateTimePicker dateTimePicker_fromTime;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
    }
}