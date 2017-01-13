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
    public class RolesController : Controller
    {


        private ApplicationDbContext _ctx = null;
        public RolesController(ApplicationDbContext context)
        {
            _ctx = context;
        }

        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<MARS_Roles>> Get()
        {
            return await _ctx.MARS_Roles.Include(b => b.UserRoles).Include(b => b.RoleClaims).ToListAsync();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<MARS_Roles> Get(string id)
        {
            return await _ctx.MARS_Roles.Include(b => b.UserRoles).Include(b => b.RoleClaims).SingleOrDefaultAsync(t => t.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]MARS_Roles value)
        {
            _ctx.Add(value);
            _ctx.SaveChangesAsync();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody]MARS_Roles value)
        {
            _ctx.Update(value);
            _ctx.SaveChangesAsync();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            var role = _ctx.MARS_Roles.Include(b => b.UserRoles).Include(b => b.RoleClaims).SingleOrDefault(t => t.Id == id);
            _ctx.Remove<MARS_Roles>(role);
            _ctx.SaveChangesAsync();
        }
    }
}
