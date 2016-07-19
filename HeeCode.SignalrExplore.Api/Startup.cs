using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Microsoft.Owin.Cors;

[assembly: OwinStartup(typeof(HeeCode.SignalrExplore.Api.Startup))]

namespace HeeCode.SignalrExplore.Api
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888
            var config = new HttpConfiguration();
            app.UseCors(CorsOptions.AllowAll);
            app.MapSignalR();
            WebApiConfig.Register(config);
            app.UseWebApi(config);
            
        }
    }
}
