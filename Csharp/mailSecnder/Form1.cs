using System;
using System.Threading;
using System.Net;
using System.Net.Mail;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace mailsender
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }


        public void Startos()
        {
            try
            {

                string Connection = "Server=oll85bza.beget.tech;Port=3306;Database=oll85bza_id;Uid=oll85bza_id;password=";
                MySqlConnection conn = new MySqlConnection(Connection);
                MySqlCommand command = conn.CreateCommand();
                command.CommandText = "Select MyKeysI from MyKeyMail";


                conn.Open();


                MySqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    FromMySQL += reader["MyKeysI"].ToString() + " ";
                }

                code = Properties.Settings.Default["Key"].ToString();

                if (FromMySQL.Contains(code) && code.Length > 20)
                {
                    toolStripContainer1.Visible = false;
                }

            }
            catch
            {
                labelKey.Text = "Bad connection";
                labelKey.Visible = true;
            }
        }

        public string FromMySQL;
        string code;
        string[] tois;
        int count;

        public bool stop = false;

        public void Sender(string From, string Subj, string To, string Body, string[] ToS, bool Zap, bool New)
        {

            if (Zap == true)
            {
                tois = To.Split(',');
                count = tois.Length;
            }
            else if (New == true)
            {
                tois = ToS;
                count = ToS.Length;
            }

            for (int a = 0; a <= count - 1; a++)
            {
                if (stop != true)
                {
                    try
                    {
                        var fromAddress = new MailAddress("vsemtopa@gmail.com", From);
                        var toAddress = new MailAddress(tois[a], "To Name");
                        const string fromPassword = "qwerty21";
                        string subject = Subj;
                        string body = Body;

                        var smtp = new SmtpClient
                        {
                            Host = "smtp.gmail.com",
                            Port = 587,
                            EnableSsl = true,
                            DeliveryMethod = SmtpDeliveryMethod.Network,
                            UseDefaultCredentials = false,
                            Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
                        };
                        using (var message = new MailMessage(fromAddress, toAddress)
                        {
                            Subject = subject,
                            Body = body
                        })
                        {
                            smtp.Send(message);
                        }

                        Action ac = () =>
                        {
                            DateTime dy = DateTime.Now;
                            string Textzy = string.Format("{0:t}", dy);
                            string Timey = Textzy.ToString();
                            richTextLog.Text += "\n[" + Timey + "] Отправлено: " + tois[a];
                        };
                        Invoke(ac);
                    }
                    catch (Exception ex)
                    {
                        Action ac = () =>
                        {
                            DateTime dy = DateTime.Now;
                            string Textzy = string.Format("{0:t}", dy);
                            string Timey = Textzy.ToString();
                            richTextLog.Text += "\n[" + Timey + "] Не удалось отправить: " + tois[a];
                        };
                        Invoke(ac);
                    }
                }
            }
            Action aca = () =>
            {
                DateTime dy = DateTime.Now;
                string Textzy = string.Format("{0:t}", dy);
                string Timey = Textzy.ToString();
                richTextLog.Text += "\n[" + Timey + "] Работа успешно завершена!";
            };
            Invoke(aca);
        }

        private void button1_Click(object sender, System.EventArgs e)
        {

            string From = textFrom.Text;
            string Subj = textTheme.Text;
            string To = richTextTo.Text;
            string Body = richTextBody.Text;
            string[] ToS = richTextTo.Lines;
            bool Zap = checkBoxZap.Checked;
            bool New = checkBoxNew.Checked;

            if (checkBoxZap.Checked == false && checkBoxNew.Checked == false){
                DateTime dy = DateTime.Now;
                string Textzy = string.Format("{0:t}", dy);
                string Timey = Textzy.ToString();
                richTextLog.Text += "\n[" + Timey + "] Выберите формат, в котором загружены почты.";
            }

        if (checkBoxZap.Checked == true) { 

            if (To.Contains(","))
            {
                Thread myThr = new Thread(() => Sender(From, Subj, To, Body, ToS, Zap, New));
                myThr.Start();
            }
            else
            {
                DateTime dy = DateTime.Now;
                string Textzy = string.Format("{0:t}", dy);
                string Timey = Textzy.ToString();
                richTextLog.Text += "\n[" + Timey + "] Поставьте разделитель ',' между почтами.";
            }
        }
            else if (checkBoxNew.Checked == true)
            {
                Thread myThr = new Thread(() => Sender(From, Subj, To, Body, ToS, Zap, New));
                myThr.Start();
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            stop = true;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            OpenFileDialog OP = new OpenFileDialog();
            OP.Title = "Выберите файл";
            OP.Filter = "Текстовые файлы|*.txt";
            OP.FileName = "";

            if (OP.ShowDialog() != DialogResult.Cancel)
            {
                {
                    try
                    {
                        richTextTo.LoadFile(OP.FileName, RichTextBoxStreamType.PlainText);
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(ex.ToString(), ex.Source);
                    }
                }
            }
        }

        private void buttonSite_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("http://vsemtop.ru/18.php");
        }

        private void buttonSend_Click(object sender, EventArgs e)
        {
            try
            {

                string Connection = "Server=oll85bza.beget.tech;Port=3306;Database=oll85bza_id;Uid=oll85bza_id;password=";
                MySqlConnection conn = new MySqlConnection(Connection);
                MySqlCommand command = conn.CreateCommand();
                command.CommandText = "Select MyKeysI from MyKeyMail";

                conn.Open();


                MySqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    FromMySQL += reader["MyKeysI"].ToString() + " ";
                }

                code = textKey.Text;

                Properties.Settings.Default["Key"] = code;
                Properties.Settings.Default.Save();

                if (FromMySQL.Contains(code) && code.Length > 20)
                {
                    toolStripContainer1.Visible = false;
                }
                else
                {
                    labelKey.Text = "Ключ невалиден.";
                    labelKey.Visible = true;
                }
            }
            catch
            {
                labelKey.Text = "Bad connection";
                labelKey.Visible = true;
            }

        }

        private void checkBoxNew_CheckedChanged(object sender, EventArgs e)
        {
            checkBoxZap.Checked = false;
        }

        private void checkBoxZap_CheckedChanged(object sender, EventArgs e)
        {
            checkBoxNew.Checked = false;
        }
    }
}
