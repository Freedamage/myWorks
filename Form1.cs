using System.Windows.Forms;
using System;
using System.Threading;
using System.Runtime.InteropServices;

namespace viber
{
    public partial class Form1 : Form
    {
        [DllImport("Gdi32.dll")]
        public static extern IntPtr CreateRoundRectRgn(int nLeftRect,
                                                      int nTopRect,
                                                      int nRightRect,
                                                      int nBottomRect,
                                                      int nWidthEllipse,
                                                      int nHeightEllipse);
        [DllImport("user32.dll")]
        public static extern int SetWindowRgn(IntPtr hWnd, IntPtr hRgn, bool bRedraw);


        public Form1()
        {
            InitializeComponent();
            webBrowser1.ScriptErrorsSuppressed = true;
        }

        public string yourName = "2";

        private void Form1_Load(object sender, EventArgs e)
        {
            IntPtr hRgn = CreateRoundRectRgn(0, 0, pictureBox1.Width, pictureBox1.Height, 50, 50);
            SetWindowRgn(pictureBox1.Handle, hRgn, true);
        }

        public bool checkName = true;

        private void LogOut()
        {
            Action action = () =>
            {
                webBrowser1.Navigate("javascript:window.document.getElementsByClassName('x-ph__link x-ph__link_last')[0].click()");
            };
            Invoke(action);
            Thread.Sleep(1000);
            Action actionTwo = () =>
            {
                webBrowser1.Navigate("javascript:window.document.getElementsByName('logoff.confirm_not_decorate')[0].click()");
            };
            Invoke(actionTwo);
        }

        private void logIn()
        {

            string login = textBoxLog.Text;
            string pass = textBoxPass.Text;

            Action action = () =>
            {
                webBrowser1.Document.GetElementById("field_email").SetAttribute("value", login);
                webBrowser1.Document.GetElementById("field_password").SetAttribute("value", pass);
                webBrowser1.Navigate("javascript:window.document.getElementsByClassName('button-pro form-actions_yes')[1].click()");
            };
            Invoke(action);

            checkName = true;
        }

        private void button1_Click(object sender, System.EventArgs e)
        {
            logIn();
        }

        private void webBrowser1_DocumentCompleted(object sender, WebBrowserDocumentCompletedEventArgs e)
        {
            if (checkName == true)
            {
                label16.Visible = true;
                try
                {
                    yourName = webBrowser1.Document.GetElementsByTagName("h1")[0].InnerHtml;
                    var myImg = webBrowser1.Document.GetElementById("hook_Block_PostingForm").GetElementsByTagName("img")[0].GetAttribute("src");
                    pictureBox1.Load(myImg);
                    label1.Text = yourName;
                    label17.Visible = false;
                    label18.Visible = false;
                    label19.Visible = false;
                    textBoxLog.Visible = false;
                    textBoxPass.Visible = false;
                    button4.Visible = false;
                    checkName = false;
                    toolStripContainer1.Visible = false;
                    toolStripContainer1.ContentPanel.Visible = false;
                    label16.Visible = false;
                }
                catch (Exception ex)
                {
                    label17.Visible = true;
                    label18.Visible = true;
                    label19.Visible = true;
                    textBoxLog.Visible = true;
                    textBoxPass.Visible = true;
                    button4.Visible = true;
                    label16.Visible = false;
                    toolStripContainer1.Visible = true;
                    toolStripContainer1.ContentPanel.Visible = true;
                    yourName = "3";
                }
            }

        }

        private void label2_Click(object sender, EventArgs e)
        {
            Thread trLogOut = new Thread(LogOut);
            trLogOut.Start();
            toolStripContainer1.Visible = true;
            toolStripContainer1.ContentPanel.Visible = true;
            label17.Visible = true;
            label18.Visible = true;
            label19.Visible = true;
            textBoxLog.Visible = true;
            textBoxPass.Visible = true;
            button4.Visible = true;
        }

        public string getCityCode;
        public bool checkCity;
        public bool threadStart = true;

