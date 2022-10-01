using System.Windows.Forms;
using CefSharp;
using CefSharp.WinForms;
using System.IO;
using System.Reflection;
using ComponentFactory.Krypton.Toolkit;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;

namespace Core
{
    public partial class MainForm : KryptonForm
    {
        protected string clipdata;

        public ChromiumWebBrowser chromeBrowser;
        public MainForm()
        {
            InitializeComponent();

            InitializeChromium();
        }
        

       

        public void InitializeChromium()
        {
            string appDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().GetName().CodeBase);
            CefSettings settings = new CefSettings();
            // Initialize cef with the provided settings
            Cef.Initialize(settings, performDependencyCheck: true, browserProcessHandler: null);
            // Create a browser component
            chromeBrowser = new ChromiumWebBrowser(Path.Combine(appDir, @"Local\newhome.html"));
            chromeBrowser.DownloadHandler = new DownloadHandler();
            // Add it to the form and fill it to the form window.
            this.Controls.Add(chromeBrowser);
            chromeBrowser.Dock = DockStyle.Fill;
            CefSharpSettings.FocusedNodeChangedEnabled = true;


           

            //Perform dependency check to make sure all relevant resources are in our output directory.
           





            chromeBrowser.JavascriptObjectRepository.Settings.LegacyBindingEnabled = true;


            chromeBrowser.JavascriptMessageReceived += OnBrowserJavascriptMessageReceived;
            chromeBrowser.FrameLoadEnd += OnFrameLoadEnd;


        }













        public void OnFrameLoadEnd(object sender, FrameLoadEndEventArgs e)
        {
            if (e.Frame.IsMain)
            {
                chromeBrowser.ExecuteScriptAsync(@"
let element = document.getElementById('newfileftt');
element.onclick = function() {
        document.addEventListener('click', function(e) {
        CefSharp.PostMessage('exit');
}, false);}



");
            }
        }
  

        private void OnBrowserJavascriptMessageReceived(object sender, JavascriptMessageReceivedEventArgs e)
        {
            
            string messagedat = e.Message.ToString();
            switch (messagedat)
            {
                case "exit":
                    Application.Exit();
                    break;
            }
        }


















        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            Cef.Shutdown();
        }

        private void MainForm_Load(object sender, System.EventArgs e)
        {

        }
    }
}
