namespace mailsender
{
    partial class Form1
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.button1 = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.textFrom = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.textTheme = new System.Windows.Forms.TextBox();
            this.richTextTo = new System.Windows.Forms.RichTextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.button2 = new System.Windows.Forms.Button();
            this.label4 = new System.Windows.Forms.Label();
            this.button3 = new System.Windows.Forms.Button();
            this.richTextBody = new System.Windows.Forms.RichTextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.richTextLog = new System.Windows.Forms.RichTextBox();
            this.label6 = new System.Windows.Forms.Label();
            this.toolStripContainer1 = new System.Windows.Forms.ToolStripContainer();
            this.buttonSite = new System.Windows.Forms.Button();
            this.buttonSend = new System.Windows.Forms.Button();
            this.labelKey = new System.Windows.Forms.Label();
            this.textKey = new System.Windows.Forms.TextBox();
            this.label7 = new System.Windows.Forms.Label();
            this.checkBoxZap = new System.Windows.Forms.CheckBox();
            this.checkBoxNew = new System.Windows.Forms.CheckBox();
            this.toolStripContainer1.ContentPanel.SuspendLayout();
            this.toolStripContainer1.SuspendLayout();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Cursor = System.Windows.Forms.Cursors.Hand;
            this.button1.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.button1.Location = new System.Drawing.Point(644, 449);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(122, 28);
            this.button1.TabIndex = 0;
            this.button1.Text = "ЗАПУСК";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.label1.Location = new System.Drawing.Point(1, 33);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(71, 20);
            this.label1.TabIndex = 1;
            this.label1.Text = "От кого:";
            // 
            // textFrom
            // 
            this.textFrom.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.textFrom.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.textFrom.Location = new System.Drawing.Point(78, 31);
            this.textFrom.Name = "textFrom";
            this.textFrom.Size = new System.Drawing.Size(165, 26);
            this.textFrom.TabIndex = 2;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.label2.Location = new System.Drawing.Point(21, 73);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(51, 20);
            this.label2.TabIndex = 3;
            this.label2.Text = "Тема:";
            // 
            // textTheme
            // 
            this.textTheme.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.textTheme.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.textTheme.Location = new System.Drawing.Point(78, 71);
            this.textTheme.Name = "textTheme";
            this.textTheme.Size = new System.Drawing.Size(165, 26);
            this.textTheme.TabIndex = 4;
            // 
            // richTextTo
            // 
            this.richTextTo.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.richTextTo.Location = new System.Drawing.Point(77, 112);
            this.richTextTo.Name = "richTextTo";
            this.richTextTo.Size = new System.Drawing.Size(323, 129);
            this.richTextTo.TabIndex = 5;
            this.richTextTo.Text = "";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.label3.Location = new System.Drawing.Point(21, 109);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(50, 20);
            this.label3.TabIndex = 6;
            this.label3.Text = "Кому:";
            // 
            // button2
            // 
            this.button2.Cursor = System.Windows.Forms.Cursors.Hand;
            this.button2.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.button2.Location = new System.Drawing.Point(230, 247);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(170, 28);
            this.button2.TabIndex = 7;
            this.button2.Text = "ЗАГРУЗИТЬ ИЗ ФАЙЛА";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.label4.Location = new System.Drawing.Point(75, 247);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(155, 48);
            this.label4.TabIndex = 8;
            this.label4.Text = "*почты указывать \r\n  через запятую,\r\n  либо с новой строчки";
            // 
            // button3
            // 
            this.button3.Cursor = System.Windows.Forms.Cursors.Hand;
            this.button3.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.button3.Location = new System.Drawing.Point(505, 449);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(122, 28);
            this.button3.TabIndex = 9;
            this.button3.Text = "СТОП";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // richTextBody
            // 
            this.richTextBody.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.richTextBody.Location = new System.Drawing.Point(77, 316);
            this.richTextBody.Name = "richTextBody";
            this.richTextBody.Size = new System.Drawing.Size(323, 114);
            this.richTextBody.TabIndex = 10;
            this.richTextBody.Text = "";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.label5.Location = new System.Drawing.Point(12, 319);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(56, 20);
            this.label5.TabIndex = 11;
            this.label5.Text = "Текст:";
            // 
            // richTextLog
            // 
            this.richTextLog.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.richTextLog.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.richTextLog.Location = new System.Drawing.Point(424, 71);
            this.richTextLog.Name = "richTextLog";
            this.richTextLog.Size = new System.Drawing.Size(342, 359);
            this.richTextLog.TabIndex = 12;
            this.richTextLog.Text = "";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.label6.Location = new System.Drawing.Point(577, 37);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(46, 20);
            this.label6.TabIndex = 13;
            this.label6.Text = "ЛОГ:";
            // 
            // toolStripContainer1
            // 
            // 
            // toolStripContainer1.ContentPanel
            // 
            this.toolStripContainer1.ContentPanel.Controls.Add(this.buttonSite);
            this.toolStripContainer1.ContentPanel.Controls.Add(this.buttonSend);
            this.toolStripContainer1.ContentPanel.Controls.Add(this.labelKey);
            this.toolStripContainer1.ContentPanel.Controls.Add(this.textKey);
            this.toolStripContainer1.ContentPanel.Controls.Add(this.label7);
            this.toolStripContainer1.ContentPanel.Size = new System.Drawing.Size(786, 492);
            this.toolStripContainer1.Location = new System.Drawing.Point(-7, -1);
            this.toolStripContainer1.Name = "toolStripContainer1";
            this.toolStripContainer1.Size = new System.Drawing.Size(786, 492);
            this.toolStripContainer1.TabIndex = 14;
            this.toolStripContainer1.Text = "toolStripContainer1";
            // 
            // buttonSite
            // 
            this.buttonSite.Cursor = System.Windows.Forms.Cursors.Hand;
            this.buttonSite.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonSite.Location = new System.Drawing.Point(500, 449);
            this.buttonSite.Name = "buttonSite";
            this.buttonSite.Size = new System.Drawing.Size(122, 30);
            this.buttonSite.TabIndex = 4;
            this.buttonSite.Text = "купить ключ";
            this.buttonSite.UseVisualStyleBackColor = true;
            this.buttonSite.Click += new System.EventHandler(this.buttonSite_Click);
            // 
            // buttonSend
            // 
            this.buttonSend.Cursor = System.Windows.Forms.Cursors.Hand;
            this.buttonSend.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.buttonSend.Location = new System.Drawing.Point(632, 449);
            this.buttonSend.Name = "buttonSend";
            this.buttonSend.Size = new System.Drawing.Size(129, 30);
            this.buttonSend.TabIndex = 3;
            this.buttonSend.Text = "активировать";
            this.buttonSend.UseVisualStyleBackColor = true;
            this.buttonSend.Click += new System.EventHandler(this.buttonSend_Click);
            // 
            // labelKey
            // 
            this.labelKey.AutoSize = true;
            this.labelKey.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.labelKey.ForeColor = System.Drawing.Color.Maroon;
            this.labelKey.Location = new System.Drawing.Point(615, 372);
            this.labelKey.Name = "labelKey";
            this.labelKey.Size = new System.Drawing.Size(142, 20);
            this.labelKey.TabIndex = 2;
            this.labelKey.Text = "Ключ невалиден.";
            this.labelKey.Visible = false;
            // 
            // textKey
            // 
            this.textKey.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.textKey.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.textKey.Location = new System.Drawing.Point(448, 406);
            this.textKey.Name = "textKey";
            this.textKey.Size = new System.Drawing.Size(313, 26);
            this.textKey.TabIndex = 1;
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            this.label7.Location = new System.Drawing.Point(205, 408);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(237, 20);
            this.label7.TabIndex = 0;
            this.label7.Text = "Введите лицензионный ключ:";
            // 
            // checkBoxZap
            // 
            this.checkBoxZap.AutoSize = true;
            this.checkBoxZap.Location = new System.Drawing.Point(230, 278);
            this.checkBoxZap.Name = "checkBoxZap";
            this.checkBoxZap.Size = new System.Drawing.Size(103, 17);
            this.checkBoxZap.TabIndex = 15;
            this.checkBoxZap.Text = "Через запятую";
            this.checkBoxZap.UseVisualStyleBackColor = true;
            this.checkBoxZap.CheckedChanged += new System.EventHandler(this.checkBoxZap_CheckedChanged);
            // 
            // checkBoxNew
            // 
            this.checkBoxNew.AutoSize = true;
            this.checkBoxNew.Location = new System.Drawing.Point(230, 298);
            this.checkBoxNew.Name = "checkBoxNew";
            this.checkBoxNew.Size = new System.Drawing.Size(109, 17);
            this.checkBoxNew.TabIndex = 16;
            this.checkBoxNew.Text = "С новой строчки";
            this.checkBoxNew.UseVisualStyleBackColor = true;
            this.checkBoxNew.CheckedChanged += new System.EventHandler(this.checkBoxNew_CheckedChanged);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(778, 489);
            this.Controls.Add(this.toolStripContainer1);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.richTextLog);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.richTextBody);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.richTextTo);
            this.Controls.Add(this.textTheme);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.textFrom);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.checkBoxNew);
            this.Controls.Add(this.checkBoxZap);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "Form1";
            this.Text = "Mail Sender";
            this.toolStripContainer1.ContentPanel.ResumeLayout(false);
            this.toolStripContainer1.ContentPanel.PerformLayout();
            this.toolStripContainer1.ResumeLayout(false);
            this.toolStripContainer1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox textFrom;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox textTheme;
        private System.Windows.Forms.RichTextBox richTextTo;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.RichTextBox richTextBody;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.RichTextBox richTextLog;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.ToolStripContainer toolStripContainer1;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Button buttonSite;
        private System.Windows.Forms.Button buttonSend;
        private System.Windows.Forms.Label labelKey;
        private System.Windows.Forms.TextBox textKey;
        private System.Windows.Forms.CheckBox checkBoxZap;
        private System.Windows.Forms.CheckBox checkBoxNew;
    }
}

