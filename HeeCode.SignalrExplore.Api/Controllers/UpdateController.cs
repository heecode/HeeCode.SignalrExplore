using HeeCode.SignalrExplore.Api.SignalrHub;
using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HeeCode.SignalrExplore.Api.Controllers
{
    [RoutePrefix("api/updates")]
   
    public class UpdateController : ApiController
    {
        private readonly IHubContext _updateHub;

        public UpdateController()
        {
            _updateHub = GlobalHost.ConnectionManager.GetHubContext<UpdateHub>();
        }

        [Route("")]
        public IHttpActionResult Post()
        {
            _updateHub.Clients.All.getUpdates();
            return Ok();
        }


    }
}