        private void StartProgramm(string myCountry, string myCity, decimal fromAge, decimal toAge, string nameGroup, decimal wait, decimal count)
        {
            if (threadStart == true)
            {
                Action ac0 = () =>
                {
                    richTextBox1.Text += "Начал работу.\n";
                };
                Invoke(ac0);


                Action ac1 = () =>
                {
                    webBrowser1.Navigate("https://ok.ru/search");
                };
                Invoke(ac1);

                Thread.Sleep(10000);

                Action ac4 = () =>
                {
                    HtmlElementCollection elmCols;
                    elmCols = webBrowser1.Document.GetElementById("field_fromage").GetElementsByTagName("option");
                    foreach (HtmlElement elmBtna in elmCols)
                    {
                        if (elmBtna.InnerHtml == fromAge.ToString())
                        {
                            elmBtna.SetAttribute("selected", "true");
                        }

                    }


                    HtmlElementCollection elmColsas;
                    elmColsas = webBrowser1.Document.GetElementById("field_tillage").GetElementsByTagName("option");
                    foreach (HtmlElement elmBtnasa in elmColsas)
                    {
                        if (elmBtnasa.InnerHtml == toAge.ToString())
                        {
                            elmBtnasa.SetAttribute("selected", "true");
                        }

                    }

                };
                Invoke(ac4);


                Thread.Sleep(10000);


                Action ac2 = () =>
                {
                    webBrowser1.Document.GetElementById("customPlaceItemSpan").InvokeMember("click");
                };
                Invoke(ac2);

                Thread.Sleep(1000);

                Action ac3 = () =>
                {
                    if (myCity == "")
                    {
                        HtmlElementCollection elmCol;
                        elmCol = webBrowser1.Document.GetElementsByTagName("option");
                        foreach (HtmlElement elmBtn in elmCol)
                        {
                            if (elmBtn.InnerHtml == myCountry)
                            {
                                elmBtn.SetAttribute("selected", "true");
                            }

                        }
                    }
                    else
                    {
                        webBrowser1.Document.GetElementById("field_city").SetAttribute("value", myCity);
                        webBrowser1.Document.GetElementById("field_city").Focus();
                        SendKeys.Send("{ENTER}");
                    }
                };
                Invoke(ac3);

                for (decimal i = 0; i <= count; i++)
                {
                    if (threadStart == true)
                    {
                        Action ac6 = () =>
                    {
                        webBrowser1.Document.Window.ScrollTo(0, Convert.ToInt32(150 * i)); //скролл
                        webBrowser1.Navigate("javascript:window.document.getElementsByClassName('gs_result_i_t_name o')[" + i + "].click()");
                    };
                        Invoke(ac6);

                        Thread.Sleep(5000);
                        try
                        {
                            Action ac7 = () =>
                        {

                            webBrowser1.Navigate("javascript:window.document.getElementsByClassName('tico_img ic ic_group')[0].click()");


                        };
                            Invoke(ac7);
                        }
                        catch (Exception anyEx)
                        {
                            continue;
                        }

                        Thread.Sleep(2000);

                        Action ac8 = () =>
                        {
                            HtmlElementCollection elmCol;
                            elmCol = webBrowser1.Document.GetElementsByTagName("img");
                            foreach (HtmlElement elmBtn in elmCol)
                            {
                                if (elmBtn.GetAttribute("alt") == nameGroup)
                                {
                                    elmBtn.InvokeMember("click");
                                    richTextBox1.Text += "Пришланеие отправлено, осталось " + Convert.ToInt32(count - i) + "\n";
                                }

                            }

                        };
                        Invoke(ac8);

                        Thread.Sleep(1000);

                        Action ac9 = () =>
                        {
                            webBrowser1.GoBack();
                        };
                        Invoke(ac9);

                        Action ac5 = () =>
                        {
                            richTextBox1.Text += "Пауза между приглашением: " + wait + " сек.\n";
                        };
                        Invoke(ac5);

                        Thread.Sleep(Convert.ToInt32(wait * 1000));
                    }
                }
            }

            Action acEnd = () =>
            {
                richTextBox1.Text += "Работа закончена.\n";
            };
            Invoke(acEnd);
                
        }

        private void button2_Click(object sender, EventArgs e)
        {
            checkCity = true;
            button2.Enabled = false;
            threadStart = true;

            string myCity = textBoxCity.Text;
            string myCountry = textBoxCountry.Text;
            decimal fromAge = numericUpDownFrom.Value;
            decimal toAge = numericUpDownTo.Value;
            decimal wait = numericUpDownWait.Value;
            decimal count = numericUpDownCount.Value;
            string nameGroup = textBoxNameOfGr.Text;


            Thread startTread = new Thread(() => StartProgramm(myCountry, myCity, fromAge, toAge, nameGroup, wait, count));
            startTread.Start();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            threadStart = false;
            button2.Enabled = true;
        }

        private void button4_Click(object sender, EventArgs e)
        {
            logIn();
        }
    }
}