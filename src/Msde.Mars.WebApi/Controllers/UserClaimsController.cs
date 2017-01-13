using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Msde.Mars.Business.Entities.Models;
using Msde.Mars.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class UserClaimsController : Controller
    {
        private ApplicationDbContext _ctx = null;
        public UserClaimsController(ApplicationDbContext context)
        {
            _ctx = context;
        }



        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<MARS_UserClaims>> Get()
        {
            return await _ctx.MARS_UserClaims.Include(b => b.User).ToListAsync();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<MARS_UserClaims> Get(int id)
        {
            return await _ctx.MARS_UserClaims.Include(b => b.User).SingleOrDefaultAsync(a => a.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]MARS_UserClaims value)
        {
            _ctx.Add(value);
            _ctx.SaveChangesAsync();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]MARS_UserClaims value)
        {
            _ctx.Update(value);
            _ctx.SaveChangesAsync();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var claim = _ctx.MARS_UserClaims.Include(b => b.User).SingleOrDefault(a => a.Id == id);
            _ctx.Remove(claim);
            _ctx.SaveChangesAsync();

        }
    }
}
