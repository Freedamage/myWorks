using System.Text.RegularExpressions;
using System;
using System.Linq;
using System.Windows.Forms;
using VkNet;
using VkNet.Model.RequestParams;
using VkNet.Enums.Filters;
using System.Threading;
using VkNet.Model;
using VkNet.Model.Attachments;
using System.Collections.Generic;
using MySql.Data.MySqlClient;


namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {

        public Form1()
        {
            InitializeComponent();
            Startos();

            numericUpDownLoop.Value = Convert.ToDecimal(Properties.Settings.Default["Loop"]);
            numericUpDown3.Value = Convert.ToDecimal(Properties.Settings.Default["ChangeAcc"]);
            numericUpDown4.Value = Convert.ToDecimal(Properties.Settings.Default["CountPict"]);
            checkBox2.Checked = Convert.ToBoolean(Properties.Settings.Default["AddPic"]);
            checkBox1.Checked = Convert.ToBoolean(Properties.Settings.Default["FromGr"]);
            textBox1.Text = Properties.Settings.Default["Api"].ToString();
            trackBar1.Value = Convert.ToInt32(Properties.Settings.Default["WaitSecT"]);
            numericUpDown2.Value = Convert.ToDecimal(Properties.Settings.Default["WaitSecN"]);
            richTextBoxAccsz.Text = Properties.Settings.Default["Accs"].ToString();
            numericUpDown1.Value = Convert.ToDecimal(Properties.Settings.Default["TextChange"]);
            richTextBoxGroups.Text = Properties.Settings.Default["Groups"].ToString();
            richTextBoxText.Text = Properties.Settings.Default["Text"].ToString();
            richTextBox1.Text = Properties.Settings.Default["Picture"].ToString();

        }

        public void Startos()
        {
            try
            {
                BaddConnection.Visible = false;
                buttonAgain.Visible = false;
                string Connection = "Server=;Port=;Database=;Uid=;password=";
                MySqlConnection conn = new MySqlConnection(Connection);
                MySqlCommand command = conn.CreateCommand();
                command.CommandText = "Select MyKeysI from MyKey";


                conn.Open();


                MySqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    FromMySQL += reader["MyKeysI"].ToString() + " ";
                }

                code = Properties.Settings.Default["Key"].ToString();

                if (FromMySQL.Contains(code) && code.Length > 20)
                {
                    buttonAgain.Visible = false;
                    toolStripContainer1.Visible = false;
                    AuthBtn.Visible = false;
                    AuthCode.Visible = false;
                    TypeCode.Visible = false;
                    ErrorOfKey.Visible = false;
                    button7.Visible = false;
                    BaddConnection.Visible = false;
                }

            }
            catch
            {
                AuthBtn.Visible = false;
                AuthCode.Visible = false;
                TypeCode.Visible = false;
                ErrorOfKey.Visible = false;
                button7.Visible = false;
                BaddConnection.Visible = true;
                buttonAgain.Visible = true;
            }
        }
        
        public string FromMySQL;
        private decimal kaz = 0;
        private short ka = 0;
        private string texta;
        public static bool changed;
        bool prove;
        int ko = 0;
        int koko = 0;

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        

        private void trackBar1_Scroll(object sender, EventArgs e)
        {

            numericUpDown2.Value = trackBar1.Value;

        }

        private void numericUpDown2_KeyPress(object sender, KeyPressEventArgs e)
        {

            if (numericUpDown2.Text.Length > 4 && Char.IsDigit(e.KeyChar))
            {
                e.Handled = true;
            }


        }
        
        
        bool secondVowelP;
        bool secondVowelM;
        bool firstIsVowel;
        public string log;
        public string pass;
        public int CountOfGr = 0;
        public bool thread_stop = false;
        string code;
        int l = 0;


        public string Message(string[] lines2, int k, long captcha_sid, string captcha_key, bool prove, long id, string texta, VkApi vk, string capkey, string text4, bool check1, string[] lines3, decimal num1)
        {
          
            try   

              {

                if (check1 == true && text4 != "" && num1 == 1)
                {
                    secondVowelP = (new Regex(@"^photo[0-9]{4,13}_[0-9]{4,13}$").IsMatch(lines3[l]));
                    secondVowelM = (new Regex(@"^photo[0-9]{4,13}_[0-9]{4,13}$").IsMatch(lines3[l]));

                    if (!(lines3.Length >= 1) && (!secondVowelM || !secondVowelP)) //добавить проверку на ID Регулярным выражением
                    {

                        DateTime dy = DateTime.Now;
                        string Textzy = string.Format("{0:t}", dy);
                        string Timey = Textzy.ToString();
                        Action actiony = () =>
                        {
                            richTextBoxAccz.Text += "\n[" + Timey + "] Картинка не размещена, введен неверный формат.\n";
                        };
                        Invoke(actiony);

                    }
                    else {
                        lines3[l] = lines3[l].Replace(" ", "");
                        var ph = lines3[l].Replace("photo", "");
                        var zasada = ph.Split('_');
                        long pervuy = long.Parse(zasada[0]);
                        long vtoroy = long.Parse(zasada[1]);

                        if (captcha_sid != 0 && captcha_key != "")
                        {

                            DateTime dy = DateTime.Now;
                            string Textzy = string.Format("{0:t}", dy);
                            string Timey = Textzy.ToString();
                            Action actiony = () =>
                            {
                                richTextBoxAccz.Text += "\n[" + Timey + "] Капча решена. Текущий баланс на рукапче: " + Rucaptcha.Balance() + " руб.\n";
                            };
                            Invoke(actiony);

                            var attachment = new List<MediaAttachment>();
                            var media = new Photo();
                            media.OwnerId = pervuy;
                            media.Id = vtoroy;
                            attachment.Add(media);

                            var post = vk.Wall.Post(new WallPostParams
                            {
                                OwnerId = -id,
                                FromGroup = prove,
                                Message = texta,
                                Attachments = attachment,
                                CaptchaSid = captcha_sid,
                                CaptchaKey = captcha_key
                            });
                            l++;
                        }
                        else
                        {
                            var attachment = new List<MediaAttachment>();
                            var media = new Photo();
                            media.OwnerId = pervuy;
                            media.Id = vtoroy;
                            attachment.Add(media);

                            var post = vk.Wall.Post(new WallPostParams
                            {
                                OwnerId = -id,
                                FromGroup = prove,
                                Message = texta,
                                Attachments = attachment
                            });
                            l++;
                        }
                    }
                }


                else if (check1 == true && text4 != "" && num1 == 2 && lines3.Length >= 2)
                {
                    secondVowelP = (new Regex(@"^photo[0-9]{4,13}_[0-9]{4,13}$").IsMatch(lines3[l]));
                    secondVowelM = (new Regex(@"^photo-[0-9]{4,13}_[0-9]{4,13}$").IsMatch(lines3[l]));

                    if (!secondVowelM || !secondVowelP) //добавить проверку на ID егулярным выражением
                    {

                        DateTime dy = DateTime.Now;
                        string Textzy = string.Format("{0:t}", dy);
                        string Timey = Textzy.ToString();
                        Action actiony = () =>
                        {
                            richTextBoxAccz.Text += "\n[" + Timey + "] Картинка не размещена, введен неверный формат.\n";
                        };
                        Invoke(actiony);

                    }else { 

                    string pha;
                    lines3[l] = lines3[l].Replace(" ", "");
                    var ph = lines3[l].Replace("photo", "");
                    var zasada = ph.Split('_');
                    long pervuy = long.Parse(zasada[0]);
                    long vtoroy = long.Parse(zasada[1]);
                    if (l == lines3.Length - 1)
                    {
                        lines3[0] = lines3[0].Replace(" ", "");
                        pha = lines3[0].Replace("photo", "");
                    }
                    else
                    {
                        lines3[Convert.ToInt32(l + 1)] = lines3[Convert.ToInt32(l + 1)].Replace(" ", "");
                        pha = lines3[Convert.ToInt32(l + 1)].Replace("photo", "");
                    }
                    var zasada2 = pha.Split('_');
                    long pervuy2 = long.Parse(zasada2[0]);
                    long vtoroy2 = long.Parse(zasada2[1]);


                    if (captcha_sid != 0 && captcha_key != "")
                    {

                        DateTime dy = DateTime.Now;
                        string Textzy = string.Format("{0:t}", dy);
                        string Timey = Textzy.ToString();
                        Action actiony = () =>
                        {
                            richTextBoxAccz.Text += "\n[" + Timey + "] Капча решена. Текущий баланс на рукапче: " + Rucaptcha.Balance() + " руб.\n";
                        };
                        Invoke(actiony);

                        var attachment = new List<MediaAttachment>();
                        var media = new Photo();
                        media.OwnerId = pervuy;
                        media.Id = vtoroy;
                        attachment.Add(media);

                        var media2 = new Photo();
                        media2.OwnerId = pervuy2;
                        media2.Id = vtoroy2;
                        attachment.Add(media2);

                        var post = vk.Wall.Post(new WallPostParams
                        {
                            OwnerId = -id,
                            FromGroup = prove,
                            Message = texta,
                            Attachments = attachment,
                            CaptchaSid = captcha_sid,
                            CaptchaKey = captcha_key
                        });
                        l += 2;
                    }
                    else
                    {
                        var attachment = new List<MediaAttachment>();
                        var media = new Photo();
                        media.OwnerId = pervuy;
                        media.Id = vtoroy;
                        attachment.Add(media);

                        var media2 = new Photo();
                        media2.OwnerId = pervuy2;
                        media2.Id = vtoroy2;
                        attachment.Add(media2);

                        var post = vk.Wall.Post(new WallPostParams
                        {
                            OwnerId = -id,
                            FromGroup = prove,
                            Message = texta,
                            Attachments = attachment
                        });

                        l += 2;
                    }
                }

                }
               
                else
                {
                    if (captcha_sid != 0 && captcha_key != "")
                    {

                        DateTime dy = DateTime.Now;
                        string Textzy = string.Format("{0:t}", dy);
                        string Timey = Textzy.ToString();
                        Action actiony = () =>
                        {
                            richTextBoxAccz.Text += "\n[" + Timey + "] Капча решена. Текущий баланс на рукапче: " + Rucaptcha.Balance() + " руб.\n";
                        };
                        Invoke(actiony);


                        var post = vk.Wall.Post(new WallPostParams
                        {
                            OwnerId = -id,
                            FromGroup = prove,
                            Message = texta,
                            CaptchaSid = captcha_sid,
                            CaptchaKey = captcha_key
                        });
                    }
                    else
                    {
                       var post = vk.Wall.Post(new WallPostParams
                        {
                            OwnerId = -id,
                            FromGroup = prove,
                            Message = texta
                        });
                    }
                }
                

                CountOfGr++;
                DateTime di = DateTime.Now;
                string Textza = string.Format("{0:t}", di);
                string Timea = Textza.ToString();
                Action action2 = () =>
                {
                    richTextBoxAccz.Text += "\n[" + Timea + "] Оставлена запись в сообществе: " + lines2[k].Replace("https://","") + ".\n";
                };
                Invoke(action2);
                if (!(lines2.Length == CountOfGr))
                {
                    DateTime diz = DateTime.Now;
                    string Textzaza = string.Format("{0:t}", diz);
                    string Timeaza = Textzaza.ToString();
                    Action actionza = () =>
                    {
                        var numa = numericUpDown2.Value.ToString();
                            if (numa[numa.Length - 1] == '1')
                            {
                                richTextBoxAccz.Text += "\n[" + Timeaza + "] Пауза: " +numericUpDown2.Value+" секунду.\n";
                            }
                            else if (numa[numa.Length - 1] == '2' || numa[numa.Length - 1] == '3' || numa[numa.Length - 1] == '4')
                            {
                                richTextBoxAccz.Text += "\n[" + Timeaza + "] Пауза: " + numericUpDown2.Value + " секунды.\n";

                            }
                            else if (numa[numa.Length - 1] == '0' || numa[numa.Length - 1] == '5' || numa[numa.Length - 1] == '6' || numa[numa.Length - 1] == '7' || numa[numa.Length - 1] == '8' || numa[numa.Length - 1] == '9')
                            {
                                richTextBoxAccz.Text += "\n[" + Timeaza + "] Пауза: " + numericUpDown2.Value + " секунд.\n";
                            }

                    };
                    Invoke(actionza);
                    
                        for (int tima = 1; tima <= numericUpDown2.Value; tima++)
                        {
                        if (!thread_stop)
                        {
                            Thread.Sleep(Convert.ToInt32(1000));
                        }
                        else if (thread_stop) break;
                        }
                }
            }
            catch (VkNet.Exception.CaptchaNeededException cEx)
            {
                DateTime di = DateTime.Now;
                string Textza = string.Format("{0:t}", di);
                string Timea = Textza.ToString();
                Action action3 = () =>
                {
                    richTextBoxAccz.Text += "\n[" + Timea + "] Попалась капча.\n";
                };
                Invoke(action3);

                Rucaptcha.Key = capkey;
                long captcha_sida = cEx.Sid;
                string captcha_url = cEx.Img.ToString();
                string captchaPath = Rucaptcha.Download_Captcha(captcha_url);
                string captcha_keya = Rucaptcha.Recognize(captchaPath);
                Message(lines2, k, captcha_sida, captcha_keya, prove, id, texta, vk, capkey, text4, check1, lines3, num1);
            }
            catch (Exception eX)
            {
                MessageBox.Show(eX.ToString());
                DateTime di = DateTime.Now;
                string Textza = string.Format("{0:t}", di);
                string Timea = Textza.ToString();
                Action action3 = () =>
                {
                    richTextBoxAccz.Text += "\n[" + Timea + "] Не получилось оставить запись в сообществе: " + lines2[k] + ", возможно, закрыта стена или выбран пункт \"Публикация от имени сообщества\", не имея прав в группе.\n";
                };
                Invoke(action3);
            }


            if (num1 == 1)
            {
                if (l >= lines3.Length - 1)
                    l = 0;
            }
            else if (num1 == 2)
            {
                if (l >= lines3.Length)
                    l = 0;
            }

            return "good";
        }

        public string Auth(long captcha_sid, string captcha_key, string pass, string log, int i, VkApi vk, string capkey)
        {
            try
            {
                ulong appId = 2685278; // указываем id приложения
                string email = log; // email для авторизации
                string passa = pass;  // пароль для авторизации
                Settings scope = Settings.All; // уровень доступа к данным

                if (captcha_sid != 0 && captcha_key != "") {
                    DateTime dy = DateTime.Now;
                    string Textzy = string.Format("{0:t}", dy);
                    string Timey = Textzy.ToString();
                    Action actiony = () =>
                    {
                        richTextBoxAccz.Text += "\n[" + Timey + "] Капча решена. Текущий баланс на рукапче: " + Rucaptcha.Balance() + " руб.\n";
                    };
                    Invoke(actiony);

                    vk.Authorize(new ApiAuthParams
                    {
                        ApplicationId = appId,
                        Login = email,
                        Password = passa,
                        Settings = scope,
                        CaptchaSid = captcha_sid,
                        CaptchaKey = captcha_key
                    });
                }
                else {

                    CountOfGr = 0;
                    vk.Authorize(new ApiAuthParams
                    {
                        ApplicationId = appId,
                        Login = email,
                        Password = passa,
                        Settings = scope,

                    });
                }

                if (Convert.ToInt32(i + 1) == 2) {

                    DateTime d = DateTime.Now;
                    string Textz = string.Format("{0:t}", d);
                    string Time = Textz.ToString();
                    Action action = () =>
                    {
                        richTextBoxAccz.Text += "\n[" + Time + "] Выполнен вход во " + Convert.ToInt32(i + 1) + " аккаунт, с логином: " + log + ".\n";
                    };
                    Invoke(action);

                }
                else
                {
                    DateTime d = DateTime.Now;
                    string Textz = string.Format("{0:t}", d);
                    string Time = Textz.ToString();
                    Action action = () =>
                    {
                        richTextBoxAccz.Text += "\n[" + Time + "] Выполнен вход в " + Convert.ToInt32(i + 1) + " аккаунт, с логином: " + log + ".\n";
                    };
                    Invoke(action);
                }
                return "ok";

            }
            catch (VkNet.Exception.CaptchaNeededException cEx)
            {
                DateTime d = DateTime.Now;
                string Textz = string.Format("{0:t}", d);
                string Time = Textz.ToString();
                Action action = () =>
                {
                    richTextBoxAccz.Text += "\n[" + Time + "] Попалась капча.\n";
                };
                //рагад, получение капча кей
                Rucaptcha.Key = capkey;
                long captcha_sida = cEx.Sid;
                string captcha_url = cEx.Img.ToString();
                string captchaPath = Rucaptcha.Download_Captcha(captcha_url);
                string captcha_keya = Rucaptcha.Recognize(captchaPath);
                Auth(captcha_sida, captcha_keya, pass, log, i, vk, capkey);
                return "bad";
            }
        }

        private void StartPosting(string[] lines1, string[] lines2, string text1, string text2, string text3, string[] lines3, string text4, bool check1, decimal num1, decimal num2, decimal num3)
        {
            string capkey = text3;
            Rucaptcha.Key = capkey;
            string bal = Rucaptcha.Balance();
            double bala = double.Parse(bal.Replace(".", ","));

            text1 = text1.Replace(" ", "");
            text3 = text3.Replace(" ", "");
            text4 = text4.Replace(" ", "");

            try
            {    
                if ((text1 != "" && !text1.Contains("логин")) && (text2 != "" && !text2.Contains("Здесь Ваш текст.")) && (!bal.Contains("ERROR")))
                {
                    HERE:
                    if (!thread_stop)
                    {

                     for (int loo = 1; loo <= num3; loo++) {
                            ko = 0;
                            koko = 0;
                            if (bala < 10)
                            {

                                DateTime d = DateTime.Now;
                                string Textz = string.Format("{0:t}", d);
                                string Time = Textz.ToString();
                                Action action = () =>
                                {
                                    richTextBoxAccz.Text += "\n[" + Time + "] Баланс рукапчи не должен быть меньше 10-ти рублей. Пожалуйста, пополните. Текущий баланс: " + Rucaptcha.Balance() + ".\n";
                                };
                                Invoke(action);
                                thread_stop = true;
                                goto HERE;
                            }
                            if (!thread_stop)
                            {
                                if (num3 > 1)
                                {
                                    DateTime d22 = DateTime.Now;
                                    string Textz22 = string.Format("{0:t}", d22);
                                    string Time22 = Textz22.ToString();
                                    Action action234 = () =>
                                    {
                                        richTextBoxAccz.Text += "\n[" + Time22 + "] Выполняемый цикл: " + loo + ".\n";
                                    };
                                    Invoke(action234);
                                }
                            }
                            for (int i = 0; i < lines1.Length; i++) // Count of Accs

                        {

                            lines1[i] = lines1[i].Replace(" ", "");

                            if (!lines1[i].Contains(';'))
                            {

                                DateTime d = DateTime.Now;
                                string Textz = string.Format("{0:t}", d);
                                string Time = Textz.ToString();
                                Action action = () =>
                                {
                                    richTextBoxAccz.Text += "\n[" + Time + "] Пожалуйста, поставьте разделитель ';' на " + Convert.ToInt32(i + 1) + " строчке.\n";
                                };
                                Invoke(action);
                            }
                            else
                            {
                                var s = lines1[i].Split(';');
                                log = s[0].ToString();
                                pass = s[1].ToString();

                                try
                                {
                                    CountOfGr = 0;
                                    var vk = new VkApi();

                                    if (!thread_stop)
                                    {
                                        string result_auth = Auth(0, "", pass, log, i, vk, capkey); // Автоpизация
                                    }
                                    if (!thread_stop)
                                    {
                                        for (int k = koko; k < lines2.Length; k++) // Кол-во строк в тексбоксе групп.
                                        {

                                            lines2[k] = lines2[k].Replace(" ", "");

                                            koko = k;
                                            if (ko == num2)
                                            {
                                                ko = 0;
                                                break;
                                            }

                                            if (!thread_stop)
                                            {
                                                if (text2.Contains(';'))
                                                {
                                                    var te = text2.Split(';');
                                                    if (kaz == numericUpDown1.Value)
                                                    {
                                                        ka++;
                                                        kaz = numericUpDown1.Value - 1;
                                                    }
                                                    if (ka == te.Length)
                                                    {
                                                        ka = 0;
                                                        kaz = 0;
                                                    }
                                                    texta = te[ka];
                                                    kaz++;

                                                }
                                                else
                                                {
                                                    texta = text2;
                                                }

                                                firstIsVowel = (new Regex(@"club[0-9]{4,12}$").IsMatch(lines2[k]));

                                                if (firstIsVowel && !lines2[k].Contains("группа"))
                                                {
                                                    if (checkBox1.Checked == true)
                                                    {
                                                        prove = true;
                                                    }
                                                    else
                                                    {
                                                        prove = false;
                                                    }

                                                    var tro = lines2[k];
                                                    tro = tro.Replace("https://vk.com/club", "");
                                                    tro = tro.Replace("vk.com/club", "");
                                                    long id = long.Parse(tro);

                                                    Message(lines2, k, 0, "", prove, id, texta, vk, capkey, text4, check1, lines3, num1); // Оставить сообщение

                                                }
                                                else if (!firstIsVowel && !lines2[k].Contains("группа") && lines2[k].Contains("vk.com"))
                                                {
                                                    if (checkBox1.Checked == true)
                                                    {
                                                        prove = true;
                                                    }
                                                    else
                                                    {
                                                        prove = false;
                                                    }
                                                    var tro = lines2[k];
                                                    tro = tro.Replace("https://vk.com/", "");
                                                    tro = tro.Replace("vk.com/", "");
                                                    VkObject obj = vk.Utils.ResolveScreenName(tro);
                                                    long? ide = obj.Id;
                                                    string ido = ide.ToString();
                                                    long id = long.Parse(ido);

                                                    Message(lines2, k, 0, "", prove, id, texta, vk, capkey, text4, check1, lines3, num1); // Оставить сообщение
                                                }
                                                else
                                                {

                                                    DateTime di = DateTime.Now;
                                                    string Textza = string.Format("{0:t}", di);
                                                    string Timea = Textza.ToString();
                                                    Action action5 = () =>
                                                    {
                                                        richTextBoxAccz.Text += "\n[" + Timea + "] Пожалуйста, введите список групп в дополнительных настройках. В формате: vk.com/группа.\n";
                                                    };
                                                    Invoke(action5);
                                                }
                                            }
                                            ko++;
                                        }
                                    }
                                }
                                catch (Exception eXa)
                                {
                                    MessageBox.Show(eXa.ToString());
                                    DateTime di = DateTime.Now;
                                    string Textza = string.Format("{0:t}", di);
                                    string Timea = Textza.ToString();
                                    Action action = () =>
                                    {
                                        richTextBoxAccz.Text += "\n[" + Timea + "] Ошибка, невозможно авторизоваться в аккаунт с логином: " + log + ".\n";
                                    };
                                    Invoke(action);
                                }



                            }
                        } // accz
                    } // Loop
                } // if thread_stop != true
                }
                else
                {
                    if (text1 == "" || text1.Contains("логин"))
                    {

                        DateTime d = DateTime.Now;
                        string Textz = string.Format("{0:t}", d);
                        string Time = Textz.ToString();
                        Action action = () =>
                        {
                            richTextBoxAccz.Text += "\n[" + Time + "] Пожалуйста, введите логин и пароль от аккаунта.\n";
                        };
                        Invoke(action); }
                    if (text2 == "" || text2.Contains("Здесь Ваш текст."))
                    {

                        DateTime d = DateTime.Now;
                        string Textz = string.Format("{0:t}", d);
                        string Time = Textz.ToString();
                        Action action234 = () =>
                        {
                            richTextBoxAccz.Text += "\n[" + Time + "] Пожалуйста, введите текст в дополнительных настройках.\n";
                        };
                        Invoke(action234); }
                    if (bal.Contains("ERROR"))
                    {
                        DateTime d = DateTime.Now;
                        string Textz = string.Format("{0:t}", d);
                        string Time = Textz.ToString();
                        Action action23 = () =>
                        {
                            richTextBoxAccz.Text += "\n[" + Time + "] Пожалуйста, введите API ключ от сервиса rucaptcha.com.\n";
                        };
                        Invoke(action23);
                    }

                }

            }
            catch (Exception x)
            {
                MessageBox.Show(x.ToString());
            }

            DateTime dp = DateTime.Now;
            string Textzp = string.Format("{0:t}", dp);
            string Timep = Textzp.ToString();
            Action actionaio = () =>
            {
                richTextBoxAccz.Text += "\n[" + Timep + "] Работа успешно завершена.\n";
                button2.Enabled = true;
                thread_stop = true;
                button1.Text = "Запуск";
            };
            Invoke(actionaio);


        }
        

        private void button1_Click(object sender, EventArgs e)
       {
            string[] lines1 = richTextBoxAccsz.Lines;
            string[] lines2 = richTextBoxGroups.Lines;
            string text1 = richTextBoxAccsz.Text;
            string text2 = richTextBoxText.Text;
            string text3 = textBox1.Text;
            string[] lines3 = richTextBox1.Lines;
            string text4 = richTextBox1.Text;
            bool check1 = checkBox2.Checked;
            decimal num1 = numericUpDown4.Value;
            decimal num2 = numericUpDown3.Value;
            decimal num3 = numericUpDownLoop.Value;
            if (button1.Text == "Запуск")  {
                thread_stop = false;
                button2.Enabled = false;
                Thread thr = new Thread(() => StartPosting(lines1, lines2, text1, text2, text3, lines3, text4, check1, num1, num2, num3));
                thr.Start();
                button1.Text = "Стоп";
            }
            else if (button1.Text == "Стоп"){
                button2.Enabled = true;
                thread_stop = true;
                button1.Text = "Запуск";
            }

        }

        private void Form1_FormClosed(object sender, EventArgs e)
        {
            thread_stop = true;
        }

        private void Form1_FormClosing(object sender, EventArgs e)
        {
            thread_stop = true;
        }

        private void button4_Click(object sender, EventArgs e)
        {

            MessageBox.Show("Ваш серийный номер: " + code);

        }

        private void buttonSave_Click(object sender, EventArgs e)
        {    
            Properties.Settings.Default["Loop"] = numericUpDownLoop.Value;
            Properties.Settings.Default["ChangeAcc"] = numericUpDown3.Value;
            Properties.Settings.Default["CountPict"] = numericUpDown4.Value;
            Properties.Settings.Default["AddPic"] = checkBox2.Checked;
            Properties.Settings.Default["FromGr"] = checkBox1.Checked;
            Properties.Settings.Default["Api"] = textBox1.Text;
            Properties.Settings.Default["WaitSecT"] = trackBar1.Value;
            Properties.Settings.Default["WaitSecN"] = numericUpDown2.Value;
            Properties.Settings.Default["Accs"] = richTextBoxAccsz.Text;
            Properties.Settings.Default["TextChange"] = numericUpDown1.Value;
            Properties.Settings.Default["Groups"] = richTextBoxGroups.Text;
            Properties.Settings.Default["Text"] = richTextBoxText.Text;
            Properties.Settings.Default["Picture"] = richTextBox1.Text;
            Properties.Settings.Default.Save();
        }

        private void button6_Click(object sender, EventArgs e)
        {
            Properties.Settings.Default["Loop"] = numericUpDownLoop.Value;
            Properties.Settings.Default["ChangeAcc"] = numericUpDown3.Value;
            Properties.Settings.Default["CountPict"] = numericUpDown4.Value;
            Properties.Settings.Default["AddPic"] = checkBox2.Checked;
            Properties.Settings.Default["FromGr"] = checkBox1.Checked;
            Properties.Settings.Default["Picture"] = richTextBox1.Text;
            Properties.Settings.Default["Text"] = richTextBoxText.Text;
            Properties.Settings.Default["Groups"] = richTextBoxGroups.Text;
            Properties.Settings.Default["Api"] = textBox1.Text;
            Properties.Settings.Default["WaitSecT"] = trackBar1.Value;
            Properties.Settings.Default["WaitSecN"] = numericUpDown2.Value;
            Properties.Settings.Default["Accs"] = richTextBoxAccsz.Text;
            Properties.Settings.Default["TextChange"] = numericUpDown1.Value;
            Properties.Settings.Default.Save();

        }

        private void AuthBtn_Click(object sender, EventArgs e)
        {
           try
            {

                string Connection = "Server=;Port=3;Database=td;Uid=te4id;password=";
                MySqlConnection conn = new MySqlConnection(Connection);
                MySqlCommand command = conn.CreateCommand();
                command.CommandText = "Select MyKeysI from MyKey";

                conn.Open();


                MySqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    FromMySQL += reader["MyKeysI"].ToString() + " ";
                }

            code = AuthCode.Text;

            Properties.Settings.Default["Key"] = code;
            Properties.Settings.Default.Save();

            if (FromMySQL.Contains(code) && code.Length > 20 && !FromMySQL.Contains(code+"active"))
            {

                    string Connectiona = "Server=temah;Port=3Database=teid;Uid=tema4id;password=vkq7";
                    MySqlConnection conna = new MySqlConnection(Connectiona);
                    MySqlCommand commandAd = conna.CreateCommand();
                    commandAd.CommandText = ("UPDATE `MyKey` SET `MyKeysI`= '"+code+"active' WHERE MyKeysI = '"+code+"'");
                    conna.Open();
                    commandAd.ExecuteNonQuery();

                buttonAgain.Hide();
                toolStripContainer1.Hide();
                AuthBtn.Hide();
                AuthCode.Hide();
                TypeCode.Hide();
                ErrorOfKey.Hide();
                button7.Hide();

            }
            else 
            {
                    BaddConnection.Hide();
                    ErrorOfKey.Show();
            }
           }
            catch
           {
                ErrorOfKey.Hide();
               BaddConnection.Show();
            }

        }
       
        private void button7_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("http://www.spanchos.ru/pay.php");
        }

        private void richTextBox2_LinkClicked(object sender, LinkClickedEventArgs e)
        {
            System.Diagnostics.Process.Start("http://www.spanchos.ru/");
        }
        private void buttonAgain_Click(object sender, EventArgs e)
        {
            Startos();
           
        }

    }

   
}
