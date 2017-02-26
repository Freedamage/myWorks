using System;
using System.Threading;
using System.Windows.Forms;
using xNet;

namespace checkindexlinks
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        bool stope = false;
        public int proxnext = 0;
        public int proxa = 1;

        private void button2_Click_1(object sender, EventArgs e)
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
                        richTextBoxLinks.LoadFile(OP.FileName, RichTextBoxStreamType.PlainText);
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(ex.ToString(), ex.Source);
                    }
                }
            }
        }

        private void Again(bool chllinkHttp, bool chllinkHttpS, string[] lines1, int i, bool proxHttp, bool proxSoc4, bool proxSoc5, string[] lines2)
        {
            HttpResponse Response;
            using (var Request = new HttpRequest())
            {
                   if (proxHttp)
                    {
                        Request.Proxy = HttpProxyClient.Parse(lines2[proxnext]);
                    }
                    else if (proxSoc4)
                    {
                        Request.Proxy = Socks4ProxyClient.Parse(lines2[proxnext]);
                    }
                    else if (proxSoc5)
                    {
                        Request.Proxy = Socks5ProxyClient.Parse(lines2[proxnext]);
                    }

                    if (proxnext == lines2.Length - 1)
                    {
                        proxnext = 0;
                    }
                    else proxnext++;
    


                Request.AllowAutoRedirect = true;
                Request.UserAgent = Http.FirefoxUserAgent();
                Request.Cookies = new CookieDictionary();

                if (chllinkHttp)
                {
                    Response = Request.Get("https://www.google.com/search?q=info%3Ahttp://" + lines1[i] + "&sourceid=chrome&ie=UTF-8");
                }
                else if (chllinkHttpS)
                {
                    Response = Request.Get("https://www.google.com/search?q=info%3Ahttps://" + lines1[i] + "&sourceid=chrome&ie=UTF-8");
                }
                else
                {
                    Response = Request.Get("https://www.google.com/search?q=info%3A" + lines1[i] + "&sourceid=chrome&ie=UTF-8");
                }
;

                if (Response.ToString().Contains("h3 class=\"r\""))
                {
                    Action action2 = () =>
                    {
                        richTextBoxYes.Text += lines1[i] + "\n";
                    };
                    Invoke(action2);
                }
                else
                {

                    Action action2 = () =>
                    {
                        richTextBoxNot.Text += lines1[i] + "\n";
                    };
                    Invoke(action2);

                }
            }
        }

        private void St(bool chllinkHttp, bool chllinkHttpS, string[] lines1, int i, bool proxHttp, bool proxSoc4, bool proxSoc5, string[] lines2)
        {
            try
            {
                Again(chllinkHttp, chllinkHttpS, lines1, i, proxHttp, proxSoc4, proxSoc5, lines2);
                proxa++;
            }
            catch (xNet.HttpException)
            {
                proxa++;
                St(chllinkHttp, chllinkHttpS, lines1, i, proxHttp, proxSoc4, proxSoc5, lines2);
            }
        }

        private void Work(string[] lines1, bool chllinkHttp, bool chllinkHttpS, bool proxHttp, bool proxSoc4, bool proxSoc5, string[] lines2)
        {
            for (int i = 0; i <= lines1.Length - 1; i++)
            {
                if (stope == false)
                {
                St(chllinkHttp, chllinkHttpS, lines1, i, proxHttp, proxSoc4, proxSoc5, lines2);
                }
                else break;
            }

            Action ac = () =>
            {
                button1.Text = "Начать проверку";
            };
            Invoke(ac);
        }

        private void button3_Click(object sender, EventArgs e)
        {
            richTextBoxLinks.Text = "";
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (button1.Text == "Начать проверку")
            {
                richTextBoxNot.Text = "";
                richTextBoxYes.Text = "";
                stope = false;
                string[] lines1 = richTextBoxLinks.Lines;
                string[] lines2 = richTextBoxProxy.Lines;
                bool chllinkHttp = checkBoxHTTP.Checked;
                bool chllinkHttpS = checkBoxHTTPS.Checked;
                bool proxHttp = checkBoxHttpProx.Checked;
                bool proxSoc4 = checkBoxSoc4Poxy.Checked;
                bool proxSoc5 = checkBoxSocks5Prox.Checked;
                button1.Text = "Остановить проверку";
                Thread tr = new Thread(() => Work(lines1, chllinkHttp, chllinkHttpS, proxHttp, proxSoc4, proxSoc5, lines2));
                tr.Start();
            }
            else if (button1.Text == "Остановить проверку")
            {
                stope = true;
                button1.Text = "Начать проверку";
            }
        }

        private void richTextBoxLinks_TextChanged(object sender, EventArgs e)
        {
            labelCounOfLinks.Text = "Количество ссылок: " + richTextBoxLinks.Lines.Length;
        }

        private void checkBoxHTTPS_CheckedChanged(object sender, EventArgs e)
        {
            if (checkBoxHTTP.Checked)
                checkBoxHTTP.Checked = false;

        }

        private void checkBoxHTTP_CheckedChanged(object sender, EventArgs e)
        {
            if (checkBoxHTTPS.Checked)
                checkBoxHTTPS.Checked = false;
        }

        private void richTextBoxYes_TextChanged(object sender, EventArgs e)
        {
            labelYes.Text = "Проиндексированные: " + (richTextBoxYes.Lines.Length-1);
        }

        private void richTextBoxNot_TextChanged(object sender, EventArgs e)
        {
            labelNot.Text = "Непроиндексированные: " + (richTextBoxNot.Lines.Length-1);
        }

        private void button4_Click(object sender, EventArgs e)
        {
            OpenFileDialog OPa = new OpenFileDialog();
            OPa.Title = "Выберите файл";
            OPa.Filter = "Текстовые файлы|*.txt";
            OPa.FileName = "";

            if (OPa.ShowDialog() != DialogResult.Cancel)
            {
                {
                    try
                    {
                        richTextBoxProxy.LoadFile(OPa.FileName, RichTextBoxStreamType.PlainText);
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(ex.ToString(), ex.Source);
                    }
                }
            }
        }

        private void checkBoxHttpProx_CheckedChanged(object sender, EventArgs e)
        {
            if (checkBoxSoc4Poxy.Checked)
            {
                checkBoxSoc4Poxy.Checked = false;
            }
            if (checkBoxSocks5Prox.Checked)
            {
                checkBoxSocks5Prox.Checked = false;
            }
        }

        private void checkBoxSoc4Poxy_CheckedChanged(object sender, EventArgs e)
        {
            if (checkBoxSocks5Prox.Checked)
            {
                checkBoxSocks5Prox.Checked = false;
            }
            if (checkBoxHttpProx.Checked)
            {
                checkBoxHttpProx.Checked = false;
            }
        }

        private void checkBoxSocks5Prox_CheckedChanged(object sender, EventArgs e)
        {
            if (checkBoxSoc4Poxy.Checked)
            {
                checkBoxSoc4Poxy.Checked = false;
            }
            if (checkBoxHttpProx.Checked)
            {
                checkBoxHttpProx.Checked = false;
            }
        }
    }
}
