using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Msde.Mars.Repositories;
using Msde.Mars.Business.Entities.Models;
using Microsoft.AspNetCore.Cors;

namespace Msde.Mars.WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class EventController : Controller
    {

        private EventDatabase _ctx = null;
        public EventController(EventDatabase context)
        {
            _ctx = context;
        }

        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<EventStream>> Get()
        {
            return _ctx.EventStreams.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<EventStream> Get(string id)
        {
            return _ctx.EventStreams.Where(t => t.EventId.ToString() == id).SingleOrDefault<EventStream>();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]EventStream value)
        {
            //var eventStream = new EventStream();
            _ctx.EventStreams.Add(value);
            _ctx.SaveChangesAsync();

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody]EventStream value)
        {
            //you can never update an existing event
            throw new NotImplementedException();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            //you can never delete an existing event
            throw new NotImplementedException();
        }
    }
}
