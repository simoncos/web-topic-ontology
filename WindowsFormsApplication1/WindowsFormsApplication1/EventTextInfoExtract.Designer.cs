namespace ontology
{
    partial class EventTextInfoExtract
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.richTextBox_readTxtToString_timeExtract = new System.Windows.Forms.RichTextBox();
            this.button_readTxtToString_timeExtract = new System.Windows.Forms.Button();
            this.richTextBox_otherInfoExtract = new System.Windows.Forms.RichTextBox();
            this.button_otherInfoExtract = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // richTextBox_readTxtToString_timeExtract
            // 
            this.richTextBox_readTxtToString_timeExtract.Location = new System.Drawing.Point(22, 74);
            this.richTextBox_readTxtToString_timeExtract.Name = "richTextBox_readTxtToString_timeExtract";
            this.richTextBox_readTxtToString_timeExtract.Size = new System.Drawing.Size(508, 240);
            this.richTextBox_readTxtToString_timeExtract.TabIndex = 11;
            this.richTextBox_readTxtToString_timeExtract.Text = "";
            // 
            // button_readTxtToString_timeExtract
            // 
            this.button_readTxtToString_timeExtract.Location = new System.Drawing.Point(22, 325);
            this.button_readTxtToString_timeExtract.Name = "button_readTxtToString_timeExtract";
            this.button_readTxtToString_timeExtract.Size = new System.Drawing.Size(134, 24);
            this.button_readTxtToString_timeExtract.TabIndex = 5;
            this.button_readTxtToString_timeExtract.Text = "时间信息抽取";
            this.button_readTxtToString_timeExtract.UseVisualStyleBackColor = true;
            this.button_readTxtToString_timeExtract.Click += new System.EventHandler(this.button_timeExtract_Click);
            // 
            // richTextBox_otherInfoExtract
            // 
            this.richTextBox_otherInfoExtract.Location = new System.Drawing.Point(554, 74);
            this.richTextBox_otherInfoExtract.Name = "richTextBox_otherInfoExtract";
            this.richTextBox_otherInfoExtract.Size = new System.Drawing.Size(537, 240);
            this.richTextBox_otherInfoExtract.TabIndex = 13;
            this.richTextBox_otherInfoExtract.Text = "请在此输入分词结果文本";
            // 
            // button_otherInfoExtract
            // 
            this.button_otherInfoExtract.Location = new System.Drawing.Point(554, 326);
            this.button_otherInfoExtract.Name = "button_otherInfoExtract";
            this.button_otherInfoExtract.Size = new System.Drawing.Size(142, 23);
            this.button_otherInfoExtract.TabIndex = 14;
            this.button_otherInfoExtract.Text = "时间外要素信息抽取";
            this.button_otherInfoExtract.UseVisualStyleBackColor = true;
            this.button_otherInfoExtract.Click += new System.EventHandler(this.button_otherInfoExtract_Click);
            // 
            // EventTextInfoExtract
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1155, 666);
            this.Controls.Add(this.button_otherInfoExtract);
            this.Controls.Add(this.richTextBox_otherInfoExtract);
            this.Controls.Add(this.button_readTxtToString_timeExtract);
            this.Controls.Add(this.richTextBox_readTxtToString_timeExtract);
            this.Name = "EventTextInfoExtract";
            this.Text = "事件文本信息抽取";
            this.Load += new System.EventHandler(this.EventTextInfoExtract_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.RichTextBox richTextBox_readTxtToString_timeExtract;
        private System.Windows.Forms.Button button_readTxtToString_timeExtract;
        private System.Windows.Forms.RichTextBox richTextBox_otherInfoExtract;
        private System.Windows.Forms.Button button_otherInfoExtract;
    }
}

