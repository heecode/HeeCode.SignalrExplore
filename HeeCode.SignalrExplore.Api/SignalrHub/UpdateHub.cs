using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace HeeCode.SignalrExplore.Api.SignalrHub
{
    [HubName("updateHub")]
    public class UpdateHub : Hub
    {
        public void Send(string message)
        {
            Clients.All.send(message);
        }
    }
}