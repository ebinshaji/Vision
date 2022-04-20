using System.Windows.Forms;
using CefSharp;
using CefSharp.WinForms;
using System.IO;
using System.Reflection;
using ComponentFactory.Krypton.Toolkit;

namespace Core
{
    public partial class MainForm : KryptonForm
    {
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
            Cef.Initialize(settings);
            // Create a browser component
            chromeBrowser = new ChromiumWebBrowser(Path.Combine(appDir, @"Local\newhome.html"));
            chromeBrowser.DownloadHandler = new DownloadHandler();
            // Add it to the form and fill it to the form window.
            this.Controls.Add(chromeBrowser);
            chromeBrowser.Dock = DockStyle.Fill;
        }
        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            Cef.Shutdown();
        }




    }
}
