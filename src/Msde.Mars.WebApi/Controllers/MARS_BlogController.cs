using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Msde.Mars.Business.Entities.Models;
using Microsoft.EntityFrameworkCore;
using Msde.Mars.Repositories;
namespace Msde.Mars.WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class MARS_BlogController : Controller
    {
        private MarsDatabase _ctx = null;
        public MARS_BlogController(MarsDatabase ctx)
        {
            _ctx = ctx;
        }

        // GET api/[controller]/[id]
        [HttpGet("{id}")]
        public async Task<MARS_Blog> Get(string id)
        {
            return await _ctx.MARS_Blog
                    .Include(b => b.MARS_Blog_Entrys)
                        .ThenInclude(b => b.MARS_Blog_Entry_Tags)
                            .ThenInclude(b => b.MARS_Tags)           
                    .ThenInclude(c => c.MARS_Blog_Entry_Categorys)
                        .ThenInclude(b => b.MARS_Blog_Category)
                .Where(t => t.title == id).SingleOrDefaultAsync<MARS_Blog>();
           ;
        }

      
    }
}
